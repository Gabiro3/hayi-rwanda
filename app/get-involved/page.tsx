import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, Gift, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/90 text-white py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg.jpg"
            alt="Get Involved with HAI Rwanda"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Get Involved</h1>
            <p className="text-lg md:text-xl">
              At HAYi, we believe in the power of collaboration to achieve our mission. There are several ways you can
              contribute to our work and help advance youth health and empowerment in Rwanda.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ways to Get Involved</h2>
            <p className="text-lg text-muted-foreground">
              Whether you want to donate, volunteer, partner with us, or simply spread the word, there are many ways to
              support our mission.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Donate</h3>
              <p className="text-muted-foreground mb-4">
                Your contributions help fund critical programs that improve the health and well-being of marginalized
                communities.
              </p>
              <Button asChild className="mt-auto">
                <Link href="#donate">Donate Now</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Become a Peer Educator</h3>
              <p className="text-muted-foreground mb-4">
                Join our team of peer educators and help us implement our health initiatives in schools and communities across Rwanda.
              </p>
              <Button asChild className="mt-auto">
                <Link href="#volunteer">Join Us</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Partner With Us</h3>
              <p className="text-muted-foreground mb-4">
                Join forces with us to create lasting solutions in youth health through strategic partnerships with schools, government, and NGOs.
              </p>
              <Button asChild className="mt-auto">
                <Link href="#partner">Partner With Us</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/50">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Spread the Word</h3>
              <p className="text-muted-foreground mb-4">
                Share our mission on social media and help raise awareness about health equity and our work.
              </p>
              <Button asChild className="mt-auto">
                <Link href="#share">Share Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Make a Donation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your donation helps us expand our reach and impact in communities across Rwanda. Every contribution, no
                matter the size, makes a difference.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">How Your Donation Helps</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>$25 can provide health education materials to 10 individuals</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>$50 can support a GBV survivor with counseling services</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>$100 can train a youth health advocate</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>$500 can fund a community health workshop</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="#">Donate Now</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/stu.jpg"
                alt="Donation Impact"
                width={800}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/ga_9.jpg"
                alt="Volunteers"
                width={800}
                height={600}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Become a Peer Educator</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join our team of dedicated peer educators who are making a difference in schools and communities across Rwanda. We offer
                training and support to help you become an effective health advocate.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Peer Educator Opportunities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>SRHR Peer Educator in Schools</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Mental Health Peer Support</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>GBV Prevention Advocate</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Youth Leadership Mentor</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Community Health Champion</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="#">Apply to Become a Peer Educator</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Partner With Us</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in the power of partnerships to create lasting change. Join forces with us to advance youth health
                and empowerment in Rwanda. We collaborate with schools, government, and NGOs to maximize our impact.
              </p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Partnership Opportunities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>School Partnerships for Program Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Government Collaborations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>NGO Partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Funding Partners</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Research Collaborations</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="#">Become a Partner</Link>
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Partnership Inquiry Form</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Input placeholder="Organization Name" />
                    </div>
                    <div>
                      <Input placeholder="Contact Person" />
                    </div>
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" />
                  </div>
                  <div>
                    <Input placeholder="Phone Number" />
                  </div>
                  <div>
                    <Textarea placeholder="How would you like to partner with us?" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section id="share" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Spread the Word</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Help us raise awareness about health equity and our work by sharing our mission with your network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="flex items-center">
                <Link href="#">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Share on Facebook
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center">
                <Link href="#">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Share on Twitter
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center">
                <Link href="#">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Share on Instagram
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex items-center">
                <Link href="#">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Share on YouTube
                </Link>
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-muted-foreground mb-4">Or copy our website link to share:</p>
              <div className="flex max-w-md mx-auto">
                <Input value="https://www.hairwanda.org" readOnly className="flex-1" />
                <Button className="ml-2">Copy</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section id="join-team" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team. Check out our current openings or send us
            your resume for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#">
                View Current Openings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-primary hover:bg-primary/10">
              <Link href="#">
                Send Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

