import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { ArticleSection } from "@/components/sections/article/article-section";
import { TestimonialAside } from "@/components/sections/aside/testimonial-aside";
import { CTAAside } from "@/components/sections/aside/cta-aside";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <TestimonialAside />
      <ArticleSection />
      <CTAAside />
    </main>
  );
}