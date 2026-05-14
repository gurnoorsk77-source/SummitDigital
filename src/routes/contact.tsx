import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | Summit Digital Solutions' },
      { name: 'description', content: 'Reach out to Summit Digital Solutions for a free strategy call and website audit.' }
    ]
  }),
  component: ContactPage,
})

function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const sendMessage = useMutation(api.contact.sendMessage)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    const formData = new FormData(e.currentTarget)
    try {
      await sendMessage({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        company: (formData.get('company') as string) || undefined,
        inquiryType: formData.get('inquiryType') as string,
        message: formData.get('message') as string,
      })
      setFormStatus('sent')
    } catch (error) {
      console.error(error)
      setFormStatus('idle')
      alert('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 w-full z-50 border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <span className="text-lg font-bold tracking-tight text-slate-900 uppercase">SUMMIT<span className="text-blue-600">DIGITAL</span></span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-blue-600 flex items-center hover:text-blue-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <main>
        {/* Header Section */}
        <section className="bg-slate-50 py-20 lg:py-28 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                  Let's Build Something <span className="text-blue-600">Extraordinary</span> Together
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Have a project in mind or just want to chat about your digital strategy? We're here to help your local business dominate the online space.
                </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
              
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
                  <div className="space-y-8">
                    <div>
                        <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email Us</p>
                        <a href="mailto:gurnoorsk77@gmail.com" className="text-lg text-slate-600 hover:text-blue-600 transition-colors">gurnoorsk77@gmail.com</a>
                        <p className="text-sm text-slate-400 mt-1">We respond within 24 hours</p>
                    </div>

                    <div>
                        <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Call Us</p>
                        <a href="tel:+17783025866" className="text-lg text-slate-600 hover:text-blue-600 transition-colors">778-302-5866</a>
                        <p className="text-sm text-slate-400 mt-1">Mon-Fri, 9am - 6pm PST</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-blue-600 text-white relative overflow-hidden shadow-xl shadow-blue-200">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Ready for a Free Audit?</h3>
                    <p className="text-blue-100 mb-6">Get a professional review of your current website and local SEO presence.</p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                      Claim Your Free Audit
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 lg:p-12">
                  {formStatus === 'sent' ? (
                    <div className="text-center py-12">
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                      <p className="text-lg text-slate-600 mb-8">Thank you for reaching out. A member of our team will be in touch with you shortly.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="text-blue-600 font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                          <input 
                            required
                            name="name"
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                          <input 
                            required
                            name="email"
                            type="email" 
                            placeholder="john@company.com" 
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                          <input 
                            name="company"
                            type="text" 
                            placeholder="Your Business" 
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-white transition-all"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700 ml-1">Inquiry Type</label>
                          <select name="inquiryType" className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-white transition-all appearance-none">
                            <option>New Project Inquiry</option>
                            <option>Website Redesign</option>
                            <option>SEO Strategy</option>
                            <option>White Label Partnerships</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 ml-1">Tell us about your project</label>
                        <textarea 
                          required
                          name="message"
                          rows={6} 
                          placeholder="What are your goals? Do you have an existing website? What's your timeframe?" 
                          className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 focus:bg-white transition-all"
                        ></textarea>
                      </div>

                      <button 
                        disabled={formStatus === 'sending'}
                        className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'sending' ? (
                          "Sending..."
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center mb-8">
            <span className="text-lg font-bold tracking-tight text-white uppercase">SUMMIT<span className="text-blue-600">DIGITAL</span></span>
          </div>
          <p className="mb-8">&copy; {new Date().getFullYear()} Summit Digital Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
