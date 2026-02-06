"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, FileText, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

const galleryImages = [
  "/gallery/_MGE0799.jpg",
  "/gallery/_MGE0804.jpg",
  "/gallery/_MGE0842.jpg",
  "/gallery/_MGE0862.jpg",
  "/gallery/_MGE0898.jpg",
  "/gallery/_MGE0902.jpg",
  "/gallery/_MGE0903.jpg",
  "/gallery/_MGE0921.jpg",
  "/gallery/_MGE0924.jpg",
]

export default function MediaPage() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/90 text-white py-16 md:py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team_1.jpg"
            alt="HAYi News & Media"
            fill
            className="object-cover opacity-90"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">News & Media</h1>
            <p className="text-lg md:text-xl">
              Stay updated with the latest news, stories, advocacy campaigns, youth voices, and events from Health Affairs for Youth Initiatives (HAYi).
            </p>
          </div>
        </div>
      </section>

      {/* News & Press Releases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">News & Blog</h2>
            <p className="text-lg text-muted-foreground">
              Share stories, updates, advocacy campaigns, youth voices, and events. Success stories from schools, youth-led campaign highlights, SRHR awareness posts, and policy dialogues.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/health_launch.jpg" alt="News Article" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Newspaper className="mr-2 h-4 w-4" />
                  <span>Press Release</span>
                  <span className="mx-2">•</span>
                  <span>March 15, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">HAYi Launches Menya, Wirinde, Ubeho Program</h3>
                <p className="text-muted-foreground mb-4">
                  Health Affairs for Youth Initiatives announces the launch of its new school-based SRHR program
                  aimed at empowering learners with accurate knowledge to make safe and informed choices.
                </p>
                <Button asChild variant="outline">
                  <Link href="#">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/youth_launch.jpg" alt="News Article" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Newspaper className="mr-2 h-4 w-4" />
                  <span>News</span>
                  <span className="mx-2">•</span>
                  <span>February 28, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  HAYi Partners with Schools on Youth Empowerment Initiative
                </h3>
                <p className="text-muted-foreground mb-4">
                  A new partnership between HAYi and schools in Gatsibo, Karongi, and Nyarugenge aims to improve youth health outcomes through
                  peer education and SRHR programs.
                </p>
                <Button asChild variant="outline">
                  <Link href="#">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/globalh_launch.jpg" alt="News Article" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Newspaper className="mr-2 h-4 w-4" />
                  <span>Media Coverage</span>
                  <span className="mx-2">•</span>
                  <span>January 10, 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Youth-Led Campaign Highlights Gender Equity</h3>
                <p className="text-muted-foreground mb-4">
                  HAYi's youth-led advocacy campaigns promoting gender equity and SRHR awareness were featured in local media
                  this month.
                </p>
                <Button asChild variant="outline">
                  <Link href="#">Read More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="#">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground">Images from our programs, events, and community activities.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => {
              const isLoaded = loadedImages.has(src)
              return (
                <div key={src} className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                  {!isLoaded && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-lg" />
                  )}
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    loading="lazy"
                    className={`object-cover hover:scale-105 transition-all duration-300 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(src)}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="#">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Media Inquiries</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            For media inquiries, interview requests, or to receive our press releases, please contact our media
            relations team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="mailto:info@hayi.org">Email Media Relations</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-primary hover:bg-primary/10">
              <Link href="/contact">
                Contact Form
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

