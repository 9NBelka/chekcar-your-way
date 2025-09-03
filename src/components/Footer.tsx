import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-brand-orange mb-4">
              ChekCar
            </div>
            <p className="text-gray-300 mb-4">
              Ваш надійний автосервіс у Києві. Обслуговування авто будь-якої марки з гарантією 12 місяців.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Послуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Заміна моторної оливи</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Ремонт двигуна</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Ремонт коробки передач</a></li>
              <li><a href="#diagnostics" className="hover:text-brand-orange transition-colors">Діагностика</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Шиномонтаж</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 shrink-0" />
                <span>проспект Перемоги, 123, Київ</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 shrink-0" />
                <a href="tel:+380441234567" className="hover:text-brand-orange transition-colors">
                  +38 (044) 123-45-67
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 shrink-0" />
                <a href="mailto:info@chekcar.ua" className="hover:text-brand-orange transition-colors">
                  info@chekcar.ua
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Графік роботи</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 shrink-0" />
                <div>
                  <p>Пн-Пт: 08:00 - 20:00</p>
                  <p>Сб: 09:00 - 18:00</p>
                  <p>Нд: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ChekCar. Всі права захищені.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-orange text-sm transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;