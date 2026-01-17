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
            src="/prog_3.jpg"
            alt="HAI Rwanda Solutions"
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

      {/* Featured Program: Menya, Wirinde, Ubeho */}
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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Menya, Wirinde, Ubeho</h2>
        <p className="text-lg text-muted-foreground mb-6">
          A school-based initiative empowering learners with accurate SRHR knowledge to make safe and informed choices.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Target Group</h3>
            <p className="text-muted-foreground">
              Students in secondary schools and out-of-school youth in Gatsibo, Karongi, and Nyarugenge districts.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Key Activities</h3>
            <p className="text-muted-foreground">
              Peer educator training, SRHR club strengthening, expert-led sessions, monitoring and evaluation, and endline reporting. Duration: 6 months.
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
          src="/edut.JPG"
          alt="Menya, Wirinde, Ubeho Program"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>
{/* Program 2: Mental Health & Wellbeing */}
<section id="mental-health" className="py-20 md:py-28 bg-muted relative">
  <div className="absolute inset-0 z-0 opacity-10">
    <Image src="/edut.JPG" alt="Background texture" fill className="object-cover" />
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
          src="/edut.JPG"
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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Mental Health & Wellbeing</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Supporting youth mental health through awareness, counseling services, and safe spaces for dialogue and support.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Awareness & Education</h3>
            <p className="text-muted-foreground">
              Programs that raise awareness about mental health issues and reduce stigma among youth.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Counseling & Support</h3>
            <p className="text-muted-foreground">
              Access to counseling services and peer support networks for young people facing mental health challenges.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* Program 3: GBV Prevention & Safe Spaces */}
<section id="gbv-prevention" className="py-20 md:py-28 bg-white">
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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">GBV Prevention & Safe Spaces</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Creating safe spaces and implementing programs to prevent gender-based violence and support survivors through education and advocacy.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Prevention Programs</h3>
            <p className="text-muted-foreground">
              Educational initiatives and awareness campaigns to prevent gender-based violence in schools and communities.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Safe Spaces</h3>
            <p className="text-muted-foreground">
              Facilitating safe spaces for intergenerational dialogues on health rights and gender equality.
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
          src="/gbv.jpg"
          alt="GBV Prevention & Safe Spaces"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>
{/* Program 4: Leadership, Advocacy & Policy Engagement */}
<section id="leadership" className="py-20 md:py-28 bg-muted relative">
  <div className="absolute inset-0 z-0 opacity-10">
    <Image src="/sustain.jpg" alt="Background texture" fill className="object-cover" />
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
          src="/sustain.jpg"
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
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Leadership, Advocacy & Policy Engagement</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Developing youth leadership skills, advocacy capabilities, and engaging with policy makers to advance youth health and rights.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Youth Leadership Development</h3>
            <p className="text-muted-foreground">
              Training programs that empower youth to become health advocates and leaders in their communities.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Policy Dialogue & Advocacy</h3>
            <p className="text-muted-foreground">
              Engaging with policy makers and stakeholders to advance inclusive health policies and youth rights.
            </p>
          </motion.div>
        </div>
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

