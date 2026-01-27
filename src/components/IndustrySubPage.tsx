"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

interface IndustrySubPageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  intro: string;
  featureImage?: string;
  featureImageAlt?: string;
  items: { title: string; description: string }[];
}

export default function IndustrySubPage({
  title,
  subtitle,
  description,
  heroImage,
  intro,
  featureImage,
  featureImageAlt,
  items,
}: IndustrySubPageProps) {
  return (
    <main>
      <PageHero title={title} subtitle={subtitle} description={description} backgroundImage={heroImage} />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Intro section with optional feature image */}
          <div className={`${featureImage ? "grid lg:grid-cols-2 gap-16 items-center" : ""}`}>
            <FadeIn>
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {title}: <span className="text-deep-blue">Our Expertise</span>
                </h2>
                <p className="mt-5 text-charcoal text-lg leading-relaxed">{intro}</p>
              </div>
            </FadeIn>
            {featureImage && (
              <FadeIn delay={0.2} direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                  <Image
                    src={featureImage}
                    alt={featureImageAlt || title}
                    width={700}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
              </FadeIn>
            )}
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="bg-off-white border border-light-gray rounded-2xl p-7 hover:shadow-lg transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-deep-blue/10 flex items-center justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-deep-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-charcoal text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-16 text-center">
            <Link href="/industries" className="inline-flex items-center gap-2 text-deep-blue font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Industries
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
