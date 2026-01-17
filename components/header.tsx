"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/HAYI LOGO-01.png"
              alt="HAYi - Health Affairs for Youth Initiatives Logo"
              width={240}
              height={60}
              className="h-32 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary"}`}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary"}`}
            >
              About Us
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/programs"
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary"}`}
            >
              Programs
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/media"
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary"}`}
            >
              Media
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary"}`}
            >
              Contact
            </Link>
          </motion.div>
        </nav>

        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              asChild
              size="sm"
              className={`hidden md:inline-flex ${!scrolled ? "gradient-bg text-white hover:bg-secondary/90" : "bg-secondary text-white hover:bg-secondary/90"}`}
            >
              <Link href="/get-involved#donate">Get Involved</Link>
            </Button>
          </motion.div>
          <button
            className={`inline-flex items-center justify-center rounded-md p-2 md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto px-4 pb-6 md:hidden bg-background"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="rounded px-2 py-2 text-sm font-medium transition-colors hover:bg-muted"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded px-2 py-2 text-sm font-medium transition-colors hover:bg-muted"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/programs"
                className="rounded px-2 py-2 text-sm font-medium transition-colors hover:bg-muted"
                onClick={toggleMenu}
              >
                Programs
              </Link>
              <Link
                href="/media"
                className="rounded px-2 py-2 text-sm font-medium transition-colors hover:bg-muted"
                onClick={toggleMenu}
              >
                Media
              </Link>
              <Link
                href="/contact"
                className="rounded px-2 py-2 text-sm font-medium transition-colors hover:bg-muted"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button asChild size="sm" className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/get-involved#donate" onClick={toggleMenu}>
                  Get Involved
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
