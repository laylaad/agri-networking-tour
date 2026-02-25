/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Leaf, 
  Users, 
  Zap, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Globe, 
  Cpu, 
  Sprout,
  Menu,
  X,
  ChevronRight,
  Clock,
  Star
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-[#0A192F]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1B4D3E] rounded-lg flex items-center justify-center border border-emerald-400/30">
            <Sprout className="text-emerald-400 w-6 h-6" />
          </div>
          <span className="text-white font-bold text-xl tracking-tighter uppercase">AGRI<span className="text-emerald-400"> NETWORKING</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Tournée', 'Spécial 8 Mars', 'Speakers', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-white/70 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button 
            onClick={() => document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 hover:bg-emerald-600 text-[#0A192F] px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105"
          >
            REJOINDRE LA TOURNÉE
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0A192F] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Tournée', 'Spécial 8 Mars', 'Speakers', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-500 text-[#0A192F] px-6 py-3 rounded-xl font-bold"
            >
              REJOINDRE LA TOURNÉE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [selectedCity, setSelectedCity] = useState('Agadir');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A192F] pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #1B4D3E 1px, transparent 1px), linear-gradient(to bottom, #1B4D3E 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8">
              <Zap className="w-3 h-3" /> Annonce Officielle
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
              AGRI NETWORKING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 italic font-serif">TOUR 2026</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-10 leading-relaxed">
              De La Terre Au digital : Ensemble pour une Agriculture Intelligente
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Agadir | Casablanca | Marrakech</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Fin Mars 2026</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="reservation-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full" />
              
              <h3 className="text-2xl font-bold text-white mb-2">Réserver votre place</h3>
              <p className="text-white/50 text-sm mb-8">Choisissez votre ville et rejoignez la dynamique.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-3 gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
                  {['Agadir', 'Casablanca', 'Marrakech'].map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setSelectedCity(city)}
                      className={cn(
                        "py-2 px-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all",
                        selectedCity === city 
                          ? "bg-emerald-500 text-[#0A192F] shadow-lg" 
                          : "text-white/40 hover:text-white/70"
                      )}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Nom complet" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Email professionnel" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder="Téléphone" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                </div>

                <button 
                  disabled={isSubmitting || isSuccess}
                  className={cn(
                    "w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                    isSuccess 
                      ? "bg-emerald-500 text-[#0A192F]" 
                      : "bg-emerald-500 hover:bg-emerald-600 text-[#0A192F] active:scale-95"
                  )}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#0A192F]/30 border-t-[#0A192F] rounded-full animate-spin" />
                  ) : isSuccess ? (
                    <>Confirmé <Zap className="w-4 h-4" /></>
                  ) : (
                    <>Réserver pour {selectedCity}</>
                  )}
                </button>
                
                <p className="text-[10px] text-center text-white/30 uppercase tracking-widest">
                  Places limitées par ville • Confirmation par email
                </p>
              </form>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-3xl blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group p-8 bg-[#1B4D3E]/20 border border-emerald-900/30 rounded-3xl hover:bg-[#1B4D3E]/30 transition-all"
  >
    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-emerald-400 w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-white/50 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const Features = () => (
  <section id="tournée" className="py-24 bg-[#0A192F] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            UNE PLATEFORME <span className="text-emerald-400 italic">NATIONALE</span>
          </h2>
          <p className="text-white/60 text-lg">
            Agri Networking Tour réunit l'ensemble de l'écosystème pour créer des synergies durables et accompagner la transformation du secteur.
          </p>
        </div>
        <div className="hidden md:block">
          <div className="text-8xl font-black text-white/5 select-none">01</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Cpu}
          title="Digital & Innovation"
          description="Conférences et panels stratégiques sur les leviers essentiels de la performance agricole moderne."
          delay={0.1}
        />
        <FeatureCard 
          icon={Users}
          title="Rencontres B2B"
          description="Espaces de networking professionnel et rencontres ciblées pour les entreprises et institutions."
          delay={0.2}
        />
        <FeatureCard 
          icon={Leaf}
          title="Solutions AgriTech"
          description="Mise en avant des startups et solutions innovantes pour répondre aux défis du secteur."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const SpecialEvent = () => (
  <section id="spécial-8-mars" className="py-24 bg-gradient-to-b from-[#0A192F] to-[#1B4D3E]/20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Star className="w-32 h-32 text-emerald-400" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Star className="w-3 h-3" /> Événement Exclusif
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">SPÉCIAL <span className="text-emerald-400">8 MARS</span></h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              À l'occasion de la Journée mondiale de la femme, nous célébrons les femmes qui transforment l'agriculture et l'innovation agroalimentaire. Un moment unique pour se connecter et échanger.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-white/80">
                <Calendar className="text-emerald-400 w-5 h-5" />
                <span>Samedi 9 Mars 2024</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <Clock className="text-emerald-400 w-5 h-5" />
                <span>21h30</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <MapPin className="text-emerald-400 w-5 h-5" />
                <span>Salle de conférence résidence Amane, Agadir (Dakhla)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-[#1B4D3E] rounded-lg text-xs font-bold text-emerald-400 border border-emerald-400/20">AFFAIRINO</div>
              <div className="px-4 py-2 bg-[#1B4D3E] rounded-lg text-xs font-bold text-emerald-400 border border-emerald-400/20">CISM SOUSS-MASSA</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/agriwomen/800/800" 
                alt="Femmes dans l'agriculture" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <p className="text-2xl font-serif italic text-white">"L'innovation portée par les femmes : Agroécologie, AgriTech et modèles durables"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SpeakerCard = ({ name, role, image, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative group overflow-hidden rounded-3xl aspect-[4/5] border border-white/5"
  >
    <img 
      src={image} 
      alt={name} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent opacity-90" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest leading-tight">{role}</p>
    </div>
  </motion.div>
);

const Speakers = () => (
  <section id="speakers" className="py-24 bg-[#0A192F]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">INTERVENANTES <span className="text-emerald-400">D'HONNEUR</span></h2>
        <p className="text-white/60 max-w-xl mx-auto">Des expertes partageant leur vision sur les défis et opportunités du secteur.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <SpeakerCard 
          name="Imane Douzi"
          role="Directrice de la Cité d'Innovation Souss Massa"
          image="https://picsum.photos/seed/imane/600/800"
          delay={0.1}
        />
        <SpeakerCard 
          name="Ikram Amhzoun"
          role="Ingénieure Agronome Phytiatre"
          image="https://picsum.photos/seed/ikram/600/800"
          delay={0.2}
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-[#0A192F] pt-24 pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-[#1B4D3E] rounded flex items-center justify-center border border-emerald-400/30">
              <Sprout className="text-emerald-400 w-5 h-5" />
            </div>
            <span className="text-white font-bold text-xl tracking-tighter uppercase">AGRI<span className="text-emerald-400"> NETWORKING</span></span>
          </div>
          <p className="text-white/50 max-w-sm mb-8">
            Accompagner la transformation du secteur agricole et créer des synergies durables à l'échelle nationale.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-emerald-400 hover:border-emerald-400 transition-all">
                <span className="sr-only">{social}</span>
                <Globe className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><a href="#" className="hover:text-emerald-400">Accueil</a></li>
            <li><a href="#tournée" className="hover:text-emerald-400">La Tournée</a></li>
            <li><a href="#spécial-8-mars" className="hover:text-emerald-400">Spécial 8 Mars</a></li>
            <li><a href="#speakers" className="hover:text-emerald-400">Speakers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
          <p className="text-xs text-white/50 mb-4 text-balance">Intéressé(e) pour devenir partenaire ou intervenant ?</p>
          <button className="bg-emerald-500 text-[#0A192F] px-6 py-2 rounded-lg font-bold text-sm hover:bg-emerald-600 transition-colors">
            Nous Contacter
          </button>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-white/30">
        <p>© 2026 AGRI NETWORKING. TOUS DROITS RÉSERVÉS.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Mentions Légales</a>
          <a href="#" className="hover:text-white">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="bg-[#0A192F] text-white selection:bg-emerald-500 selection:text-[#0A192F] font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SpecialEvent />
        <Speakers />
        
        {/* Call to Action Section */}
        <section className="py-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-[#1B4D3E] to-[#0A192F] rounded-[3rem] p-12 md:p-20 text-center border border-emerald-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">PARTICIPEZ À L'AGRICULTURE DE <span className="text-emerald-400">DEMAIN</span></h2>
              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                Entreprises, institutions et partenaires, rejoignez cette dynamique nationale et participez activement à la construction du futur.
              </p>
              <button 
                onClick={() => document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-white text-[#0A192F] font-black rounded-full hover:scale-105 transition-transform text-lg shadow-2xl shadow-emerald-500/20"
              >
                DEVENIR PARTENAIRE
              </button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
