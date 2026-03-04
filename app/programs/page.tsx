"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Heart, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/90 text-white py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/program_1.jpg"
            alt="HAYi Programs"
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
              text="Our  Programs"
              className="text-4xl font-bold tracking-tight md:text-5xl mb-6"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              HAYi implements targeted programs that address sexual and reproductive health, mental health, healthy lifestyles, GBV prevention, digital innovation, leadership, and socio-economic empowerment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SRHR, HIV & GBV Prevention & Safe Spaces */}
<section id="menya-wirinde-ubeho" className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
          SRHR, HIV &amp; GBV Prevention &amp; Safe Spaces
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Empowering youth to make informed decisions about their sexual and reproductive health, protect themselves from
          HIV, and prevent gender-based violence through safe, inclusive spaces.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Menya, Wirinde, Ubeho</h3>
            <p className="text-muted-foreground">
              A youth-focused initiative raising awareness on sexual and reproductive health, consent, healthy relationships,
              and gender equality through interactive workshops, peer-led sessions, and campaigns.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">UMURINZI</h3>
            <p className="text-muted-foreground">
              Trains and empowers students to become advocates for safe, inclusive school environments, equipping them to
              identify risks, respond to peer challenges, and champion equality and protection.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/gallery/programs/UMURINZI.jpg"
          alt="Menya, Wirinde, Ubeho Program"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>
{/* Mental Health & Wellbeing */}
<section id="mental-health" className="py-20 md:py-28 bg-muted relative">
  <div className="absolute inset-0 z-0 opacity-10">
    <Image src="/program_1.jpg" alt="Background texture" fill className="object-cover" />
  </div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <Image
          src="/gallery/programs/MindUp.jpeg"
          alt="Mental Health & Wellbeing"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <Heart className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Mental Health &amp; Wellbeing</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Empowering youth and school staff to build resilience, manage stress, and create supportive environments that
          prioritize mental health.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">MindUp</h3>
            <p className="text-muted-foreground">
              A youth-centered initiative providing peer support, stress management workshops, and digital campaigns to promote
              emotional wellbeing and build coping skills.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Mentora</h3>
            <p className="text-muted-foreground">
              A professional development program for teachers and school staff, equipping educators with tools to support
              students’ mental health and foster safe, inclusive school environments.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* Healthy Lifestyle, Nutrition & WASH */}
<section id="healthy-lifestyle" className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
          Healthy Lifestyle, Nutrition &amp; WASH
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Empowering youth to adopt balanced diets, stay active, and practice good hygiene and safe water consumption.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">HealthEmpower</h3>
            <p className="text-muted-foreground">
              A youth-focused initiative promoting physical activity, sports, and nutrition education through workshops,
              fitness sessions, and campaigns that build healthy lifestyles and prevent non-communicable diseases.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">NutriChamp</h3>
            <p className="text-muted-foreground">
              Raises awareness on nutrition, reduces unhealthy eating practices, and fosters food literacy with practical
              guidance and mentoring for students and school staff.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">MajiLife</h3>
            <p className="text-muted-foreground">
              A WASH-focused project promoting safe water consumption, hygiene, and sanitation practices through interactive
              activities, campaigns, and supportive tools.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/gallery/programs/HealthEmpower.png"
          alt="Gallery image for Healthy Lifestyle, Nutrition & WASH program"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>
{/* Leadership, Advocacy & Policy Engagement */}
<section id="leadership" className="py-20 md:py-28 bg-muted relative">
  <div className="absolute inset-0 z-0 opacity-10">
    <Image src="/program_1.jpg" alt="Background texture" fill className="object-cover" />
  </div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <Image
          src="/gallery/programs/Mentoraa.jpg"
          alt="Leadership & Advocacy"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <Award className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
          Leadership, Advocacy &amp; Policy Engagement
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Empowering youth to develop leadership skills, influence health and social policies, and drive positive change in
          their communities.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">NextWave</h3>
            <p className="text-muted-foreground">
              A media-driven series (podcast and YouTube talks) showcasing youth leaders, health advocates, and community
              change-makers to inspire and equip young people to take action.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Policy Spotlight</h3>
            <p className="text-muted-foreground">
              A digital series exploring youth engagement in health and social policies with success stories, expert
              interviews, and practical advocacy guidance.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section id="career-development" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Career Development &amp; Socio-Economic Empowerment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Equipping youth with skills, mentorship, and economic opportunities to build sustainable futures and address key
                social determinants of health.
              </p>
              <div className="space-y-6">
                <motion.div className="space-y-2">
                  <h3 className="text-xl font-medium">LevelUp</h3>
                  <p className="text-muted-foreground">
                    A flexible, youth-centered initiative that combines workshops, mentorship, hands-on projects, digital learning,
                    career support, and financial literacy to help young people grow their careers and entrepreneurial opportunities.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/program_2.jpg"
                alt="Career Development & Socio-Economic Empowerment"
                width={800}
                height={600}
                className="rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Background pattern" fill className="object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-4xl mb-6"
          >
            Support Our Programs
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Your support can help us expand our programs and reach more youth in need. Join us in our mission to
            empower youth and advance health equity in Rwanda.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved#donate">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-primary hover:bg-primary/10">
              <Link href="/get-involved#partner">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

