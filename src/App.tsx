import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Scale, FileText, Home, Shield, Users, Building, ArrowRight, CheckCircle2, Video, Mic } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Localização', href: '#location' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Camila Fernandes Advocacia */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Camila Fernandes Advocacia" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              // Fallback to text if image fails
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const textNode = document.createElement('span');
                textNode.className = "font-serif text-xl font-bold text-purple-900";
                textNode.innerText = "Camila Fernandes";
                parent.appendChild(textNode);
              }
            }}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-gray-600 hover:text-gold-500 transition-colors uppercase tracking-[0.15em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5547999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#25D366] text-white text-xs font-bold hover:bg-[#128C7E] hover:shadow-lg transition-all uppercase tracking-[0.15em] rounded-sm flex items-center gap-2 whitespace-nowrap"
          >
            Contato no WhatsApp
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col space-y-6 border-t border-gray-100"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-800 hover:text-gold-400 uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-4 bg-purple-900 text-white text-center text-sm font-semibold hover:bg-purple-950 transition-colors uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-auto lg:h-[95vh] min-h-[650px] flex items-center pt-32 pb-20 lg:py-0 overflow-hidden bg-white">
      {/* Background Elements - Subtle and Clean */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -z-10 hidden lg:block"></div>
      {/* Mobile Background Accent */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-purple-50/30 to-transparent -z-10 lg:hidden"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 bg-purple-50 rounded-full border border-purple-100 shadow-sm">
            <img 
              src="https://flagcdn.com/w40/br.png" 
              srcSet="https://flagcdn.com/w80/br.png 2x" 
              width="20" 
              height="14" 
              alt="Brasil" 
              className="rounded-[2px] shadow-sm object-cover"
            />
            <span className="text-xs font-bold text-purple-900 uppercase tracking-widest">
              Atendimento Online em todo o Brasil
            </span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-purple-900 leading-[1.1] mb-8">
            Defendendo seu <br className="hidden sm:block"/>
            patrimônio com <br className="hidden sm:block"/>
            <span className="italic text-gradient-gold">inteligência</span>.
          </h1>
          
          <p className="text-gray-500 mb-10 leading-relaxed max-w-md font-light text-base lg:text-lg">
            Escritório boutique com mais de uma década de excelência. Estratégias jurídicas precisas para quem exige o melhor resultado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-gold text-purple-950 text-sm font-bold hover:shadow-xl hover:shadow-gold-400/20 transition-all text-center uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm w-full sm:w-auto"
            >
              Fale com um Especialista
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-purple-900" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-gray-200 text-gray-600 text-sm font-semibold hover:border-gold-400 hover:text-gold-500 transition-all text-center uppercase tracking-widest bg-white rounded-sm w-full sm:w-auto"
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-[550px] w-full mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-gray-100 lg:bg-transparent rounded-sm overflow-hidden">
             <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Escritório de Advocacia Moderno"
              className="w-full h-full object-cover object-center lg:shadow-2xl rounded-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Frame - Hidden on mobile to reduce clutter, visible on desktop */}
          <div className="hidden lg:block absolute -bottom-6 -left-6 w-48 h-48 border-l border-b border-gold-400/30 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Regularização e Posse",
      icon: <Home strokeWidth={1.5} />,
      items: ["Ação de Usucapião", "Reintegração de Posse", "Retificação de área", "Desmembramento"]
    },
    {
      title: "Contratos e Negócios",
      icon: <FileText strokeWidth={1.5} />,
      items: ["Elaboração e Revisão", "Análise de Risco", "Permutas", "Compra e Venda"]
    },
    {
      title: "Sucessão e Família",
      icon: <Users strokeWidth={1.5} />,
      items: ["Inventário", "Testamento", "Doação com Usufruto", "Divórcio e Partilha"]
    },
    {
      title: "Imobiliário Corporativo",
      icon: <Building strokeWidth={1.5} />,
      items: ["Incorporação Imobiliária", "Instituição de Condomínio", "Assessoria Construtoras"]
    },
    {
      title: "Locação e Cobrança",
      icon: <Scale strokeWidth={1.5} />,
      items: ["Cobrança de aluguel", "Ação de Despejo", "Ação Revisional", "Contratos de Locação"]
    },
    {
      title: "Contencioso Cível",
      icon: <Shield strokeWidth={1.5} />,
      items: ["Vícios construtivos", "Rescisões contratuais", "Execução", "Defesa processual"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-gold-400/30 rounded-full bg-white shadow-sm">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-[0.2em]">
              Áreas de Atuação
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-purple-900 mb-6">
            Soluções Jurídicas <span className="italic text-gradient-gold">Especializadas</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            Atuação estratégica e personalizada para garantir a segurança jurídica do seu patrimônio imobiliário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 rounded-sm border border-gold-400/20 hover:border-gold-400 transition-all duration-500 shadow-[0_10px_30px_rgba(197,160,89,0.1)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.25)] hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Golden accent line on top */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-gold"></div>

              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-purple-900 transition-all duration-500 shadow-sm group-hover:shadow-gold-400/50">
                <div className="text-purple-900 group-hover:text-white transition-colors transform group-hover:scale-110 duration-500">
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>
              </div>
              
              <h3 className="font-serif text-2xl text-purple-900 mb-6 group-hover:text-gold-600 transition-colors">{service.title}</h3>
              
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-500 font-medium flex items-start gap-3 group-hover:text-gray-700 transition-colors">
                    <span className="w-1.5 h-1.5 bg-gold-300 rounded-full mt-1.5 flex-shrink-0 group-hover:bg-purple-900 transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dra. Camila Fernandes"
                className="w-full max-w-md mx-auto lg:mx-0 h-[600px] object-cover grayscale contrast-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Minimalist decorative element */}
            <div className="absolute top-10 -left-10 w-full h-full border border-purple-900/10 z-0 hidden lg:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-4 block">A Especialista</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-purple-900 mb-8">
              Dra. Camila <span className="text-gradient-gold">Fernandes</span>
            </h2>
            
            <p className="text-lg text-gray-800 font-medium mb-8 leading-relaxed">
              CEO do escritório, professora de advogados e corretores de imóveis, escritora e palestrante nacional e internacional.
            </p>
            
            <p className="text-gray-500 mb-10 leading-relaxed font-light">
              Com uma trajetória marcada pela excelência técnica e compromisso ético, a Dra. Camila lidera uma equipe focada em resolver complexidades jurídicas no mercado imobiliário com precisão e segurança.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {[
                "Especialista em Direito Imobiliário",
                "Graduada pela UNIVALI",
                "Pós-Graduada em Processo Civil",
                "Pós-Graduada em Direito Negocial",
                "Formação em Regularização Imobiliária",
                "Especialista em Incorporação"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-1.5 h-1.5 bg-gradient-gold rounded-full"></div>
                  <p className="text-gray-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
            
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" 
              alt="Assinatura" 
              className="h-12 opacity-40"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="relative bg-purple-950 py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gold-500/5 blur-3xl rounded-full translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-gold-400/30 rounded-full bg-purple-900/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-[0.2em]">
                Escritório 100% Digital
              </span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
              Atendimento Online para <br/>
              <span className="italic text-gradient-gold">Todo o Brasil</span>
            </h2>
            
            <p className="text-white/60 text-lg font-light mb-8 leading-relaxed">
              A distância não é uma barreira. Utilizamos tecnologia de ponta para realizar reuniões, audiências e assinaturas de contratos de forma totalmente digital.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Reuniões por videoconferência (Google Meet/Zoom)",
                "Assinatura digital de contratos com validade jurídica",
                "Acompanhamento processual em tempo real",
                "Atendimento ágil via WhatsApp"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80 font-light">
                  <CheckCircle2 className="text-gold-400 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5547999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-purple-950 font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-gold-400/20 transition-all rounded-sm"
            >
              <Video size={18} />
              Agendar Videoconferência
            </a>
          </div>

          {/* 3D iMac Mockup */}
          <div className="order-1 lg:order-2 relative perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: -10, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mx-auto"
            >
              {/* iMac Stand */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl shadow-xl -mb-10 z-0 transform perspective-500 rotateX(10deg)"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-b from-gray-200 to-gray-300 -mb-10 z-0 clip-path-trapezoid"></div>

              {/* iMac Screen Frame */}
              <div className="relative bg-gray-900 rounded-xl p-4 shadow-2xl border-t border-gray-700 border-b-8 border-b-gray-300">
                {/* Camera Dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full ring-1 ring-gray-700"></div>
                
                {/* Screen Content */}
                <div className="relative bg-gray-800 rounded overflow-hidden aspect-video group">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Video Call Meeting" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* UI Overlay for Video Call */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">CF</div>
                      <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-md">Dra. Camila Fernandes</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white"><Phone size={14} /></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700/80 flex items-center justify-center text-white"><Mic size={14} /></div>
                      <div className="w-8 h-8 rounded-full bg-gray-700/80 flex items-center justify-center text-white"><Video size={14} /></div>
                    </div>
                  </div>
                  
                  {/* Connection Status */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 px-2 py-1 rounded-full backdrop-blur-md">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-white font-medium uppercase tracking-wider">Ao Vivo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Map Section below */}
      <div className="mt-24 text-center relative z-10 px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-white/10 w-16 md:w-32"></div>
          <span className="text-white/40 font-serif italic">ou</span>
          <div className="h-px bg-white/10 w-16 md:w-32"></div>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-12">
          Visite nosso escritório presencialmente em <span className="text-gradient-gold">Balneário Piçarras - SC</span>
        </h3>
      </div>

      <div className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 border-t border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.273763926718!2d-48.68064492496733!3d-26.63973347681126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cd0e1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sR.%20Victor%20Zimmermann%2C%20768%20-%20Itacolomi%2C%20Balne%C3%A1rio%20Pi%C3%A7arras%20-%20SC%2C%2088380-000!5e0!3m2!1sen!2sbr!4v1680000000000!5m2!1sen!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Escritório"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-purple-950/20"></div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Investidor Imobiliário",
      text: "A clareza e a estratégia jurídica foram impecáveis. Resolveram um problema de anos em meses.",
      stars: 5
    },
    {
      name: "Fernanda Oliveira",
      role: "Empresária",
      text: "Senti uma segurança enorme na revisão dos contratos. Evitei prejuízos futuros significativos.",
      stars: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Síndico Profissional",
      text: "Profissionalismo e conhecimento técnico de alto nível. O atendimento é verdadeiramente diferenciado.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-3 block">Depoimentos</span>
          <h2 className="font-serif text-4xl font-medium text-purple-900">O que dizem nossos clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-500 rounded-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-gray-600 font-light italic mb-8 leading-relaxed">"{item.text}"</p>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-serif text-lg text-purple-900">{item.name}</p>
                <p className="text-xs text-gold-600 uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
          Precisa de orientação jurídica <br/>
          <span className="text-gold-400 italic">imediata?</span>
        </h2>
        
        <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
          Clique no botão abaixo para falar diretamente com nossa equipe pelo WhatsApp. Atendimento ágil e humanizado.
        </p>
        
        <a
          href="https://wa.me/5547999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-10 py-6 bg-[#25D366] text-white font-bold text-lg md:text-xl uppercase tracking-widest hover:bg-[#128C7E] hover:scale-105 transition-all shadow-2xl shadow-green-900/20 rounded-full group"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Conversar no WhatsApp
        </a>
        <p className="mt-6 text-white/40 text-sm">
          Respondemos em poucos minutos durante o horário comercial.
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-purple-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            {/* Logo - Camila Fernandes Advocacia (Footer Version) */}
            <a href="#" className="flex items-center gap-3 group mb-8">
              <img 
                src="/logo.png" 
                alt="Camila Fernandes Advocacia" 
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  // Fallback to text if image fails
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const textNode = document.createElement('span');
                    textNode.className = "font-serif text-2xl font-bold text-white";
                    textNode.innerText = "Camila Fernandes";
                    parent.appendChild(textNode);
                  }
                }}
              />
            </a>
            
            <p className="text-white/40 max-w-sm mb-10 font-light leading-relaxed">
              Escritório boutique especializado em Direito Imobiliário. Comprometidos com a excelência técnica e a defesa intransigente dos direitos de nossos clientes.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-serif text-lg mb-8 text-white">Navegação</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Sobre a CEO</a></li>
              <li><a href="#testimonials" className="hover:text-gold-400 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-serif text-lg mb-8 text-white">Contato</h4>
            <ul className="space-y-6 text-sm text-white/60">
              <li className="flex items-start gap-4">
                <MapPin className="flex-shrink-0 mt-0.5 text-gold-400" size={16} />
                <span>R. Victor Zimmermann, 768<br />Balneário Piçarras - SC</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="flex-shrink-0 text-gold-400" size={16} />
                <span>contato@fernandes.adv.br</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="flex-shrink-0 text-gold-400" size={16} />
                <span>(47) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Camila Fernandes Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-xs text-white/20">
            <span>OAB/SC 00.000</span>
            <span>CNPJ 00.000.000/0001-00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-purple-900 selection:text-white bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Location />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
