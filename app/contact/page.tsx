"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import AnimatedText from "@/components/animated-text"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/90 text-white py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/us.jpg"
            alt="Contact HASO GROUP Rwanda"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <AnimatedText
              text="Contact  Us"
              className="text-4xl font-bold tracking-tight md:text-5xl mb-6"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              We would love to hear from you! Whether you have a question, suggestion, or are interested in
              collaborating with HAYi, please reach out.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-muted-foreground">info@hayi.org</p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <p className="text-muted-foreground">+250 788 123 456</p>
              <p className="text-muted-foreground">+250 722 987 654</p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Address</h3>
              <p className="text-muted-foreground">Kigali, Rwanda</p>
              <p className="text-muted-foreground">KG 123 St, Kigali</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28 bg-muted relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center shadow-md"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-3 mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white p-8 rounded-lg shadow-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                          },
                        },
                      }}
                    >
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                          },
                        },
                      }}
                    >
                      <Label htmlFor="email">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="space-y-2"
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        },
                      },
                    }}
                  >
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>
            <motion.div
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="rounded-xl overflow-hidden h-[400px] lg:h-[600px] relative shadow-lg"
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!4v1743597662042!6m8!1m7!1sl1cx_aoibcLt3k2T_xlUUQ!2m2!1d-1.932404193982911!2d30.07245434706149!3f232.65185202653964!4f-0.517074780466217!5f0.7820865974627469"
    width="100%" // Make the iframe take up the full width of the container
    height="100%" // Make the iframe take up the full height of the container
    style={{ border: 0 }} // Remove iframe border
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">How can I become a peer educator with HAYi?</h3>
                <p className="text-muted-foreground">
                  You can become a peer educator with HAYi by visiting our Get Involved page and filling out the peer educator application
                  form. We have various opportunities available, from SRHR education to mental health support and GBV prevention.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">How are donations used?</h3>
                <p className="text-muted-foreground">
                  Donations to HAYi directly support our programs in sexual and reproductive health, mental health, GBV prevention,
                  leadership development, and youth empowerment. We ensure transparency in how funds are allocated and provide
                  regular updates to our donors.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">Can organizations partner with HAYi?</h3>
                <p className="text-muted-foreground">
                  Yes, we welcome partnerships with schools, government, and NGOs that share our vision for youth health and empowerment. Please
                  contact us through this form or email us at info@hayi.org to discuss potential
                  collaboration opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">Where does HAYi operate?</h3>
                <p className="text-muted-foreground">
                  HAYi primarily operates in Rwanda, with programs in Gatsibo, Karongi, and Nyarugenge districts. Our focus is on empowering youth
                  in schools and communities across the country.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

