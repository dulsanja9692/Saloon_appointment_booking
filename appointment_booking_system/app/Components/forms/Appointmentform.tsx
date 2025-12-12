'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiPhone, FiMail, FiCalendar, FiClock } from 'react-icons/fi'
import assets from '@/public/assets/assets.js'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: assets.services[0].name,
    date: '',
    time: '',
    notes: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Set today's date as default
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    setFormData(prev => ({ ...prev, date: today }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name')
      setIsSubmitting(false)
      return
    }

    if (!formData.phone.trim()) {
      setError('Please enter your phone number')
      setIsSubmitting(false)
      return
    }

    if (!formData.date || !formData.time) {
      setError('Please select date and time')
      setIsSubmitting(false)
      return
    }

    try {
      // Save to MongoDB via API
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.name,
          customerPhone: formData.phone,
          customerEmail: formData.email,
          serviceType: formData.service,
          appointmentDate: formData.date,
          appointmentTime: formData.time,
          notes: formData.notes
        })
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || 'Failed to book appointment')
      }

      // Success
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: assets.services[0].name,
          date: new Date().toISOString().split('T')[0],
          time: '',
          notes: ''
        })
      }, 3000)

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An error occurred')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  
  const formatPrice = (serviceName: string) => {
    const service = assets.services.find(s => s.name === serviceName)
    return service ? `Rs. ${service.price.toFixed(2)}` : 'Rs. 0.00'
  }

  return (
    <div className="bg-gradien-to-br from-velora-secondary/90 to-velora-primary/90 p-8 rounded-2xl border border-white/10 shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 bg-gradien-to-r from-velora-cyan to-velora-green bg-clip-text text-transparent">
        Book Your Appointment
      </h2>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-center p-8 bg-gradien-to-r from-green-500/10 to-emerald-500/10 rounded-xl"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-green-400 mb-2">Appointment Confirmed!</h3>
          <p className="text-gray-300 mb-4"> We received your booking details</p>
          <div className="bg-white/5 rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-400">{formData.service}</p>
            <p className="font-bold">{formData.date} at {formData.time}</p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-velora-cyan text-sm font-medium mb-2">
                <FiUser /> Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-velora-cyan"
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-velora-cyan text-sm font-medium mb-2">
                <FiPhone /> Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-velora-cyan"
                placeholder="+94 XX XXX XXXX"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-velora-pink text-sm font-medium mb-2">
              <FiMail /> Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-velora-pink"
              placeholder="velora@email.com"
              disabled={isSubmitting}
            />
          </div>

         
          <div>
            <label className="block text-velora-purple text-sm font-medium mb-2">
              Select Service
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {assets.services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, service: service.name }))}
                  className={`p-4 rounded-xl text-left transition-all ${
                    formData.service === service.name
                      ? 'bg-gradien-to-r from-velora-purple to-velora-pink text-white'
                      : 'bg-white/5 hover:bg-white/10'
                  } ${isSubmitting ? 'opacity-50' : ''}`}
                  disabled={isSubmitting}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <h3 className="font-bold">{service.name}</h3>
                      <p className="text-sm text-gray-300 mt-1">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-velora-gold">
                        Rs. {service.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-velora-green text-sm font-medium mb-2">
                <FiCalendar /> Appointment Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-velora-green"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-velora-cyan text-sm font-medium mb-2">
                <FiClock /> Select Time *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-velora-cyan"
                required
                disabled={isSubmitting}
              >
                <option value="">Select a time</option>
                {assets.timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
              rows={3}
              placeholder="Any special requests or requirements..."
              disabled={isSubmitting}
            />
          </div>

         
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradien-to-r from-velora-cyan to-velora-green text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
          </button>

        
          {formData.date && formData.time && formData.service && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h3 className="font-bold text-velora-cyan mb-2">Appointment Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Service</p>
                  <p className="font-medium">{formData.service}</p>
                </div>
                <div>
                  <p className="text-gray-400">Price</p>
                  <p className="font-medium text-velora-gold">{formatPrice(formData.service)}</p>
                </div>
                <div>
                  <p className="text-gray-400">Date</p>
                  <p className="font-medium">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-gray-400">Time</p>
                  <p className="font-medium">{formData.time}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  )
}