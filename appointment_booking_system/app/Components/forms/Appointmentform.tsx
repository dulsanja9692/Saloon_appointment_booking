'use client'

import{useState, useEffect} from 'react'
import { motion } from "framer-motion"
// import {FiUser, FiPhone, FiMail, FiCalendar, FiClock} from 'react-icons/fi'
import assets from '../../../public/assets/assets'
import { GiSplitArrows } from 'react-icons/gi'

export default function AppoinemtForm(){
    const[formData, setFormData] = useState({
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

useEffect(() =>{
    const today = new Date().toISOString().split('T')[0]
    setFormData(prev => ({}))

})
    
}

