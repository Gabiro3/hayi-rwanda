"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedText from "@/components/animated-text"
import { teamMembers } from "@/lib/constants"

export default function AboutPage() {
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
    <div>
      {/* Hero Section */}
      <section id="about-intro" className="bg-primary/90 text-white py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team_1.jpg"
            alt="About HAYi"
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
              text="Empower.  Educate.  Transform."
              className="text-4xl font-bold tracking-tight md:text-5xl mb-6"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              Health Affairs for Youth Initiatives (HAYi) is a youth-focused social impact organization committed to
              advancing youth health, gender equity, and empowerment. We address the social determinants of health
              affecting vulnerable, marginalized, and differently-abled youth, ensuring they have the knowledge,
              services, and opportunities to thrive.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section id="our-story" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a creative awareness campaign to a comprehensive youth empowerment movement, HAYi has grown to transform lives and advance health equity.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {/* 2013 */}
            <div className="mb-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-12 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">
                    2013
                  </div>
                  <div className="h-32 md:h-40 w-1 bg-gradient-to-b from-secondary to-secondary/20 mt-4"></div>
                </div>
                <div className="flex-1 pt-2 pb-8">
                  <h3 className="text-2xl font-bold mb-3">Don't Die Young Initiative</h3>
                  <p className="text-muted-foreground">
                    HAYi began as a creative arts initiative called "Don't Die Young", launched by our founder to raise awareness among youth about risky behaviors such as drug abuse, teenage pregnancy, school dropout, and exploitation.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Evolution Phase */}
            <div className="mb-12">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-12 items-start flex-row-reverse"
              >
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">
                    Phase 2
                  </div>
                  <div className="h-32 md:h-40 w-1 bg-gradient-to-b from-secondary to-secondary/20 mt-4"></div>
                </div>
                <div className="flex-1 pt-2 pb-8">
                  <h3 className="text-2xl font-bold mb-3">Health Affairs Initiative (HAI)</h3>
                  <p className="text-muted-foreground">
                    As the campaign grew, it became clear that awareness alone was not enough. Many challenges facing youth are rooted in poverty, limited education, social exclusion, disability discrimination, economic hardship, and structural inequalities. The initiative evolved to address these social determinants of health, transitioning from creative advocacy to structured health education and youth empowerment.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 2023 */}
            <div className="mb-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-12 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold flex-shrink-0">
                    2023
                  </div>
                  <div className="hidden"></div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3">Health Affairs for Youth Initiatives (HAYi)</h3>
                  <p className="text-muted-foreground">
                    While pursuing a Master of Science in Global Health Delivery at the University of Global Health Equity (UGHE), our founder met fellow global health professionals and medical doctors who shared the same commitment to health equity and youth empowerment. Together, they transformed the vision into HAYi, a comprehensive platform dedicated to empowering young people to overcome structural barriers and claim their health, voice, and future.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-20 md:py-28 bg-muted relative">
        <div className="absolute inset-0 z-0 opacity-4">
          <Image src="/story.JPG" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
              To promote <strong>inclusive youth health and well-being</strong> through education, advocacy, innovation, and community-driven programs, ensuring that all young people—regardless of gender, background, or ability—have equitable access to resources to thrive.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
              A Rwanda where <strong>all young people are healthy, empowered, and socially included</strong>, with access to quality health services, supportive environments, and economic opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
<section id="values" className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4">
    <SectionTitle
      title="Our Values"
      subtitle="At HAYi, our core values reflect our dedication to impactful, inclusive, and innovative work. These principles guide every aspect of our mission and shape the way we serve communities."
      backgroundImage="/placeholder.svg?height=300&width=1920"
    />

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16"
    >
      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
        <p className="text-muted-foreground">
          We ensure all young people, regardless of gender, background, or ability, have equitable access to resources and opportunities.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Integrity</h3>
        <p className="text-muted-foreground">
          We operate with honesty, transparency, and ethical practices in all our programs and relationships.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Empowerment</h3>
        <p className="text-muted-foreground">
          We equip youth with the tools, knowledge, and confidence to shape their own futures and make informed decisions.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Innovation</h3>
        <p className="text-muted-foreground">
          We embrace creative problem-solving, leveraging technology and new ideas to tackle complex health challenges.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Collaboration</h3>
        <p className="text-muted-foreground">
          We build strong partnerships with schools, government, NGOs, and communities, recognizing that shared goals lead to stronger impact.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Team Section */}
      <section id="team" className="py-20 md:py-28 bg-muted relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Meet the founding members driving HAYi's mission to empower youth, advance health equity, and create lasting impact."
            backgroundImage="/placeholder.svg?height=300&width=1920"
            light
          />

          {/* Featured Team Member */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg mb-16 mt-16"
          >
            <div className="grid gap-8 md:grid-cols-[200px_1fr] items-start">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/sma.jpeg"
                  alt="Samuel Habimana"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover shadow-md"
                />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-1"
                >
                  Samuel Habimana
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-primary font-medium mb-4"
                >
                  Founder & Executive Chairperson
                </motion.p>
                <div className="space-y-4 text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    A visionary leader with expertise in education, health care management, business, and global health delivery. He has extensive experience designing, implementing, and scaling health and youth empowerment initiatives. HAYi delivers innovative programs that improve youth health, promote gender equity, and strengthen communities.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    A passionate advocate for adolescent health, mentorship, and inclusive leadership, he works with schools, partners, and civil society to create lasting impact for young people.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founding Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 mb-8"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-center">Founding Members</h2>
          </motion.div>

          {/* Team Grid */}
          <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -10 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-primary text-sm">{member.title}</p>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            {member.description1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mt-2"
          >
            {member.description2}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg">
                <Link href="/get-involved#join-team">
                  Join Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

