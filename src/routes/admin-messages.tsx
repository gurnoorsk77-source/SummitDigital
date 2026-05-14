import { createFileRoute, Link } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { convexQuery } from '@convex-dev/react-query'
import { api } from '../../convex/_generated/api'
import { useState, Suspense } from 'react'

export const Route = createFileRoute('/admin-messages')({
  head: () => ({
    meta: [{ title: 'Admin | Inquiries' }]
  }),
  component: AdminGate,
})

function AdminGate() {
  const [passcode, setPasscode] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode.toLowerCase().trim() === 'summit2024') {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect passcode')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-slate-900 text-center">Admin Access</h1>
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Enter Passcode</label>
              <input 
                type="password" 
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
              />
            </div>
            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
              View Messages
            </button>
            <Link to="/" className="block text-center text-sm text-slate-500 hover:underline mt-4">Back to Website</Link>
          </form>
        </div>
      </div>
    )
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading messages...</div>}>
      <AdminMessagesPage />
    </Suspense>
  )
}

function AdminMessagesPage() {
  const { data: messages } = useSuspenseQuery(convexQuery(api.contact.listMessages, {}))

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <div className="w-5 h-5 text-white flex items-center justify-center font-bold text-xs uppercase">A</div>
            </div>
            <span className="font-bold text-slate-900">Summit Admin Dashboard</span>
          </div>
          <Link to="/" className="text-sm text-slate-600 hover:text-blue-600 font-medium">Exit Admin</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-slate-900">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold">Client Inquiries</h1>
            <p className="text-slate-600 mt-2">Manage and view all messages from the contact form.</p>
          </div>
          <div className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
            {messages.length} Total Messages
          </div>
        </div>

        <div className="grid gap-6">
          {messages.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-16 text-center">
              <div className="text-4xl mb-4">📥</div>
              <h3 className="text-xl font-bold">No messages yet</h3>
              <p className="text-slate-500 mt-2">When clients reach out, their info will appear here.</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg._id} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg uppercase">
                        {msg.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{msg.name}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mt-1">
                          <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline font-medium">{msg.email}</a>
                          {msg.company && (
                            <span className="flex items-center gap-1 italic">
                              at {msg.company}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                        {msg.inquiryType}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(msg._creationTime).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {msg.message}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <a 
                      href={`mailto:${msg.email}?subject=Re: Your inquiry regarding ${msg.inquiryType}`}
                      className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all"
                    >
                      Reply to Client
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  )
}
