'use client';
import { useState } from 'react';
import { t } from '../constants/traducoes';
import { freelas, formacaoTecnica, educacao } from '../constants/dados';
import WhatsApp from '@/constants/whatsapp';
import Nav from '@/constants/nav';

export default function Home() {
  const [idioma, setIdioma] = useState('pt');
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = () => {
    const email = "fran.bittencourt09@gmail.com";
    navigator.clipboard.writeText(email);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-600 font-inter antialiased relative overflow-x-hidden">
      <WhatsApp />
      <Nav idioma={idioma} setIdioma={setIdioma} t={t} scrollTo={scrollTo} />

      {/* HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="w-full">
          <h1 className="font-bebas text-6xl md:text-9xl leading-[0.8] tracking-tighter">
            FRANCISCO <br />
            <span className="outline-text">BITTENCOURT</span>
          </h1>
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <p className="text-[9px] md:text-xs text-blue-500 font-mono tracking-[0.3em] uppercase font-bold">
              {t[idioma].local} <span className="text-white/20 mx-2 md:mx-4">//</span> {t[idioma].e1_curso}
            </p>
            <button
              onClick={() => scrollTo('freelas')}
              className="w-full sm:w-auto px-8 py-4 border border-blue-600/30 bg-blue-600/5 hover:bg-blue-600 transition-all rounded-full font-bold uppercase tracking-widest text-[9px]"
            >
              {t[idioma].explorar} ↓
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="freelas" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].portfolio}</span>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-tighter leading-none">
            {t[idioma].freela_titulo.split(' ')[0]} <span className="outline-text">{t[idioma].freela_titulo.split(' ')[1]}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {freelas.map((p) => (
            <a key={p.nome} href={p.link} target="_blank" rel="noopener noreferrer" className="group relative aspect-video rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-blue-600/50 transition-all duration-500">
              <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-30" style={{ backgroundImage: `url('${p.thumb}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block mb-2">{t[idioma][p.tag]}</span>
                <h3 className="font-bebas text-2xl md:text-4xl uppercase">{p.nome}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* LABS SECTION */}
      <section id="labs" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// LABS</span>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-tighter leading-none">
            {t[idioma].lab_titulo.split(' ')[0]} <span className="outline-text">{t[idioma].lab_titulo.split(' ')[2]}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {formacaoTecnica.map((p, index) => (
            <a key={p.nome} href={p.link} target="_blank" rel="noopener noreferrer"
              className="group relative aspect-video rounded-2xl p-8 md:p-10 bg-[#0a0a0a] border border-white/5 hover:border-blue-600/50 transition-all duration-500 flex flex-col justify-between">

              {/* INFO ADICIONAL: Número do Lab e Seta */}
              <div className="flex justify-between items-start">
                <span className="text-white/10 font-bebas text-4xl group-hover:text-blue-600/20 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 transition-all">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block mb-2">
                  {t[idioma][p.tag]}
                </span>
                <h3 className="font-bebas text-2xl md:text-4xl uppercase leading-[0.9] group-hover:text-blue-500 transition-colors">
                  {p.nome}
                </h3>
                {p.desc && (
                  <p className="text-white/40 text-[9px] uppercase mt-4 max-w-xs font-mono tracking-wider leading-relaxed">
                    {t[idioma][p.desc]}
                  </p>
                )}
              </div>

              {/* Efeito de brilho sutil no fundo ao passar o mouse */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[80px] group-hover:bg-blue-600/20 transition-all rounded-full"></div>
            </a>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="sobre" className="w-full max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].academy_tag}</span>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-tighter leading-none">
            {t[idioma].edu_titulo.split(' ')[0]} <span className="outline-text">{t[idioma].edu_titulo.split(' ')[1]}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educacao.map((e, i) => (
            <div key={i} className="p-8 border border-white/5 bg-[#0a0a0a] rounded-2xl hover:border-blue-600/50 transition-all">
              <span className="text-blue-600 font-mono text-[10px] font-bold">{e.ano}</span>
              <h4 className="font-bebas text-xl md:text-2xl uppercase mt-2 leading-none">{t[idioma][e.curso]}</h4>
              <p className="text-white/30 text-[9px] uppercase mt-4 font-mono">{e.local} <br /> <span className="text-blue-500">// {t[idioma][e.horas] || e.horas}</span></p>
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
            <button onClick={copiarEmail} className="text-[10px] font-mono uppercase tracking-[0.3em] border border-white/10 px-6 py-3 rounded-full hover:bg-blue-600/10 transition-colors">
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