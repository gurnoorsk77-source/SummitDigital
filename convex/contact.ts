import { mutation, query, action, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { Resend } from "resend";

export const sendMessage = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    inquiryType: v.string(),
    message: v.string(),
  },
  returns: v.id("messages"),
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      name: args.name,
      email: args.email,
      company: args.company,
      inquiryType: args.inquiryType,
      message: args.message,
    });

    // Schedule the email to be sent
    await ctx.scheduler.runAfter(0, internal.contact.sendEmailNotification, {
      name: args.name,
      email: args.email,
      message: args.message,
      inquiryType: args.inquiryType,
    });

    return messageId;
  },
});

export const listMessages = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("messages"),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
      company: v.optional(v.string()),
      inquiryType: v.string(),
      message: v.string(),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db.query("messages").order("desc").collect();
  },
});

export const sendEmailNotification = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
    inquiryType: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.log("No RESEND_API_KEY found. Message saved to DB but no email sent.");
      console.log("Message Details:", args);
      return null;
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Summit Digital <onboarding@resend.dev>",
      to: "gurnoorsk77@gmail.com",
      subject: `New Inquiry: ${args.inquiryType} from ${args.name}`,
      text: `
        Name: ${args.name}
        Email: ${args.email}
        Type: ${args.inquiryType}
        
        Message:
        ${args.message}
      `,
    });

    return null;
  },
});

