'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiScissors, FiCalendar, FiPhone } from 'react-icons/fi'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-velora-secondary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="p-2 rounded-xl bg-gradien-to-r from-velora-pink to-velora-cyan">
              <FiScissors className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">VELORA</h1>
              <p className="text-xs text-gray-300">Style Meets Elegance</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">
              Home
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-gray-300 hover:text-white">
              Book Now
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white">
              Services
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-white">
              Our Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">
              Contact
            </button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('booking')}
              className="ml-4 px-6 py-2 bg-gradien-to-r from-velora-cyan to-velora-green text-white font-bold rounded-lg hover:shadow-lg"
            >
              <FiCalendar className="inline mr-2" />
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {isMenuOpen ? (
              <FiX className="text-white text-2xl" />
            ) : (
              <FiMenu className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
          >
            <div className="space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                Home
              </button>
              <button onClick={() => scrollToSection('booking')} className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                Book Now
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                Services
              </button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                Our Team
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                Contact
              </button>
              
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-400 p-2">
                  <FiPhone /> +94 74 160 2288
                </div>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="w-full mt-3 py-3 bg-gradien-to-r from-velora-cyan to-velora-green text-white font-bold rounded-lg"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}