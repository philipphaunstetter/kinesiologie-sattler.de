interface FooterProps {
  variant?: 'default' | 'white';
}

export function Footer({ variant = 'default' }: FooterProps) {
  const bgColor = variant === 'white' ? 'bg-white' : 'bg-[rgba(67,124,109,0.1)]';

  return (
    <footer className={`${bgColor} flex flex-col gap-12 px-6 pt-6 pb-6 w-full`}>
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-12 w-full md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col gap-6 items-center w-full md:items-start md:w-auto">
            <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center md:text-left">
              Navigation
            </h3>
            <div className="flex flex-col gap-1 font-normal text-base leading-6 tracking-0 text-[#64748b] text-center md:text-left w-full">
              <a href="/">Start</a>
              <a href="/ueber-mich">Über mich</a>
              <a href="/leistungen">Leistungen</a>
              <a href="/kontakt">Kontakt</a>
              <a href="/aura-soma">AURA-SOMA®</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center w-full md:items-start md:w-auto">
            <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center md:text-left">
              Leistungen
            </h3>
            <div className="flex flex-col gap-1 font-normal text-base leading-6 tracking-0 text-[#64748b] text-center md:text-left w-full">
              <p>Körperliches Wohlbefinden</p>
              <p>Schmerzmanagement</p>
              <p>Geistige Entspannung</p>
              <p>Emotionsarbeit</p>
              <p>Persönliches Wachstum</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center w-full md:items-start md:w-auto">
            <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center md:text-left">
              Kontakt
            </h3>
            <div className="flex flex-col gap-1 text-base leading-6 tracking-0 text-center md:text-left w-full">
              <p className="font-normal text-[#64748b]">
                Terminvereinbarung nach Absprache
              </p>
              <a href="mailto:kontakt@kinesiologie-sattler.de" className="font-bold text-[#437c6d]">
                Jetzt Termin vereinbaren →
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full" />
        <div className="flex flex-col gap-4 w-full md:flex-row md:justify-between md:items-center">
          <p className="font-normal text-base leading-6 tracking-0 text-[#64748b] text-center md:text-left">
            © 2025 Kinesiologie Sattler. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 font-semibold text-base leading-6 tracking-0 text-[#437c6d] justify-center">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </div>
        <p className="font-normal text-sm leading-5 tracking-[0.07px] text-[#64748b] text-justify w-full">
          <span className="font-bold">Rechtlicher Hinweis:</span> Carolin Sattler ist keine medizinische Fachkraft und ersetzt keine ärztliche oder heilpraktische Behandlung. Bei gesundheitlichen Anliegen wird dringend geraten, sich an qualifizierte Schulmediziner, Heilpraktiker oder Psychotherapeuten zu wenden. Es ist wichtig, bestehende Behandlungen nicht zu unterbrechen.<br /><br />
          Carolin Sattler bietet psychologische Beratung außerhalb der Heilkunde an und unterliegt nicht der Psychotherapiegesetzgebung. Beachten Sie, dass diese Dienstleistungen keine medizinische oder therapeutische Behandlung ersetzen und in Absprache mit Fachleuten durchgeführt werden sollten.
        </p>
      </div>
    </footer>
  );
}
