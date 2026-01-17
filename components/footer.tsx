"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/HAYI LOGO-02.png"
                alt="HAYi - Health Affairs for Youth Initiatives Logo"
                width={140}
                height={40}
              />
            </Link>
            <p className="mb-6 text-sm opacity-90">
              Health Affairs for Youth Initiatives (HAYi) is the social impact arm of HASO GROUP, committed to advancing youth health, gender equity, and empowerment in Rwanda.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-white/80 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-white/80 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" className="hover:text-white/80 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-white/80 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white/80 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white/80 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white/80 transition-colors">
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-white/80 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-white/80 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/80 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6">Programs</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/programs#menya-wirinde-ubeho" className="hover:text-white/80 transition-colors">
                  Menya, Wirinde, Ubeho
                </Link>
              </li>
              <li>
                <Link href="/programs#mental-health" className="hover:text-white/80 transition-colors">
                  Mental Health & Wellbeing
                </Link>
              </li>
              <li>
                <Link href="/programs#gbv-prevention" className="hover:text-white/80 transition-colors">
                  GBV Prevention & Safe Spaces
                </Link>
              </li>
              <li>
                <Link href="/programs#leadership" className="hover:text-white/80 transition-colors">
                  Leadership & Advocacy
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="font-bold mb-6">Subscribe</h3>
            <p className="mb-4 text-sm opacity-90">Stay updated with our latest news and events.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 placeholder:text-white/50 text-white"
              />
              <Button className="w-full gradient-bg text-white hover:bg-secondary/90">Subscribe</Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-white/20 pt-6 text-center text-sm opacity-90"
        >
          <p>&copy; {new Date().getFullYear()} Health Affairs for Youth Initiatives (HAYi) – All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}
