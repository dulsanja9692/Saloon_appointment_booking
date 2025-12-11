const assets = {
    salonInfo: {
        name: "VELORA",
        tagline: "where Style Meets Elegance",
        description: "Professional Salon services with a modern touch.",
        
        contact: {
            address: "123/1, Main Road, Galle.",
            phone: "+94 74 160 2288",
            email: "booking@velora.com",
            website: "www.velora.com",
        },
        hours: {
            weekdays: "9:00 AM - 8:00 PM",
            saturday: "10:00 AM - 6:00 PM",
            sunday: "11:00 AM - 5:00 PM",
        },
        socialMedia: {
            facebook: "https://www.facebook.com/velora",
            instagram: "https://www.instagram.com/velora",
            twitter: "https://www.twitter.com/velora",      
        },
    },
    
    services: [
        {
            id: 1,
            name: "Haircut and Styling",
            description: "Professional haircut with modern styling and finishing.",
            duration: "30 mins",
            price: 1000.00,
            category: "hair",
            popular: true,
            icon: "✂️",
        },
        {
            id: 2,
            name: "Beard Trim and shape",
            description: "Precision beard trimming and shaping for a clean look.",
            duration: "20 mins",
            price: 800.00,
            category: "beard",
            popular: false,
            icon: "🧔",
        },
        {
            id: 3,
            name: "Hair Coloring",
            description: "Professional hair coloring with premium products.",
            duration: "60 mins",
            price: 5000.00,
            category: "hair",
            popular: false,
            icon: "🎨",
        },
        {
            id: 4,
            name: "Hot Towel Shave",
            description: "Traditional hot towel shave for a smooth finish.",
            duration: "35 mins",
            price: 6000.00,
            category: "shave",
            popular: false,
            icon: "🪒",
        },
    ],
    
    team: [
        {
            id: 1,
            name: "Samanthi Perera",
            position: "Senior Stylist",
            experience: "8 years",
            speciality: ["Haircut", "Coloring", "Styling"],
            bio: "Specializes in modern haircuts and vibrant coloring techniques.",
            available: true,
        },
        {
            id: 2,
            name: "Kamal Silva",
            position: "Beard Specialist",
            experience: "5 years",
            speciality: ["Beard Trimming", "Shaping", "Grooming"],
            bio: "Expert in precision beard styling and grooming services.",
            available: true,
        },
        {
            id: 3,
            name: "Nadeesha Fernando",
            position: "Shave Specialist",
            experience: "6 years",
            speciality: ["Hot Towel Shave", "Skin Care"],
            bio: "Provides traditional hot towel shave for a smooth finish.",
            available: true,
        }
    ],
    
    images: {
        backgrounds: {
            main: "/assets/images/backgrounds/cyberpunk-city.jpg",
            gradient: "/assets/images/backgrounds/neon-saloon.jpg",
            pattern: "/assets/images/backgrounds/purple-haze.jpg",
        },
        salon: {
            logo: "/assets/images/salon/logo.png",
            interior: "/assets/images/salon/interior.jpg",
            exterior: "/assets/images/salon/entrance.jpg",
        },
        services: {
            haircut: "/assets/images/services/haircut.jpg",
            beard: "/assets/images/services/beard-trim.jpg",
            coloring: "/assets/images/services/hair-color.jpg",
            shave: "/assets/images/services/shaving.jpg",
        },
        team: {
            samanthi: "/assets/images/team/barber-1.jpg",
            kamal: "/assets/images/team/barber-2.jpg",
            nadeesha: "/assets/images/team/stylist-1.jpg",
        }
    },

    icons: {
        social: {
            facebook: "FiFacebook",
            instagram: "FiInstagram",
            twitter: "FiTwitter",
            phone: "FiPhone",
            email: "FiMail",
            location: "FiMapPin",
        },
        serviceIcons: {
            haircut: "FiScissors",
            beard: "FiZap",
            color: "FiDroplet",
            shave: "FiWind",
        }
    },

    businessRules: {
        appointment: {
            minAdvanceBookingHours: 2,
            maxAdvanceBookingHours: 30,
            slotDurationMinutes: 30,
            dailySlots: {
                start: "09:00",
                end: "19:00",
                breakStart: "13:00",
                breakEnd: "14:00",
            },
            sameDayBooking: true,
            bufferTimeMinutes: 15,
        },
        cancellationPolicy: {
            freeCancellationHours: 24,
            lateCancellationFeePercentage: 50,
            noShowFeePercentage: 100,
        }
    },

    timeSlots: [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
    ],
    
    
    helpers: {
        formatPrice: (price) => {
            return `Rs. ${price.toFixed(2)}`;
        },
        
        formatDuration: (duration) => {
            return duration;
        },
        
        generateTimeSlots: () => {
            return assets.timeSlots;
        }
    }
};

export default assets;