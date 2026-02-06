"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Heart, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedText from "@/components/animated-text"

export default function ImpactPage() {
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
      <section className="bg-primary/90 text-white py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prog_2.jpg"
            alt="HAI Rwanda Impact"
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
              text="Our   Impact"
              className="text-4xl font-bold tracking-tight md:text-5xl mb-6"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              HAI's initiatives have already transformed thousands of lives across Rwanda and beyond through our digital
              health education, community-led programs, and policy advocacy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Impact by the Numbers"
            subtitle="Through our various programs and initiatives, we've made significant progress in advancing health equity in Rwanda."
            backgroundImage="/placeholder.svg?height=300&width=1920"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-primary mb-3"
              >
                1,000+
              </motion.p>
              <p className="text-muted-foreground">
                Individuals reached with health education on GBV, maternal health, and SRH
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-primary mb-3"
              >
                100+
              </motion.p>
              <p className="text-muted-foreground">
                Youth leaders empowered to become health advocates in their communities
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-primary mb-3"
              >
                20+
              </motion.p>
              <p className="text-muted-foreground">
                Survivors of gender-based violence supported with resources, counseling, and legal aid
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-primary mb-3"
              >
                10+
              </motion.p>
              <p className="text-muted-foreground">
                Safe spaces for intergenerational dialogues on health rights and gender equality facilitated
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28 bg-muted relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Success Stories"
            subtitle="Real stories of impact from the communities we serve."
            backgroundImage="/placeholder.svg?height=300&width=1920"
            light
          />

          <div className="space-y-12 mt-16">
            {/* Story 1 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_300px] items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Empowering Youth Health Advocates</h3>
                  <p className="text-muted-foreground mb-4">
                    In the Nyagatare district, HAI trained 25 youth leaders in health advocacy, digital storytelling,
                    and community mobilization. These young advocates have since reached over 500 peers with critical
                    information on sexual and reproductive health.
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary italic"
                  >
                    <p className="text-muted-foreground">
                      "Before joining HAI's youth advocacy program, I didn't know how to address the health challenges
                      in my community. Now, I have the knowledge and confidence to educate my peers and advocate for
                      better health services." - Jean, Youth Health Advocate
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/visit.jpg"
                    alt="Youth Health Advocates"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover shadow-md"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Story 2 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/stu.jpg"
                    alt="Digital Health Education"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover shadow-md"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Digital Health Education Reaching Rural Communities</h3>
                  <p className="text-muted-foreground mb-4">
                    Through our SMS-based health education program, we've reached over 500 individuals in rural areas
                    with limited internet access. This initiative has significantly improved knowledge of maternal
                    health and family planning.
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary italic"
                  >
                    <p className="text-muted-foreground">
                      "The health information I receive on my phone has changed my life. As a mother of three, I now
                      understand how to better care for my children's health and my own. The information is clear and
                      practical." - Marie, Program Participant
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Story 3 */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_300px] items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Supporting GBV Survivors</h3>
                  <p className="text-muted-foreground mb-4">
                    Our GBV Digital Reporting & Response system has helped 20+ survivors access critical support
                    services, including counseling, medical care, and legal aid. This confidential reporting tool has
                    been particularly important in areas where stigma prevents survivors from seeking help.
                  </p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary italic"
                  >
                    <p className="text-muted-foreground">
                      "When I experienced violence, I didn't know where to turn. HAI's reporting system connected me
                      with counselors and legal support that helped me rebuild my life." - Anonymous Survivor
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/gbv.jpg"
                    alt="GBV Support Services"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover shadow-md"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Reports */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Impact Reports"
            subtitle="Detailed reports on our programs, outcomes, and lessons learned."
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
              whileHover={{ y: -10 }}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-video relative">
                <Image
                  src="/team.png"
                  alt="Annual Report 2023"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Annual Impact Report 2023</h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive overview of our programs, achievements, and impact in 2023.
                </p>
                <Button asChild variant="outline">
                  <Link href="#">Download Report</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-video relative">
                <Image
                  src="/edut.JPG"
                  alt="Digital Health Education Impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Health Education Impact</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed analysis of our digital health education programs and their outcomes.
                </p>
                <Button asChild variant="outline">
                  <Link href="#">Download Report</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="border rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-video relative">
                <Image
                  src="/team_1.jpg"
                  alt="Youth Advocacy Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Youth Advocacy Program Evaluation</h3>
                <p className="text-muted-foreground mb-4">
                  Results and insights from our youth advocacy and leadership development initiatives.
                </p>
                <Button asChild variant="outline">
                  <Link href="#">Download Report</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg">
                <Link href="#">
                  View All Publications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
            Help Us Create More Impact
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Your support can help us expand our reach and create even greater impact in communities across Rwanda.
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
            <Button asChild size="lg" variant="outline" className="border-white bg-primary text-white hover:bg-primary/10">
              <Link href="/get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

