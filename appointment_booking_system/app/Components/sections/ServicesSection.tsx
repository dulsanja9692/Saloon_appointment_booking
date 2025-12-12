'use client'

import { motion } from 'framer-motion'
import assets from '@/public/assets/assets.js'

export default function ServicesSection() {
  const popularServices = assets.services.filter(service => service.popular)

  return (
    <section id="services" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradien-to-r from-velora-pink to-velora-cyan bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional salon services with premium quality products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradien-to-br from-velora-secondary/80 to-velora-primary/80 p-6 rounded-2xl border border-white/10 hover:border-velora-cyan/30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-velora-gold">
                    Rs. {service.price.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
                </div>
                {service.popular && (
                  <span className="px-3 py-1 bg-velora-pink/20 text-velora-pink text-xs rounded-full">
                    Popular
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {popularServices.length > 0 && (
          <div className="mt-12 p-6 bg-gradien-to-r from-velora-purple/10 to-velora-pink/10 rounded-2xl border border-velora-purple/20">
            <h3 className="text-xl font-bold mb-4 text-center">Most Popular Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {popularServices.map((service) => (
                <div key={service.id} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                  <span className="text-xl">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}