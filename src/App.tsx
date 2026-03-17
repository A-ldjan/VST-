/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Settings, 
  Shield, 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  Clock,
  CheckCircle2,
  Building2,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl italic">V</div>
              <div className={`flex flex-col leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                <span className="text-xs uppercase tracking-widest opacity-80">Elevadores</span>
                <span className="text-xl font-bold tracking-tight">VERSÁTIL</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-red-600' : 'text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center bg-red-600 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-red-700 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Elevator"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 text-red-500 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            <Shield size={16} />
            <span>Segurança e Tecnologia de Ponta</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Excelência em <span className="text-red-600">Elevadores</span> para o seu Edifício.
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Instalação, manutenção preventiva e modernização com a agilidade e confiança que você precisa. Atendimento 24 horas para sua total tranquilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-xl shadow-red-600/20"
            >
              Falar com Especialista
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Floating Card */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Anos de Experiência</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Clientes Atendidos</div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24h</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Suporte Técnico</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Manutenção Preventiva',
      description: 'Check-ups regulares para garantir o funcionamento contínuo e seguro dos seus equipamentos, reduzindo custos com reparos emergenciais.',
      icon: <Shield className="text-red-600" size={32} />,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Instalação Técnica',
      description: 'Projetos personalizados de instalação para novos edifícios, utilizando as tecnologias mais modernas e eficientes do mercado.',
      icon: <Building2 className="text-red-600" size={32} />,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Modernização Estética e Técnica',
      description: 'Atualize o visual e a performance do seu elevador antigo. Mais economia de energia, suavidade no transporte e valorização do imóvel.',
      icon: <Settings className="text-red-600" size={32} />,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Assistência 24 Horas',
      description: 'Equipe de prontidão para atender chamados de emergência a qualquer hora do dia ou da noite, com rapidez e eficiência.',
      icon: <Clock className="text-red-600" size={32} />,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">O que fazemos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Soluções Completas em Transporte Vertical</h3>
          <p className="text-lg text-slate-600">
            Oferecemos uma gama completa de serviços para garantir que seus elevadores operem com máxima segurança, eficiência e conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-red-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Saiba mais <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                alt="Equipe Versátil"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600 rounded-full z-0 opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-3xl z-0"></div>
            
            <div className="absolute bottom-8 left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Users className="text-red-600" size={24} />
                </div>
                <span className="font-bold text-slate-900">Equipe Certificada</span>
              </div>
              <p className="text-xs text-slate-500">Nossos técnicos passam por treinamentos constantes para lidar com as mais diversas marcas e modelos.</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Sobre Nós</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Compromisso com a sua <span className="text-red-600">Segurança</span> e Mobilidade.</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A Elevadores Versátil nasceu com o propósito de oferecer um serviço diferenciado no mercado de transporte vertical. Combinamos anos de experiência técnica com um atendimento humano e ágil.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                'Atendimento personalizado para condomínios e empresas.',
                'Peças originais e garantia em todos os serviços.',
                'Transparência total nos orçamentos e relatórios técnicos.',
                'Foco em eficiência energética e sustentabilidade.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
              Conheça Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4">Contato</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Vamos elevar o nível do seu edifício?</h3>
            <p className="text-slate-400 text-lg mb-12">
              Estamos prontos para atender sua solicitação. Preencha o formulário ou utilize nossos canais diretos de comunicação.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">Telefone / WhatsApp</div>
                  <div className="text-xl font-bold">(11) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">E-mail</div>
                  <div className="text-xl font-bold">contato@elevadoresversatil.com.br</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider mb-1">Localização</div>
                  <div className="text-xl font-bold">São Paulo, SP - Atendimento em toda Grande SP</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-bold mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Assunto</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all">
                  <option>Manutenção Preventiva</option>
                  <option>Instalação</option>
                  <option>Modernização</option>
                  <option>Chamado de Emergência</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl italic">V</div>
              <div className="flex flex-col leading-none">
                <span className="text-xs uppercase tracking-widest opacity-80">Elevadores</span>
                <span className="text-xl font-bold tracking-tight">VERSÁTIL</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Especialistas em soluções de transporte vertical com foco em segurança, tecnologia e satisfação do cliente. Atendimento 24h para sua tranquilidade.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-red-600 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-red-600 transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Manutenção Preventiva</li>
              <li>Instalação Técnica</li>
              <li>Modernização</li>
              <li>Assistência 24h</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Elevadores Versátil. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
