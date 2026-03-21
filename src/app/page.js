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
    navigator.clipboard.writeText("fran.bittencourt09@gmail.com");
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-blue-600 font-inter antialiased relative overflow-x-hidden">
      <WhatsApp />
      <Nav idioma={idioma} setIdioma={setIdioma} t={t} scrollTo={scrollTo} />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <h1 className="font-bebas text-6xl md:text-9xl leading-[0.8] tracking-tighter">
          FRANCISCO <br /> <span className="outline-text">BITTENCOURT</span>
        </h1>
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <p className="text-[9px] text-blue-500 font-mono tracking-[0.3em] uppercase font-bold">
            {t[idioma].local} <span className="text-white/20 mx-4">//</span> {t[idioma].e1_curso}
          </p>
          <button onClick={() => scrollTo('freelas')} className="px-8 py-4 border border-blue-600/30 bg-blue-600/5 hover:bg-blue-600 rounded-full font-bold uppercase tracking-widest text-[9px] transition-all">
            {t[idioma].explorar} ↓
          </button>
        </div>
      </section>

      {/* 2. PROJECTS (FREELAS) */}
      <section id="freelas" className="max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].portfolio}</span>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-tighter leading-none">
            {t[idioma].freela_titulo.split(' ')[0]} <span className="outline-text">{t[idioma].freela_titulo.split(' ')[1]}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {freelas.map((p) => (
            <a key={p.nome} href={p.link} target="_blank" rel="noopener" className="group relative aspect-video rounded-2xl bg-[#0a0a0a] border border-white/5">
              <div className="absolute inset-0 bg-cover bg-center grayscale opacity-30" style={{ backgroundImage: `url('${p.thumb}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[9px] font-bold text-blue-500 uppercase block mb-2">{t[idioma][p.tag]}</span>
                <h3 className="font-bebas text-2xl md:text-4xl">{p.nome}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3. LABS (ESTUDOS) */}
      <section id="labs" className="max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// LABS</span>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-tighter">
            PROJETOS <span className="outline-text">ESTUDO</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {formacaoTecnica.map((p, index) => (
            <a key={p.nome} href={p.link} target="_blank" rel="noopener" className="group relative aspect-video rounded-2xl p-10 bg-[#0a0a0a] border border-white/5 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-white/10 font-bebas text-4xl">{String(index + 1).padStart(2, '0')}</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H1M11 1V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-[9px] font-bold text-blue-500 uppercase block mb-2">{t[idioma][p.tag]}</span>
                <h3 className="font-bebas text-2xl md:text-4xl">{p.nome}</h3>
                {p.desc && <p className="text-white/40 text-[9px] uppercase mt-4 max-w-xs font-mono tracking-wider">{t[idioma][p.desc]}</p>}
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[80px] rounded-full"></div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. ACADEMIC (EDUCAÇÃO) */}
      <section id="sobre" className="max-w-7xl mx-auto py-24 px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-blue-600 font-mono text-[9px] font-bold uppercase tracking-[0.3em] mb-4 block">// {t[idioma].academy_tag}</span>
          <h2 className="font-bebas text-4xl md:text-6xl tracking-tighter">
            FORMAÇÃO <span className="outline-text">ACADÊMICA</span>
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
      <footer className="py-24 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-600 font-mono text-[10px] uppercase mb-8 tracking-[0.4em]">
            {t[idioma].cta_footer}
          </p>

          <div className="relative inline-block">
            {/* Balão de Feedback */}
            <span className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-4 py-1.5 rounded-full transition-all duration-300 font-bold ${copiado ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              {t[idioma].email_feedback || "COPIADO!"}
            </span>

            {/* Botão que executa a cópia */}
            <button
              onClick={copiarEmail}
              className="text-[10px] md:text-xs font-mono uppercase border border-white/10 px-8 py-4 rounded-full hover:bg-blue-600/10 hover:border-blue-600/50 transition-all active:scale-95"
            >
              fran.bittencourt09<span className="text-blue-600">@</span>gmail.com
            </button>
          </div>

          <p className="mt-6 text-[9px] text-white/20 font-mono uppercase tracking-[0.2em]">
            {t[idioma].email_instrucao}
          </p>
        </div>
      </footer>
    </main>
  );
}