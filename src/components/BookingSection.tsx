import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Phone, User } from "lucide-react";

const services = [
  "Заміна моторної оливи",
  "Комп'ютерна діагностика",
  "Заміна гальмівних колодок",
  "Заправка кондиціонера",
  "Розвал-сходження",
  "Комплексна діагностика",
  "Шиномонтаж",
  "Інша послуга"
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    service: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert("Дякуємо за запис! Наш менеджер зв'яжеться з вами найближчим часом.");
    setFormData({ name: "", phone: "", car: "", service: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-surface-light to-surface-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Онлайн-запис
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Забронюйте зручний час для обслуговування вашого автомобіля
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-card">
            <CardHeader className="text-center bg-gradient-hero text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">
                Записатися на сервіс
              </CardTitle>
              <CardDescription className="text-white/90">
                Заповніть форму і ми зв'яжемося з вами для підтвердження
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-dark font-semibold flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Ім'я *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Введіть ваше ім'я"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="border-2 border-border focus:border-brand-blue"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-text-dark font-semibold flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+380 (XX) XXX-XX-XX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="border-2 border-border focus:border-brand-blue"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="car" className="text-text-dark font-semibold">
                    Марка/модель автомобіля
                  </Label>
                  <Input
                    id="car"
                    placeholder="Наприклад: Toyota Camry 2018"
                    value={formData.car}
                    onChange={(e) => handleInputChange("car", e.target.value)}
                    className="border-2 border-border focus:border-brand-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-text-dark font-semibold">
                    Послуга
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="border-2 border-border focus:border-brand-blue">
                      <SelectValue placeholder="Оберіть послугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  Записатися
                </Button>
              </form>
              
              <div className="mt-8 p-6 bg-surface-light rounded-xl">
                <div className="flex items-center gap-2 text-text-dark font-semibold mb-2">
                  <Clock className="h-5 w-5 text-brand-blue" />
                  Що далі?
                </div>
                <p className="text-text-light">
                  Після отримання заявки наш менеджер зв'яжеться з вами протягом 15 хвилин 
                  для підтвердження запису та уточнення деталей.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;