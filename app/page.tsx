"use client";

import Dropzone from "@/components/dropzone";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdImage, MdAudiotrack, MdMovie } from "react-icons/md";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 ml-5 pt-20 dark:text-black">
      {/* Background Animated Blobs */}
      <motion.div
        className="absolute top-10 -left-16 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 -right-16 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl space-y-6 sm:space-y-8 relative z-10"
      >
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-text-shimmer">
          Convert Any File <br />
          <span className="text-gray-700 dark:text-white">Faster. Smarter. Free.</span>
        </h1>

        {/* Subheading */}
        <p className="dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Drag, drop, and transform your{" "}
          <span className="font-semibold dark:text-gray-200 text-gray-700">images, audio, and videos</span> instantly — no limits, no hidden fees.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <FaCloudUploadAlt size={20} /> Upload & Convert
          </motion.button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-2xl border border-gray-500 hover:bg-white/10 transition font-medium dark:text-gray-300 text-gray-700">
            Learn More
          </button>
        </div>

        {/* Supported Types Showcase */}
        <div className="mt-8 sm:mt-10 flex justify-center gap-4 sm:gap-6 flex-wrap">
          {[
            { icon: <MdImage size={28} />, label: "Images" },
            { icon: <MdAudiotrack size={28} />, label: "Audio" },
            { icon: <MdMovie size={28} />, label: "Videos" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex flex-col items-center gap-1 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-gray-700 dark:text-gray-300 text-gray-700 shadow-lg"
            >
              {item.icon}
              <span className="text-sm sm:text-base">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="mt-6 sm:mt-10 flex items-center justify-center gap-6 sm:gap-10 flex-wrap text-4xl sm:text-5xl opacity-80">
          <SiNextdotjs title="Next.js" className="text-gray-800 dark:text-white" />
          <SiReact title="React" className="text-blue-500" />
          <SiTailwindcss title="Tailwind" className="text-sky-400" />
          <SiFramer title="Framer" className="text-pink-500" />
        </div>
      </motion.div>

      {/* Dropzone Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 sm:mt-20 w-full max-w-lg sm:max-w-3xl relative z-10 px-2"
      >
        <Dropzone />
      </motion.div>
    </section>
      <FAQ/>  
      </>
  );
}
