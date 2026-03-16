'use client';
import { useState } from 'react';

export default function Home() {
  const [idioma, setIdioma] = useState('pt');
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = (e) => {
    const email = "fran.bittencourt09@gmail.com";
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const t = {
    pt: {
      portfolio: "Portfólio", labs: "Labs", carreira: "Trajetória", contato: "Contato", explorar: "Explorar Projetos",
      freela_titulo: "Projetos Freelance", lab_titulo: "Labs & Experimentação", edu_titulo: "Formação Técnica",
      academy_tag: "Academia", cta_footer: "Vamos criar algo impactante?", local: "Salvador, Brasil", acessar: "Explorar",
      f1_tag: "Freelance // Saúde Pública", f2_tag: "Freelance // Monitoramento", f3_tag: "Projeto Real // Impacto Social",
      f4_tag: "Freelance // Saúde Digital", l1_tag: "Projeto Final // SENAI Ford", l1_desc: "Dashboard corporativo de alta performance em Angular.",
      l2_tag: "Laboratório // Interface & UX", l3_tag: "Laboratório // Mobile First", l4_tag: "Laboratório // Web Standards",
      e1_curso: "Desenvolvedor Front-end", e2_curso: "JavaScript Avançado para Web", e3_curso: "Inglês Intermediário B1",
      e4_curso: "Arquitetura HTML5 & CSS3", e_global: "Certificação Global", email_feedback: "E-mail copiado!", email_instrucao: "(clique para copiar)"
    },
    en: {
      portfolio: "Portfolio", labs: "Labs", carreira: "Experience", contato: "Contact", explorar: "Explore Projects",
      freela_titulo: "Freelance Projects", lab_titulo: "Labs & Experiments", edu_titulo: "Technical Education",
      academy_tag: "Academy", cta_footer: "Ready to build something great?", local: "Salvador, Brazil", acessar: "View Case",
      f1_tag: "Freelance // Public Health", f2_tag: "Freelance // Monitoring", f3_tag: "Real Project // Social Impact",
      f4_tag: "Freelance // Digital Health", l1_tag: "Final Project // SENAI Ford", l1_desc: "High-performance enterprise dashboard built with Angular.",
      l2_tag: "Lab // UI & UX Design", l3_tag: "Lab // Mobile First", l4_tag: "Lab // Web Standards",
      e1_curso: "Front-end Developer", e2_curso: "Advanced JavaScript for Web", e3_curso: "Intermediate English B1",
      e4_curso: "HTML5 & CSS3 Architecture", e_global: "Global Certification", email_feedback: "Email copied!", email_instrucao: "(click to copy)"
    },
    es: {
      portfolio: "Portafolio", labs: "Labs", carreira: "Trayectoria", contato: "Contacto", explorar: "Ver Proyectos",
      freela_titulo: "Proyectos Freelance", lab_titulo: "Labs y Experimentación", edu_titulo: "Educación Técnica",
      academy_tag: "Academia", cta_footer: "¿Creamos algo impactante?", local: "Salvador, Brasil", acessar: "Explorar",
      f1_tag: "Freelance // Salud Pública", f2_tag: "Freelance // Monitoreo", f3_tag: "Proyecto Real // Impacto Social",
      f4_tag: "Freelance // Salud Digital", l1_tag: "Projeto Final // SENAI Ford", l1_desc: "Dashboard empresarial de alto rendimiento en Angular.",
      l2_tag: "Laboratorio // Interfaz y UX", l3_tag: "Laboratorio // Mobile First", l4_tag: "Laboratorio // Web Standards",
      e1_curso: "Desarrollador Front-end", e2_curso: "JavaScript Avanzado para Web", e3_curso: "Inglés Intermedio B1",
      e4_curso: "Arquitetura HTML5 y CSS3", e_global: "Certificación Global", email_feedback: "¡Email copiado!", email_instrucao: "(clic para copiar)"
    }
  };

  const freelas = [
    { nome: "Avalia SUS", link: "https://avaliasus.org/", tag: "f1_tag", thumb: "thumb/avaliasus.jfif" },
    { nome: "OBS do Homem", link: "https://observatoriosaudedoshomens.org/", tag: "f2_tag", thumb: "thumb/obs.jfif" },
    { nome: "ORI Community", link: "https://ori-community.com/", tag: "f3_tag", thumb: "thumb/ori.jfif" },
    { nome: "DigiSaúde", link: "https://digisaude.org/", tag: "f4_tag", thumb: "thumb/digisaude.jfif" },
  ];

  const formacaoTecnica = [
    { nome: "Sistema Ford", link: "https://desafio-final-ford.vercel.app/login", tag: "l1_tag", desc: "l1_desc" },
    { nome: "Projeto Cordel", link: "https://chicobahia.github.io/projeto-cordel/", tag: "l2_tag" },
    { nome: "Projeto Android", link: "https://chicobahia.github.io/projeto-android/", tag: "l3_tag" },
    { nome: "Projeto Social", link: "https://chicobahia.github.io/projeto-social/", tag: "l4_tag" },
  ];

  const educacao = [
    { curso: "e1_curso", local: "SENAI CIMATEC / FORD", ano: "2025", horas: "300h" },
    { curso: "e2_curso", local: "Alura / SENAI", ano: "2025", horas: "10h" },
    { curso: "e3_curso", local: "EF SET", ano: "2025", horas: "e_global" },
    { curso: "e4_curso", local: "Curso em Vídeo", ano: "2024", horas: "160h" }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-600 font-inter antialiased relative overflow-x-hidden">
      
      {/* WHATSAPP FLOAT */}
      <a 
        href="https://wa.me/5511983588337" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float hover:scale-110 transition-transform shadow-2xl"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; margin: 0; background: #030303; }
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .outline-text { -webkit-text-stroke: 1px #2563eb; color: transparent; }
        @media (min-width: 768px) { .outline-text { -webkit-text-stroke: 2px #2563eb; } }

        /* WHATSAPP STYLES */
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .whatsapp-float {
          position: fixed; bottom: 20px; right: 20px; z-index: 999;
          background: #25D366; width: 55px; height: 55px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          animation: pulse-green 2s infinite;
        }
        @media (min-width: 768px) { .whatsapp-float { width: 65px; height: 65px; bottom: 40px; right: 40px; } }
      `}</style>

      {/* NAV */}
      <div className="fixed top-4 md:top-8 w-full z-50 flex justify-center px-4">
        <nav className="flex items-center gap-3 md:gap-8 px-4 py-2.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-full max-w-full">
          <div className="shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center font-black text-[9px]">F.</div>
          <div className="flex gap-4 md:gap-8 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">
            <button onClick={() => scrollTo('freelas')} className="hover:text-blue-500 transition-colors">{t[idioma].portfolio}</button>
            <button onClick={() => scrollTo('labs')} className="hover:text-blue-500 transition-colors">{t[idioma].labs}</button>
            <button onClick={() => scrollTo('sobre')} className="hover:text-blue-500 transition-colors whitespace-nowrap">{t[idioma].carreira}</button>
          </div>
          <div className="flex gap-2 border-l border-white/10 pl-4">
            {[{ code: 'pt', flag: 'br' }, { code: 'en', flag: 'gb' }, { code: 'es', flag: 'es' }].map((lang) => (
              <button key={lang.code} onClick={() => setIdioma(lang.code)} className={`w-5 h-5 rounded-full overflow-hidden border border-white/10 ${idioma === lang.code ? 'grayscale-0 scale-110 border-blue-500' : 'grayscale'}`}>
                <img src={`https://flagcdn.com/${lang.flag}.svg`} alt={lang.code} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-6 pt-20 md:pt-0">
        <div className="w-full max-w-7xl">
          <h1 className="font-bebas text-[clamp(3.5rem,18vw,14rem)] leading-[0.8] tracking-tighter">
            FRANCISCO <br />
            <span className="outline-text">BITTENCOURT</span>
          </h1>
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <p className="text-[9px] md:text-xs text-blue-500 font-mono tracking-[0.3em] uppercase font-bold">
              {t[idioma].local} <span className="text-white/20 mx-2 md:mx-4">//</span> {t[idioma].e1_curso}
            </p>
            <button onClick={() => scrollTo('freelas')} className="w-full sm:w-auto px-8 py-4 border border-blue-600/30 bg-blue-600/5 hover:bg-blue-600 transition-all rounded-full font-bold uppercase tracking-widest text-[9px]">
              {t[idioma].explorar} ↓
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="freelas" className="w-full max-w-7xl mx-auto py-20 px-6">
        <div className="mb-12">
          <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].portfolio}</span>
          <h2 className="font-bebas text-[clamp(3rem,10vw,7rem)] tracking-tighter uppercase leading-none">{t[idioma].freela_titulo}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freelas.map((p) => (
            <a key={p.nome} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative aspect-video rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5">
              <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-30" style={{ backgroundImage: `url('${p.thumb}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[8px] md:text-[10px] font-bold text-blue-500 uppercase tracking-widest">{t[idioma][p.tag]}</span>
                <h3 className="font-bebas text-4xl md:text-5xl mt-2 uppercase">{p.nome}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LABS SECTION */}
      <section id="labs" className="py-20 border-t border-white/5 bg-[#040404]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bebas text-[clamp(3rem,10vw,7rem)] tracking-tighter uppercase leading-none mb-12">
            {t[idioma].lab_titulo.split(' ')[0]} <span className="outline-text">{t[idioma].lab_titulo.split(' ')[2]}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {formacaoTecnica.map((p) => (
              <a key={p.nome} href={p.link} target="_blank" rel="noopener noreferrer" className="group p-8 md:p-12 bg-[#030303] hover:bg-blue-600/10 transition-all">
                <span className="text-blue-500 font-mono text-[9px] uppercase tracking-widest">{t[idioma][p.tag]}</span>
                <h3 className="font-bebas text-4xl mt-4 uppercase group-hover:text-blue-500 transition-colors">{p.nome}</h3>
                {p.desc && <p className="text-white/40 text-[9px] uppercase mt-4 max-w-xs">{t[idioma][p.desc]}</p>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CAREER */}
      <section id="sobre" className="w-full max-w-7xl mx-auto py-20 px-6">
        <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].academy_tag}</span>
        <h2 className="font-bebas text-[clamp(3rem,10vw,7rem)] tracking-tighter uppercase leading-none mb-12">{t[idioma].edu_titulo}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educacao.map((e, i) => (
            <div key={i} className="p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-blue-600/50 transition-colors">
              <span className="text-blue-600 font-mono text-[10px] font-bold">{e.ano}</span>
              <h4 className="font-bebas text-2xl uppercase mt-2 leading-none">{t[idioma][e.curso]}</h4>
              <p className="text-white/30 text-[9px] uppercase mt-4 font-mono">{e.local} <br/> <span className="text-blue-500">// {t[idioma][e.horas] || e.horas}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-24 md:py-32 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-8">{t[idioma].cta_footer}</p>
          <div className="relative group inline-block w-full mb-20">
            <span className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] px-4 py-1.5 rounded-full transition-all z-50 ${copiado ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                {t[idioma].email_feedback}
            </span>
            <button onClick={copiarEmail} className="font-bebas text-[clamp(1.5rem,8.5vw,7.5rem)] text-white hover:text-blue-500 transition-all tracking-tighter leading-none lowercase break-all sm:break-normal">
              fran.bittencourt09<span className="text-blue-600 md:text-white">@</span>gmail.com
            </button>
            <p className="mt-6 text-[9px] text-white/20 font-mono uppercase tracking-[0.2em]">{t[idioma].email_instrucao}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[9px] font-bold uppercase tracking-widest text-white/10">
            <p>© 2026 // {t[idioma].local}</p>
            <div className="flex gap-4">
               <span>Next.js</span>
               <span className="text-blue-600">//</span>
               <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}