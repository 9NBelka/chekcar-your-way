import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DiagnosticsSection from "@/components/DiagnosticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <ServicesSection />
        <DiagnosticsSection />
        <TestimonialsSection />
        <BookingSection />
        <ContactsSection />
      </main>
    </>
  );
};

export default Index;
