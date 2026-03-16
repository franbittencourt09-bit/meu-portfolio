'use client';
import { useState } from 'react';

export default function Home() {
  const [idioma, setIdioma] = useState('pt');
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = (e) => {
    const email = "chiquinho@alumni.usp.br";
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const t = {
    pt: {
      portfolio: "Portfólio",
      labs: "Labs",
      carreira: "Trajetória",
      contato: "Contato",
      explorar: "Explorar Projetos",
      freela_titulo: "Projetos Freelance",
      lab_titulo: "Labs & Experimentação",
      edu_titulo: "Formação Técnica",
      cta_footer: "Vamos criar algo impactante?",
      local: "Salvador, Brasil",
      acessar: "Explorar",
      f1_tag: "Freelance // Saúde Pública",
      f2_tag: "Freelance // Monitoramento",
      f3_tag: "Projeto Real // Impacto Social",
      f4_tag: "Freelance // Saúde Digital",
      l1_tag: "Projeto Final // SENAI Ford",
      l1_desc: "Dashboard corporativo de alta performance em Angular.",
      l2_tag: "Lab // Interface & UX",
      l3_tag: "Lab // Mobile First",
      l4_tag: "Lab // Web Standards",
      e1_curso: "Desenvolvedor FrontEnd",
      e2_curso: "JavaScript Avançado para Web",
      e3_curso: "Inglês Intermediário B1",
      e4_curso: "Arquitetura HTML5 & CSS3",
      e_global: "Certificação Global",
      email_feedback: "E-mail copiado!",
      email_instrucao: "(clique para copiar)"
    },
    en: {
      portfolio: "Portfolio",
      labs: "Labs",
      carreira: "Experience",
      contato: "Contact",
      explorar: "Explore Projects",
      freela_titulo: "Freelance Projects",
      lab_titulo: "Labs & Experiments",
      edu_titulo: "Technical Education",
      cta_footer: "Ready to build something great?",
      local: "Salvador, Brazil",
      acessar: "View Case",
      f1_tag: "Freelance // Public Health",
      f2_tag: "Freelance // Monitoring",
      f3_tag: "Real Project // Social Impact",
      f4_tag: "Freelance // Digital Health",
      l1_tag: "Final Project // SENAI Ford",
      l1_desc: "High-performance enterprise dashboard built with Angular.",
      l2_tag: "Lab // UI & UX Design",
      l3_tag: "Lab // Mobile First",
      l4_tag: "Lab // Web Standards",
      e1_curso: "Front-End Developer",
      e2_curso: "Advanced JavaScript for Web",
      e3_curso: "Intermediate English B1",
      e4_curso: "HTML5 & CSS3 Architecture",
      e_global: "Global Certification",
      email_feedback: "Email copied!",
      email_instrucao: "(click to copy)"
    },
    es: {
      portfolio: "Portafolio",
      labs: "Labs",
      carreira: "Trayectoria",
      contato: "Contacto",
      explorar: "Ver Proyectos",
      freela_titulo: "Proyectos Freelance",
      lab_titulo: "Labs y Experimentación",
      edu_titulo: "Educación Técnica",
      cta_footer: "¿Creamos algo impactante?",
      local: "Salvador, Brasil",
      acessar: "Explorar",
      f1_tag: "Freelance // Salud Pública",
      f2_tag: "Freelance // Monitoreo",
      f3_tag: "Proyecto Real // Impacto Social",
      f4_tag: "Freelance // Salud Digital",
      l1_tag: "Proyecto Final // SENAI Ford",
      l1_desc: "Dashboard empresarial de alto rendimiento en Angular.",
      l2_tag: "Lab // Interfaz y UX",
      l3_tag: "Lab // Mobile First",
      l4_tag: "Lab // Web Standards",
      e1_curso: "Desarrollador Front-End",
      e2_curso: "JavaScript Avanzado para Web",
      e3_curso: "Inglés Intermedio B1",
      e4_curso: "Arquitectura HTML5 y CSS3",
      e_global: "Certificación Global",
      email_feedback: "¡Email copiado!",
      email_instrucao: "(clic para copiar)"
    }
  };

  const freelas = [
    { nome: "Avalia SUS", link: "https://avaliasus.org/", tag: t[idioma].f1_tag, thumb: "thumb/avaliasus.jfif" },
    { nome: "OBS do Homem", link: "https://observatoriosaudedoshomens.org/", tag: t[idioma].f2_tag, thumb: "thumb/obs.jfif" },
    { nome: "ORI Community", link: "https://ori-community.com/", tag: t[idioma].f3_tag, thumb: "thumb/ori.jfif" },
    { nome: "DigiSaúde", link: "https://digisaude.org/", tag: t[idioma].f4_tag, thumb: "thumb/digisaude.jfif" },
  ];

  const formacaoTecnica = [
    { nome: "Sistema Ford", link: "https://desafio-final-ford.vercel.app/login", tag: t[idioma].l1_tag, desc: t[idioma].l1_desc },
    { nome: "Projeto Cordel", link: "https://chicobahia.github.io/projeto-cordel/", tag: t[idioma].l2_tag },
    { nome: "Projeto Android", link: "https://chicobahia.github.io/projeto-android/", tag: t[idioma].l3_tag },
    { nome: "Projeto Social", link: "https://chicobahia.github.io/projeto-social/", tag: t[idioma].l4_tag },
  ];

  const educacao = [
    { curso: t[idioma].e1_curso, local: "SENAI CIMATEC / FORD", ano: "2025", horas: "300h" },
    { curso: t[idioma].e2_curso, local: "Alura / SENAI", ano: "2025", horas: "10h" },
    { curso: t[idioma].e3_curso, local: "EF SET", ano: "2025", horas: t[idioma].e_global },
    { curso: t[idioma].e4_curso, local: "Curso em Vídeo", ano: "2024", horas: "160h" }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-600 font-inter antialiased relative">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; margin: 0; }
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .outline-text { -webkit-text-stroke: 1px #2563eb; color: transparent; }
        @media (min-width: 768px) { .outline-text { -webkit-text-stroke: 2px #2563eb; } }
        
        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        .whatsapp-float {
          position: fixed; bottom: 30px; right: 30px; z-index: 999;
          background: #25D366; width: 65px; height: 65px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3); transition: all 0.3s ease;
          animation: pulse-green 2s infinite;
        }
        .whatsapp-float:hover { transform: scale(1.1) translateY(-5px); background: #20ba5a; }
        
        .flag-wrapper {
          width: 28px; height: 28px; border-radius: 50%; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1); transition: all 0.4s ease;
          filter: grayscale(1);
        }
        .flag-img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.4); }
        .active .flag-wrapper { filter: grayscale(0); border-color: #2563eb; box-shadow: 0 0 10px rgba(37, 99, 235, 0.4); }
      `}</style>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5511983588337"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* NAV */}
      <div className="fixed top-6 md:top-10 w-full z-50 flex justify-center px-6">
        <nav className="flex items-center gap-4 md:gap-8 px-6 py-3 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-black text-xs">F.</div>
          <div className="flex gap-4 md:gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
            <button onClick={() => scrollTo('freelas')} className="hover:text-blue-500 transition-colors">{t[idioma].portfolio}</button>
            <button onClick={() => scrollTo('labs')} className="hover:text-blue-500 transition-colors">{t[idioma].labs}</button>
            <button onClick={() => scrollTo('sobre')} className="hover:text-blue-500 transition-colors">{t[idioma].carreira}</button>
          </div>
          <div className="h-4 w-px bg-white/10 mx-1"></div>
          <div className="flex gap-3">
            {[
              { code: 'pt', flag: 'br' },
              { code: 'en', flag: 'gb' },
              { code: 'es', flag: 'es' }
            ].map((lang) => (
              <button key={lang.code} onClick={() => setIdioma(lang.code)} className={`flag-btn ${idioma === lang.code ? 'active' : ''}`}>
                <div className="flag-wrapper">
                  <img src={`https://flagcdn.com/${lang.flag}.svg`} alt={lang.code} className="flag-img" />
                </div>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center px-6 md:px-12">
        <div className="w-full max-w-7xl text-left">
          <h1 className="font-bebas text-[16vw] md:text-[13rem] leading-[0.8] tracking-tighter -ml-1 md:-ml-2">
            FRANCISCO <br /> <span className="outline-text">BITTENCOURT</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <p className="text-[10px] md:text-sm text-blue-500 font-mono tracking-[0.4em] uppercase font-bold opacity-90">
              {t[idioma].local} // Front-end Developer
            </p>
            <button onClick={() => scrollTo('freelas')} className="px-10 py-5 border border-blue-600/30 bg-blue-600/5 hover:bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-[9px] transition-all group">
              {t[idioma].explorar} <span className="inline-block group-hover:translate-y-1 transition-transform ml-2">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* FREELANCES */}
      <section id="freelas" className="w-full max-w-7xl mx-auto py-32 md:py-48 px-6 md:px-12 text-left">
        <div className="mb-20">
          <span className="text-blue-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].portfolio}</span>
          <h2 className="font-bebas text-7xl md:text-9xl tracking-tighter uppercase leading-none">{t[idioma].freela_titulo}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {freelas.map((p) => (
            <a key={p.nome} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-white/5">
              <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-100" style={{ backgroundImage: `url('${p.thumb}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[9px] font-bold text-blue-500 border border-blue-500/30 px-3 py-1.5 rounded-full uppercase tracking-widest">{p.tag}</span>
                <h3 className="font-bebas text-5xl md:text-7xl mt-4 uppercase leading-none">{p.nome}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LABS */}
      <section id="labs" className="py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-blue-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].labs}</span>
            <h2 className="font-bebas text-7xl md:text-9xl tracking-tighter uppercase leading-none">
              {t[idioma].lab_titulo.split(' ')[0]} <span className="outline-text">{t[idioma].lab_titulo.split(' ')[2]}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {formacaoTecnica.map((p, idx) => (
              <a
                key={p.nome}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-12 bg-[#030303] hover:bg-blue-600 transition-all duration-500 overflow-hidden"
              >
                <span className="absolute -right-4 -bottom-10 font-bebas text-[12rem] text-white/[0.02] group-hover:text-white/10 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>

                <div className="relative z-10">
                  <span className="text-blue-500 group-hover:text-white font-mono text-[9px] font-bold uppercase tracking-widest transition-colors">
                    {p.tag}
                  </span>
                  <h3 className="font-bebas text-4xl md:text-6xl mt-6 uppercase leading-tight group-hover:text-white transition-colors">
                    {p.nome}
                  </h3>
                  {p.desc && (
                    <p className="text-white/30 group-hover:text-white/70 text-[10px] mt-6 uppercase leading-relaxed max-w-xs transition-colors">
                      {p.desc}
                    </p>
                  )}

                  <div className="mt-12 flex items-center gap-2 text-white/20 group-hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                    {t[idioma].acessar} <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCAÇÃO */}
      <section id="sobre" className="w-full max-w-7xl mx-auto py-32 md:py-48 px-6 md:px-12 text-left">
        <div className="mb-20">
          <span className="text-blue-600 font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">// Academy</span>
          <h2 className="font-bebas text-7xl md:text-9xl text-white mb-20 uppercase tracking-tighter">{t[idioma].edu_titulo}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {educacao.map((e, i) => (
            <div key={i} className="p-12 bg-[#030303] group hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
              <div className="flex justify-between items-start relative z-10">
                <div className="max-w-xs">
                  <h3 className="font-bebas text-4xl md:text-5xl uppercase leading-none group-hover:text-blue-500 transition-colors">
                    {e.curso}
                  </h3>
                  <p className="text-white/40 font-mono text-[9px] font-bold mt-6 uppercase tracking-widest leading-loose">
                    {e.local} <br />
                    <span className="text-blue-600 group-hover:text-white transition-colors">// {e.horas}</span>
                  </p>
                </div>
                <span className="font-bebas text-5xl md:text-7xl text-white/10 group-hover:text-white/20 transition-colors">
                  {e.ano}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-48 bg-[#050505] overflow-hidden">
        <div className="relative z-50 max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-mono text-[10px] font-bold tracking-[0.5em] uppercase mb-8">
            {t[idioma].cta_footer}
          </p>

          <div className="inline-block relative group">
            <span className={`absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] px-3 py-1 rounded-full transition-all duration-300 ${copiado ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              {t[idioma].email_feedback}
            </span>

            <button
              onClick={copiarEmail}
              className="font-bebas text-[9vw] md:text-[7rem] text-white hover:text-blue-500 transition-all tracking-tighter leading-none lowercase break-all md:break-normal"
              style={{
                display: 'block',
                position: 'relative',
                zIndex: 100,
                width: '100%',
                maxWidth: '100vw'
              }}
            >
              fran.bittencourt09@gmail.com
            </button>

            <p className="mt-4 text-[9px] text-white/20 font-mono animate-pulse">
              {t[idioma].email_instrucao}
            </p>
          </div>

          <div className="mt-24 text-[10px] font-bold uppercase tracking-widest text-white/10">
            <p>© 2026 // Salvador, Brasil</p>
          </div>
        </div>
      </footer>
    </main>
  );
}