import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function About() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative w-full mt-20 rounded-t-[40px] flex flex-col items-center bg-black text-white overflow-hidden px-6 md:px-16">
      
      {/* Top Section: Hero Text & Rotating Button */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-7xl md:text-[150px] font-bold tracking-tighter text-[#222] leading-none select-none">
          Let’s <br /> talk now
        </h1>

        <div className="relative -mt-20 flex items-center justify-center w-44 h-44">
          <motion.div style={{ rotate }} className="absolute w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" className="fill-none" />
              <text className="text-[9px] uppercase tracking-[3px] font-semibold">
                <textPath href="#circlePath">GET IN TOUCH GET IN TOUCH GET IN TOUCH</textPath>
              </text>
            </svg>
          </motion.div>
          <div className="z-20 text-3xl font-light">→</div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 pb-20 pt-10 border-t border-gray-900">
        
        {/* Column 1: Image */}
        <div className="md:col-span-4">
          <div className="rounded-3xl overflow-hidden h-[350px] group">
            <img 
              src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-645x500.jpg" 
              alt="Team" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-3 flex flex-col gap-4 text-3xl md:text-4xl font-medium">
          {['About Us', 'Journal', 'Faq', 'Get In Touch', 'Careers'].map((item) => (
            <a key={item} href="#" className="hover:text-gray-400 transition-colors">{item}</a>
          ))}
        </div>

        {/* Column 3: Contact & Info */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              At <span className="text-white font-semibold">Floka</span>, we believe furniture should be more than just functional—it should tell your story. With a focus on timeless design, sustainable materials, and expert craftsmanship, we create pieces that feel personal.
            </p>
            
            <div className="space-y-2 text-lg">
              <p className="hover:text-gray-300 cursor-pointer transition">info@floka-design.com</p>
              <p>+123 (456 789 00)</p>
              <p className="text-gray-500">12/A, Booston Tower, NYC</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10">
            {[
              { icon: <FaFacebookF />, link: '#' },
              { icon: <FaXTwitter />, link: '#' },
              { icon: <FaLinkedinIn />, link: '#' },
              { icon: <FaBehance />, link: '#' }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-800 hover:bg-white hover:text-black transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}