import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    inquiryType: v.string(),
    message: v.string(),
  }),
});
