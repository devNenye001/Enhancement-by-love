
import AboutSection from "../../components/sections/about/aboutSection"
import ContactSection from "../../components/sections/contact/contactSection"
import FeaturesSection from "../../components/sections/features/featuresSection"
import Hero from "../../components/sections/hero/hero"
import StepsSection from "../../components/sections/howItWorks/stepsSection"
import ProductSection from "../../components/sections/products/productSection"
import TestimonialSection from "../../components/sections/testimonials/testimonialSection"


const Home = () => {
  return (
    <div>
        <Hero />
        <ProductSection />
        <AboutSection />
        <StepsSection />
        <FeaturesSection />
        <TestimonialSection />
        <ContactSection />
    </div>
  )
}

export default Home