"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const aboutLinks = [
  { label: "Who We Are", href: "/about#our-story", description: "Learn how HAYi started and why we exist." },
  { label: "Mission & Vision", href: "/about#mission-vision", description: "See where we are headed as a movement." },
  { label: "Our Values", href: "/about#values", description: "The principles that guide our work." },
  { label: "Team", href: "/about#team", description: "Meet the people behind HAYi." },
]

const programGroups = [
  {
    label: "SRHR, HIV & GBV Prevention",
    href: "/programs#menya-wirinde-ubeho",
    summary: "Empowering youth with SRHR knowledge, HIV prevention, and safe spaces.",
    subPrograms: ["Menya, Wirinde, Ubeho", "UMURINZI"],
  },
  {
    label: "Mental Health & Wellbeing",
    href: "/programs#mental-health",
    summary: "Building resilience, reducing stigma, and expanding support for youth.",
    subPrograms: ["MindUp", "Mentora"],
  },
  {
    label: "Healthy Lifestyle, Nutrition & WASH",
    href: "/programs#healthy-lifestyle",
    summary: "Promoting active living, good nutrition, hygiene, and safe water.",
    subPrograms: ["HealthEmpower", "NutriChamp", "MajiLife"],
  },
  {
    label: "Leadership, Advocacy & Policy",
    href: "/programs#leadership",
    summary: "Equipping youth to influence policy and lead social change.",
    subPrograms: ["NextWave", "Policy Spotlight"],
  },
  {
    label: "Career & Socio-Economic Empowerment",
    href: "/programs#career-development",
    summary: "Supporting youth with skills, mentorship, and economic opportunities.",
    subPrograms: ["LevelUp"],
  },
]

const teamSections = [
  { label: "Founder & Executive Chairperson", href: "/about#team" },
  { label: "Founding Members", href: "/about#team" },
]

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

        {/* Desktop Navigation with dropdowns */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-foreground" : "text-primary"}`}
          >
            Home
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              {/* About dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent text-sm font-medium ${scrolled ? "text-foreground" : "text-primary"}`}>
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-muted/50 p-3 dark:bg-background">
                  <div className="grid w-[420px] gap-2 rounded-lg border bg-popover p-3 shadow">
                    {aboutLinks.map((item) => (
                      <NavigationMenuLink asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-md p-2 hover:bg-muted transition-colors"
                        >
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Programs dropdown with horizontal reveal */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent text-sm font-medium ${scrolled ? "text-foreground" : "text-primary"}`}>
                  Programs
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-muted/50 p-3 dark:bg-background">
                  <div className="flex w-[600px] max-w-[80vw] gap-3 overflow-x-auto rounded-lg border bg-popover p-3 shadow">
                    {programGroups.map((group) => (
                      <NavigationMenuLink asChild key={group.href}>
                        <Link
                          href={group.href}
                          className="min-w-[220px] max-w-xs rounded-lg border bg-background p-3 hover:border-primary hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
                        >
                          <p className="text-sm font-semibold mb-1">{group.label}</p>
                          <p className="text-xs text-muted-foreground mb-2">{group.summary}</p>
                          <p className="text-[11px] font-medium text-primary">Key projects</p>
                          <ul className="mt-1 space-y-0.5 text-[11px] text-muted-foreground">
                            {group.subPrograms.map((sub) => (
                              <li key={sub}>• {sub}</li>
                            ))}
                          </ul>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Team dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent text-sm font-medium ${scrolled ? "text-foreground" : "text-primary"}`}>
                  Team
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-muted/50 p-3 dark:bg-background">
                  <div className="rounded-lg border bg-popover p-3 shadow w-[260px] space-y-2">
                    {teamSections.map((item) => (
                      <NavigationMenuLink asChild key={item.label}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-2 py-1.5 text-sm hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple links */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/media"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
                  >
                    Media
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
