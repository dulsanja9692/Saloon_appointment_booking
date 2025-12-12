'use client'

import { motion } from 'framer-motion'
import Navbar from './Components/layout/Navbar'
import AppointmentForm from './Components/forms/AppointmentForm'
import ServicesSection from './Components/sections/ServicesSection'
import TeamSection from './Components/sections/TeamSection'
import ContactSection from './Components/sections/ContactSection'
import assets from '@/public/assets/assets.js'

export default function Home() {
  const { salonInfo } = assets

  return (
    <>
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradien-to-r from-velora-pink via-velora-cyan to-velora-purple bg-clip-text text-transparent">
                {salonInfo.name}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">{salonInfo.tagline}</p>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              {salonInfo.description} Book your appointment online and experience luxury styling.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradien-to-r from-velora-cyan to-velora-green text-white font-bold rounded-xl text-lg hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Book Your Appointment
            </motion.button>
          </motion.div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-gradien-to-b from-velora-primary to-velora-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AppointmentForm />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 bg-velora-primary">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">{salonInfo.name}</h2>
              <p className="text-gray-400 mb-6">{salonInfo.tagline}</p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div>
                  <p className="text-gray-400 mb-2">Address</p>
                  <p className="text-gray-300">{salonInfo.contact.address}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Phone</p>
                  <p className="text-gray-300">{salonInfo.contact.phone}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Email</p>
                  <p className="text-gray-300">{salonInfo.contact.email}</p>
                </div>
              </div>

              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {salonInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Professional Salon Services | Galle, Sri Lanka
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}