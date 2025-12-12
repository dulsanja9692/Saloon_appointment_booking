'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import assets from '@/public/assets/assets.js'

export default function ContactSection() {
  const { salonInfo } = assets

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-velora-pink to-velora-cyan bg-clip-text text-transparent">
              Contact Us
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-velora-pink/10">
                  <FiMapPin className="text-velora-pink text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Address</h3>
                  <p className="text-gray-300">{salonInfo.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-velora-cyan/10">
                  <FiPhone className="text-velora-cyan text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone</h3>
                  <p className="text-gray-300">{salonInfo.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-velora-purple/10">
                  <FiMail className="text-velora-purple text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-gray-300">{salonInfo.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-velora-green/10">
                  <FiClock className="text-velora-green text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mon - Fri</span>
                      <span className="text-gray-300">{salonInfo.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-gray-300">{salonInfo.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-gray-300">{salonInfo.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href={salonInfo.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all"
                  >
                    <FiFacebook className="text-blue-400 text-xl" />
                  </a>
                  <a 
                    href={salonInfo.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 transition-all"
                  >
                    <FiInstagram className="text-pink-400 text-xl" />
                  </a>
                  <a 
                    href={salonInfo.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 transition-all"
                  >
                    <FiTwitter className="text-sky-400 text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-velora-secondary/80 to-velora-primary/80 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Our Location</h3>
            <div className="aspect-video bg-gradient-to-br from-velora-purple/20 to-velora-pink/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <p className="text-gray-300">{salonInfo.contact.address}</p>
                <p className="text-gray-400 text-sm mt-2">Galle, Sri Lanka</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-velora-cyan/10 to-velora-green/10 rounded-xl">
              <p className="text-center">
                <span className="font-bold">Easy to find!</span>
                <span className="text-gray-300 ml-2">Located on Main Road, Galle</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}