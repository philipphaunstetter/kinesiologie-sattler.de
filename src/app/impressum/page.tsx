import { Navbar } from '@/components/Navbar';

export default function ImpressumPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      {/* Content Section */}
      <section className="px-6 py-6 flex flex-col gap-6 w-full">
        <h1 className="font-semibold text-[30px] leading-[30px] tracking-[-0.5px] text-[#437c6d] text-center">
          Impressum
        </h1>
        
        {/* Angaben gemäß § 5 TMG */}
        <div className="flex flex-col gap-2 text-center">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d]">
            Angaben gemäß § 5 TMG
          </p>
          <div className="font-normal text-[16px] text-[#64748b]">
            <p className="leading-[24px] mb-4">
              Carolin Sattler<br />
              Kinesiologie nach Kinninger®
            </p>
            <p>
              <span className="font-bold">Adresse:</span><br />
              Stockigweg 5<br />
              91799 Büttelbronn
            </p>
          </div>
        </div>
        
        {/* Kontakt */}
        <div className="flex flex-col gap-2 text-center">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d]">
            Kontakt
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#64748b]">
            <span className="font-bold">E-Mail: </span>
            <a href="mailto:Carolin.Sattler@t-online.de" className="hover:underline">
              Carolin.Sattler@t-online.de
            </a>
          </p>
        </div>
        
        {/* Berufsrechtliche Angaben */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            Berufsrechtliche Angaben
          </p>
          <p className="font-bold text-[16px] leading-[24px] text-[#64748b] text-center">
            Rechtlicher Hinweis:
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            Carolin Sattler ist keine medizinische Fachkraft. Die angebotenen Leistungen ersetzen nicht die Diagnose oder Behandlung durch einen Arzt oder Heilpraktiker. Bei gesundheitlichen Beschwerden suchen Sie bitte immer zunächst einen Arzt auf.
          </p>
        </div>
        
        {/* EU-Streitschlichtung */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            EU-Streitschlichtung
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a 
              href="https://ec.europa.eu/consumers/odr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            Meine E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>
        
        {/* Verbraucherstreitbeilegung */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            Verbraucherstreitbeilegung/Universalschlichtungsstelle
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
        
        {/* Haftung für Inhalte */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            Haftung für Inhalte
          </p>
          <div className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            <p className="mb-4">
              Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
        
        {/* Haftung für Links */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            Haftung für Links
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
        </div>
        
        {/* Urheberrecht */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            Urheberrecht
          </p>
          <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 px-6 pt-6 pb-6 w-full">
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center">
            Navigation
          </h3>
          <div className="flex flex-col gap-1 font-normal text-base leading-6 tracking-0 text-[#64748b] text-center w-full">
            <a href="/">Start</a>
            <a href="/ueber-mich">Über mich</a>
            <a href="/leistungen">Leistungen</a>
            <a href="/kontakt">Kontakt</a>
            <a href="/aura-soma">AURA-SOMA®</a>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center">
            Leistungen
          </h3>
          <div className="flex flex-col gap-1 font-normal text-base leading-6 tracking-0 text-[#64748b] text-center w-full">
            <p>Körperliches Wohlbefinden</p>
            <p>Schmerzmanagement</p>
            <p>Geistige Entspannung</p>
            <p>Emotionsarbeit</p>
            <p>Persönliches Wachstum</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center">
            Kontakt
          </h3>
          <div className="flex flex-col gap-1 text-base leading-6 tracking-0 text-center w-full">
            <p className="font-normal text-[#64748b]">
              Terminvereinbarung nach Absprache
            </p>
            <a href="mailto:kontakt@kinesiologie-sattler.de" className="font-bold text-[#437c6d]">
              Jetzt Termin vereinbaren →
            </a>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full" />
        <div className="flex flex-col gap-4 w-full">
          <p className="font-normal text-base leading-6 tracking-0 text-[#64748b] text-center w-full">
            © 2025 Kinesiologie Sattler.<br />
            Alle Rechte vorbehalten.
          </p>
          <div className="flex font-semibold text-base leading-6 tracking-0 text-[#437c6d] text-center justify-between w-full">
            <a href="/impressum" className="flex-1">Impressum</a>
            <a href="/datenschutz" className="flex-1">Datenschutz</a>
          </div>
        </div>
        <p className="font-normal text-sm leading-5 tracking-[0.07px] text-[#64748b] text-justify w-full">
          <span className="font-bold">Rechtlicher Hinweis:</span> Carolin Sattler ist keine medizinische Fachkraft und ersetzt keine ärztliche oder heilpraktische Behandlung. Bei gesundheitlichen Anliegen wird dringend geraten, sich an qualifizierte Schulmediziner, Heilpraktiker oder Psychotherapeuten zu wenden. Es ist wichtig, bestehende Behandlungen nicht zu unterbrechen.<br /><br />
          Carolin Sattler bietet psychologische Beratung außerhalb der Heilkunde an und unterliegt nicht der Psychotherapiegesetzgebung. Beachten Sie, dass diese Dienstleistungen keine medizinische oder therapeutische Behandlung ersetzen und in Absprache mit Fachleuten durchgeführt werden sollten.
        </p>
      </footer>
    </main>
  );
}
