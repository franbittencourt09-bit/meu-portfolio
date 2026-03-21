// Dentro do seu arquivo Nav.js
export default function Nav({ idioma, setIdioma, t, scrollTo }) {
  const idiomas = [
    { code: 'pt', flag: 'br' },
    { code: 'en', flag: 'gb' },
    { code: 'es', flag: 'es' }
  ];

  return (
    <div className="fixed top-4 md:top-8 w-full z-50 flex justify-center px-4">
      <nav className="flex items-center gap-3 md:gap-8 px-4 py-2.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-full max-w-full">
        <div className="shrink-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center font-black text-[9px]">F.</div>

        <div className="flex gap-4 md:gap-8 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/50">
          <button onClick={() => scrollTo('freelas')} className="hover:text-blue-500 transition-colors">{t[idioma].portfolio}</button>
          <button onClick={() => scrollTo('labs')} className="hover:text-blue-500 transition-colors">{t[idioma].labs}</button>
          <button onClick={() => scrollTo('sobre')} className="hover:text-blue-500 transition-colors whitespace-nowrap">{t[idioma].carreira}</button>
        </div>

        <div className="flex gap-2 border-l border-white/10 pl-4">
          {idiomas.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setIdioma(lang.code)}
              className={`w-5 h-5 rounded-full overflow-hidden border border-white/10 ${idioma === lang.code ? 'grayscale-0 scale-110 border-blue-500' : 'grayscale'}`}
            >
              <img src={`https://flagcdn.com/${lang.flag}.svg`} alt={lang.code} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}