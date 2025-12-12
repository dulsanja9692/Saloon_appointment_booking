'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'
import assets from '@/public/assets/assets.js'

export default function TeamSection() {
  return (
    <section id="team" className="py-16 bg-gradien-to-b from-velora-primary to-velora-secondary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradien-to-r from-velora-cyan to-velora-green bg-clip-text text-transparent">
            Meet Our Experts
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our skilled professionals are dedicated to providing you with the best salon experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assets.team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradien-to-br from-velora-secondary/80 to-velora-primary/80 p-6 rounded-2xl border border-white/10 hover:border-velora-pink/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-velora-cyan font-medium">{member.position}</p>
                  <p className="text-gray-400 text-sm">Experience: {member.experience}</p>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                  member.available 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {member.available ? (
                    <>
                      <FiCheckCircle /> Available
                    </>
                  ) : (
                    <>
                      <FiXCircle /> Unavailable
                    </>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-6">{member.bio}</p>

              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Specialities:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.speciality.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}