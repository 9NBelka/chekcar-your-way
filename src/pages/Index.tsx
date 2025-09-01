import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactsSection />
    </main>
  );
};

export default Index;
