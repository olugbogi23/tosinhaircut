/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Scissors, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ArrowUpRight, 
  Crown, 
  Medal, 
  Armchair, 
  Droplets, 
  Clock, 
  PhoneCall, 
  Mail, 
  CheckCircle2,
  Instagram,
  Facebook,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 1,
    title: "The Executive Cut",
    description: "Precision scissor work, fade options, and a hot towel finish.",
    duration: "45 Mins",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
    popular: true
  },
  {
    id: 2,
    title: "Beard Sculpting",
    description: "Shape, define, and condition using premium oils and balms.",
    duration: "30 Mins",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1000&auto=format&fit=crop",
    popular: false
  },
  {
    id: 3,
    title: "The Gold Standard",
    description: "Full haircut, beard trim, facial massage, and styling consultation.",
    duration: "75 Mins",
    image: "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1000&auto=format&fit=crop",
    popular: false
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "Working with Tosin was transformative. The attention to detail is unmatched. My style has never been more refined.",
    author: "Alex Rivera",
    role: "CEO, GrowthLabs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5.0,
    rotation: -5
  },
  {
    id: 2,
    text: "The expertise in both traditional and modern styles made my visit seamless. They delivered beyond expectations.",
    author: "Nina Patel",
    role: "Director, PixelCraft",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5.0,
    rotation: 5
  },
  {
    id: 3,
    text: "Exceptional service with a strategic mindset. Shamzcut helped me rethink my entire grooming routine.",
    author: "Marcus Webb",
    role: "VP Product, Velocity",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5.0,
    rotation: -2
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-sans selection:bg-stone-900 selection:text-white text-stone-900">
      {/* Main Wrapper */}
      <div className="sm:p-4 lg:p-6 max-w-[1600px] mx-auto p-2">
        
        {/* 1. HERO SECTION */}
        <header className="relative w-full h-[95vh] min-h-[700px] rounded-[2rem] overflow-hidden shadow-2xl bg-stone-950">
          {/* Background Image */}
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2940&auto=format&fit=crop" 
            alt="Barber Shop Interior" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>

          {/* Navigation Bar */}
          <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-lg py-4' : ''}`}>
            <div className="flex items-center gap-3">
              <div className="backdrop-blur-md p-2 rounded-lg border flex items-center justify-center bg-white/10 border-white/10 text-white">
                <Scissors className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium tracking-tight text-white">Shamzcut by Tosin.</span>
            </div>

            <div className="hidden md:flex gap-1 bg-white/10 border-white/10 border rounded-full p-1.5 backdrop-blur-md items-center">
              {['About', 'Services', 'Gallery', 'Book Now'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`} 
                  className="px-5 py-2 text-sm rounded-full transition-colors text-white/90 hover:text-white hover:bg-white/10"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#location" className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md border transition-colors bg-white/10 border-white/10 text-white hover:bg-white/20">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="#reservation" className="group flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105 bg-white">
                <span className="text-sm font-medium text-stone-900">Book with Shamzcut</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors bg-stone-900 text-white">
                  <Calendar className="w-4 h-4" />
                </span>
              </a>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col w-full h-full items-center justify-center text-center px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase backdrop-blur-md rounded-full border text-white bg-white/20 border-white/10">
                Est. 2018 — Redcar
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tighter mb-6 text-white">
                Refine Your Image,<br />Master Your Style.
              </h1>
              <p className="text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto text-white/80">
                More than just a haircut. Experience the art of traditional grooming fused with modern precision at Shamzcut by Tosin.
              </p>
              
              <a href="#services" className="group inline-flex items-center gap-4 pl-8 pr-2 py-2 rounded-full hover:shadow-xl transition-all bg-white text-stone-900 hover:shadow-white/10">
                <span className="text-base font-medium">View Services</span>
                <span className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors bg-stone-900 text-white">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </a>
            </motion.div>
          </div>
        </header>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="mt-24 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <span className="text-stone-500 font-medium uppercase text-xs tracking-wider mb-4 block">The Shamzcut Legacy</span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6 text-stone-900">
                Where Tradition Meets Precision
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed mb-6 font-light">
                Founded by master barber Tosin, Shamzcut was born from a desire to restore the dignity of the gentleman's grooming ritual. We don't just cut hair; we sculpt confidence.
              </p>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                Every service is a bespoke experience, tailored to your bone structure, hair texture, and lifestyle. Sit back in our premium leather chairs, enjoy a complimentary espresso, and let the experts handle the rest.
              </p>
              
              <div className="flex gap-10 border-t pt-8 border-stone-200">
                <div>
                  <span className="block text-2xl font-semibold text-stone-900">5k+</span>
                  <span className="text-sm text-stone-500">Clients Styled</span>
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-stone-900">12+</span>
                  <span className="text-sm text-stone-500">Years Experience</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2670&auto=format&fit=crop" 
                  alt="Barber working" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="backdrop-blur-md p-4 rounded-xl border inline-flex items-center gap-4 shadow-lg bg-white/90 border-white/20">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-stone-900 text-white">
                      <Crown className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Head Barber</span>
                      <p className="font-medium text-sm text-stone-900">Tosin's Signature</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. SERVICES HIGHLIGHTS */}
        <section id="services" className="mt-24 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-stone-900">Service Menu</h2>
              <p className="text-stone-500 font-light">Curated grooming packages designed for the modern man.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 font-medium hover:opacity-70 mt-4 md:mt-0 transition-opacity text-stone-900">
              Download Price List 
              <Droplets className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="group relative p-2 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 bg-white hover:shadow-stone-200/50"
              >
                <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={service.title}
                    referrerPolicy="no-referrer"
                  />
                  {service.popular && (
                    <div className="absolute top-4 right-4 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold shadow-sm bg-white/90">Popular</div>
                  )}
                </div>
                <div className="px-4 pb-6">
                  <h3 className="text-xl font-semibold mb-2 text-stone-900">{service.title}</h3>
                  <p className="text-stone-500 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mt-4 border-t pt-4 border-stone-100">
                    <span className="text-sm font-medium text-stone-400">{service.duration}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-stone-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. WHY CHOOSE SHAMZCUT */}
        <section className="mt-24 rounded-[2rem] overflow-hidden relative py-20 px-6 sm:px-12 bg-stone-900 text-white">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <img 
              src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2535&auto=format&fit=crop" 
              alt="Texture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">Why Shamzcut?</h2>
            <p className="text-lg font-light text-stone-400">We don't just provide a service; we curate an experience of relaxation and renewal.</p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="backdrop-blur-md p-8 rounded-3xl border text-center transition-colors bg-white/5 border-white/5 hover:bg-white/10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white text-stone-900">
                <Medal className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Master Barbers</h3>
              <p className="font-light text-sm text-stone-400">Our team consists of award-winning stylists with decades of combined experience.</p>
            </div>

            <div className="backdrop-blur-md p-8 rounded-3xl border text-center transition-colors bg-white/5 border-white/5 hover:bg-white/10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white text-stone-900">
                <Armchair className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Comfort</h3>
              <p className="font-light text-sm text-stone-400">Relax in our vintage Japanese Takara Belmont chairs with complimentary beverages.</p>
            </div>

            <div className="backdrop-blur-md p-8 rounded-3xl border text-center transition-colors bg-white/5 border-white/5 hover:bg-white/10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-white text-stone-900">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Top-Tier Products</h3>
              <p className="font-light text-sm text-stone-400">We strictly use high-end, organic grooming products for your skin and hair health.</p>
            </div>
          </div>
        </section>

        {/* 5. GALLERY / TESTIMONIALS */}
        <section id="gallery" className="py-24">
          <div className="text-center mb-12">
            <p className="text-xs uppercase text-stone-500 tracking-widest mb-2 font-medium">
              Featured Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter">
              Client Highlights
            </h2>
          </div>

          <div className="relative flex items-center justify-center py-12 sm:py-20 min-h-[500px]">
            <div className="flex flex-wrap justify-center gap-8 md:gap-0 relative">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: testimonial.rotation }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative w-[340px] h-[340px] md:-mx-12 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-black/5 rounded-2xl shadow-2xl transition-transform group-hover:scale-105 group-hover:z-10 bg-white/80 p-6">
                    <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg mb-4 bg-stone-100">
                      <Quote className="w-4 h-4 text-stone-700" />
                    </div>
                    <p className="text-sm leading-relaxed mb-4 text-stone-900 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-3 border-t flex items-center justify-between border-stone-200">
                      <div className="flex items-center gap-2">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="h-8 w-8 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="text-xs font-medium text-stone-900">
                            {testimonial.author}
                          </div>
                          <div className="text-[10px] text-stone-500">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Medal className="w-3 h-3 text-amber-500" />
                        <span className="text-xs font-medium">{testimonial.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OPENING HOURS */}
        <section className="mt-24 px-4 sm:px-6">
          <div className="sm:p-12 lg:p-16 overflow-hidden text-center bg-stone-50 border-stone-100 border rounded-[2rem] py-12 relative shadow-lg">
            <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 bg-stone-200"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Clock className="w-10 h-10 mx-auto mb-6 text-stone-900" />
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-8 text-stone-900">Shop Hours</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <div className="p-6 rounded-2xl shadow-sm border bg-white border-stone-100">
                  <span className="block text-sm text-stone-500 font-medium uppercase tracking-wider mb-2">Tue - Fri</span>
                  <span className="text-2xl font-semibold text-stone-900">10:00 - 20:00</span>
                </div>
                <div className="p-6 rounded-2xl shadow-sm border bg-white border-stone-100">
                  <span className="block text-sm text-stone-500 font-medium uppercase tracking-wider mb-2">Sat - Sun</span>
                  <span className="text-2xl font-semibold text-stone-900">09:00 - 18:00</span>
                </div>
              </div>
              <p className="mt-8 text-stone-500 font-light">Closed on Mondays for team training.</p>
            </div>
          </div>
        </section>

        {/* 7. LOCATION */}
        <section id="location" className="mt-24 px-4 sm:px-6">
          <div className="rounded-[2rem] overflow-hidden relative h-[400px] group bg-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Map Location"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/10 transition-colors"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur p-8 rounded-3xl shadow-2xl text-center max-w-md w-[90%] border bg-white/95 border-white/50">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-stone-900 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-2 text-stone-900">Find Shamzcut</h3>
              <p className="font-light text-stone-500 mb-6">55 Roseberry Road, Redcar<br />North Yorkshire, TS10</p>
              <a href="https://www.google.com/maps/search/?api=1&query=55+Roseberry+Road,+Redcar,+North+Yorkshire,+TS10" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold border-b pb-0.5 transition-colors text-stone-900 border-stone-900 hover:text-stone-600 hover:border-stone-600">
                Get Directions
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 8. RESERVATION */}
        <section id="reservation" className="mt-24 mb-12">
          <div className="rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-xl border flex flex-col lg:flex-row gap-12 lg:gap-24 bg-white border-stone-100">
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6 text-stone-900">Book Your Chair</h2>
              <p className="text-stone-500 text-lg font-light mb-10 max-w-md">Appointments are highly recommended. Secure your slot with Tosin or our senior barbers.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors border bg-stone-50 border-stone-100">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-stone-400">Call Us</span>
                    <a href="tel:+4407842333021" className="text-lg font-medium hover:underline text-stone-900">+44 07842 333021</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors border bg-stone-50 border-stone-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-stone-400">Email</span>
                    <a href="mailto:booking@shamzcut.com" className="text-lg font-medium hover:underline text-stone-900">booking@shamzcut.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 rounded-3xl p-8 border bg-stone-50 border-stone-100">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Date</label>
                    <input type="date" className="w-full border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-stone-900 focus:outline-none shadow-sm font-medium bg-white text-stone-900" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Service</label>
                    <div className="relative">
                      <select className="w-full border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-stone-900 focus:outline-none shadow-sm appearance-none font-medium bg-white text-stone-900">
                        <option>Executive Cut</option>
                        <option>Beard Sculpting</option>
                        <option>The Gold Standard</option>
                        <option>Buzz Cut</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full border-0 rounded-xl px-4 py-3 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none shadow-sm bg-white text-stone-900" placeholder="Your Full Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone</label>
                  <input type="tel" className="w-full border-0 rounded-xl px-4 py-3 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none shadow-sm bg-white text-stone-900" placeholder="+44 ..." />
                </div>
                
                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative w-5 h-5 rounded border flex items-center justify-center transition-colors group-hover:border-stone-500 border-stone-300 bg-white">
                      <input type="checkbox" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" />
                      <CheckCircle2 className="opacity-0 peer-checked:opacity-100 transition-opacity text-stone-900 w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-stone-500 select-none">Subscribe to our newsletter for styling tips.</span>
                  </label>
                </div>

                <button type="submit" className="w-full font-medium py-4 rounded-xl mt-4 flex items-center justify-center gap-2 group transition-colors shadow-lg bg-stone-900 text-white hover:bg-stone-800 shadow-stone-900/10">
                  Confirm Booking
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 9. FOOTER */}
        <footer className="py-10 px-6 flex flex-col md:flex-row items-start justify-between border-t gap-8 border-stone-200">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded border flex items-center justify-center bg-stone-900 border-stone-800 text-white">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="font-semibold tracking-tight text-stone-900">Shamzcut.</span>
            </div>
            <p className="text-sm text-stone-500 max-w-xs">Precision grooming for the modern gentleman. Look sharp, feel confident.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-sm">
            <div>
              <h4 className="font-semibold mb-3 text-stone-900">Company</h4>
              <ul className="space-y-2 text-stone-500">
                <li><a href="#about" className="transition-colors hover:text-stone-900">Our Story</a></li>
                <li><a href="#services" className="transition-colors hover:text-stone-900">Services</a></li>
                <li><a href="#gallery" className="transition-colors hover:text-stone-900">Gallery</a></li>
                <li><a href="#" className="transition-colors hover:text-stone-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-stone-900">Visit</h4>
              <ul className="space-y-2 text-stone-500">
                <li><a href="#location" className="transition-colors hover:text-stone-900">Locations</a></li>
                <li><a href="#reservation" className="transition-colors hover:text-stone-900">Book Online</a></li>
                <li><a href="#" className="transition-colors hover:text-stone-900">Contact</a></li>
                <li><a href="#" className="transition-colors hover:text-stone-900">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-stone-900">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-stone-100 hover:bg-stone-200 text-stone-700">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-stone-100 hover:bg-stone-200 text-stone-700">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="text-center pb-6 text-xs border-t pt-6 mt-6 text-stone-400 border-stone-100">
          © 2026 Shamzcut by Tosin. All rights reserved.
        </div>

      </div>
    </div>
  );
}
