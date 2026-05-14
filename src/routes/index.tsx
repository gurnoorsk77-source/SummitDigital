import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  Search, 
  Mail,
  Phone,
  Layout,
  Menu,
  X,
  MessageSquare,
  Eye,
  Zap,
  ShieldCheck,
  BarChart3,
  ChevronDown
} from 'lucide-react'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Summit Digital Solutions | Premium Web Design' },
      { name: 'description', content: 'Custom websites designed to help your business stand out and grow faster.' }
    ]
  }),
  component: HomePage,
})

const PROJECTS = [
  {
    id: 1,
    title: 'The Golden Plate',
    category: 'Modern Restaurant Website',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    description: 'A complete digital transformation for a high-end restaurant. Features include online reservations, an interactive digital menu, and local SEO optimization that led to a 40% increase in bookings.',
    features: ['Online Reservation System', 'Digital Interactive Menu', 'Local SEO Package', 'Mobile-First Design']
  },
  {
    id: 2,
    title: 'Peak Performance',
    category: 'Fitness Gym Website',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    description: 'Designed to drive memberships and class sign-ups. This project integrated a custom schedule viewer and a lead capture system that converted 25% of visitors into gym trials.',
    features: ['Class Scheduling System', 'Lead Generation Form', 'Member Login Portal', 'Speed Optimization']
  },
  {
    id: 3,
    title: 'Sterling & Associates',
    category: 'Professional Law Firm',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    description: 'A clean, authoritative website for a boutique law firm. We focused on building trust through professional aesthetics and clear calls-to-action for free consultations.',
    features: ['Expertise Showcases', 'Consultation Booking', 'Client Testimonials', 'Secure Contact Forms']
  }
]

const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Our typical turnaround time for a Starter or Growth site is 2-4 weeks. Premium custom projects usually take 6-10 weeks depending on the complexity of the features required."
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Absolutely. Every site we build is 'Mobile-First.' It will look and function perfectly on smartphones, tablets, and desktops."
  },
  {
    q: "Do you help with SEO (Google Search)?",
    a: "Yes! Basic SEO is included in every package. For the Growth and Premium plans, we perform deep keyword research and optimization to help you rank higher for local searches."
  },
  {
    q: "Can I update the website myself later?",
    a: "Yes. We can build your site with a management system that allows you to change text, prices, and images without needing to write any code."
  }
]

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-blue-600 p-1.5 rounded-lg mr-2 shadow-lg shadow-blue-200">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">SUMMIT<span className="text-blue-600">DIGITAL</span></span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
              <Link to="/contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Get Started
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4 overflow-hidden"
            >
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-600">About</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-600">Services</a>
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-600">Portfolio</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-600">Pricing</a>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-semibold">Get Started</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400/20 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-6">
              Premium Web Design Agency
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Websites That Turn <span className="text-blue-600 italic">Visitors</span> Into Customers
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Custom websites designed to help your business stand out and grow faster. We build high-converting digital experiences for local businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#portfolio" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-blue-600 overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Our Mission</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">We Build High-Converting Websites For Local Businesses</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Summit Digital Solutions, we understand that a website is more than just a digital business card. It's your most powerful sales tool. We help local businesses build high-converting websites that improve credibility, attract customers, and grow revenue online.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2 text-blue-600">
                     <Zap className="w-5 h-5" />
                   </div>
                   <h4 className="font-bold text-slate-900">Fast Performance</h4>
                   <p className="text-sm text-slate-500 italic leading-snug">No more waiting. We build for speed.</p>
                </div>
                <div className="flex flex-col gap-2">
                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2 text-blue-600">
                     <BarChart3 className="w-5 h-5" />
                   </div>
                   <h4 className="font-bold text-slate-900">Growth Focused</h4>
                   <p className="text-sm text-slate-500 italic leading-snug">Every pixel is designed to convert.</p>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  'Custom designs tailored to your brand',
                  'Conversion-focused user experiences',
                  'Strategic SEO integration from day one',
                  'Mobile-first responsive architecture'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-4xl font-bold text-slate-900">Digital Solutions for Growth</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Custom Website Design',
                desc: 'Tailor-made designs that capture your brand essence and convert visitors.',
                icon: Layout
              },
              {
                title: 'Website Redesign',
                desc: 'Modernize your existing site with improved UX and contemporary aesthetics.',
                icon: Globe
              },
              {
                title: 'SEO Optimization',
                desc: 'Rank higher on Google and get found by local customers looking for your services.',
                icon: Search
              },
              {
                title: 'Mobile Optimization',
                desc: 'Lightning-fast performance and seamless experience on all mobile devices.',
                icon: Smartphone
              },
              {
                title: 'Business Branding',
                desc: 'Establish a cohesive visual identity that builds trust and recognition.',
                icon: Palette
              },
              {
                title: 'Custom Development',
                desc: 'Specialized functionality built to solve your unique business challenges.',
                icon: Code
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Recent Work</h2>
              <h3 className="text-4xl font-bold">Showcasing Excellence</h3>
              <p className="text-slate-400 mt-4 max-w-lg">Click on any project below to see details and results.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-2xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-3">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-blue-400 text-sm font-bold mb-2 block transform transition-transform duration-300 group-hover:-translate-y-1">{project.category}</span>
                  <h4 className="text-2xl font-bold mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">{project.title}</h4>
                  <div className="flex items-center gap-2 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="mt-4 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[60] cursor-zoom-out"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-10 lg:inset-x-[15%] lg:inset-y-[10%] bg-white z-[70] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 bg-slate-900/10 hover:bg-slate-900/20 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">{selectedProject.title}</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Project Overview</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                    <Link to="/contact" className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                      I want a site like this
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 text-center text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Pricing Plans</h2>
            <h3 className="text-4xl font-bold">Simple, Transparent Pricing</h3>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            {/* Starter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
            >
              <h4 className="text-xl font-bold mb-2">Starter</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">$250</span>
                <span className="text-slate-500">one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  '1–3 page website',
                  'Mobile-friendly design',
                  'Contact form',
                  'Basic SEO setup',
                  'Fast delivery'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block w-full py-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all text-center">
                Choose Plan
              </Link>
            </motion.div>

            {/* Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border-2 border-blue-600 shadow-xl relative scale-105 z-10 h-full flex flex-col"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h4 className="text-xl font-bold mb-2">Growth</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">$500</span>
                <span className="text-slate-500">one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Up to 5 custom pages',
                  'Modern premium design',
                  'Mobile optimization',
                  'SEO optimization',
                  'Social media integration',
                  'Speed optimization',
                  '2 revisions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 text-center">
                Choose Plan
              </Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
            >
              <h4 className="text-xl font-bold mb-2">Premium</h4>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">$799</span>
                <span className="text-slate-500">one-time</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  'Fully custom website',
                  'Up to 10 pages',
                  'Advanced animations',
                  'Full SEO setup',
                  'Booking systems',
                  'Custom branding',
                  'Priority support',
                  'Unlimited revisions (14d)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block w-full py-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all text-center">
                Choose Plan
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">FAQ</h2>
            <h3 className="text-4xl font-bold">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center group"
                >
                  <span className="font-bold text-lg group-hover:text-blue-600 transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg mr-2 shadow-lg shadow-blue-500/20">
                  <Layout className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white uppercase">SUMMIT<span className="text-blue-600">DIGITAL</span></span>
              </div>
              <p className="text-lg max-w-sm mx-auto md:mx-0">
                Helping local businesses build high-converting websites that grow revenue and build credibility online.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6">Contact</h5>
              <ul className="space-y-4">
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors text-blue-400 font-semibold underline">Contact Page</Link></li>
                <li>gurnoorsk77@gmail.com</li>
                <li>778-302-5866</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center">
            <p>&copy; {new Date().getFullYear()} Summit Digital Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
