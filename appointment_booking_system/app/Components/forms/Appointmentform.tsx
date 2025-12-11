'use client'

import{useState, useEffect} from 'react'
import { motion } from "framer-motion"
import {FiUser, FiPhone, FiMail, FiCalendar, FiClock} from 'react-icons/fi'

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

    
}

