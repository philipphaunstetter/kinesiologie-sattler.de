import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function ServicesPage() {
  return (
    <main className="bg-white w-full">
      <Navbar />
      <div className="w-full max-w-[1440px] mx-auto">
      
      {/* Hero Section */}
      <section className="flex flex-col gap-6 items-center p-6 w-full text-center">
        <h1 className="font-semibold text-[30px] leading-[30px] tracking-[-0.5px] text-[#437c6d] w-full">
          Ihre Transformation beginnt hier
        </h1>
        <p className="font-normal text-base leading-6 text-[#64748b] w-full">
          Entdecken Sie die kraftvolle Verbindung von Visionärer Kinesiologie nach Kinninger® und AURA-SOMA® für Ihre ganzheitliche Balance und persönliche Entwicklung.
        </p>
        <Button className="w-auto">
          Zum persönlichen Fragebogen
        </Button>
      </section>

      {/* Visionäre Kinesiologie Section */}
      <section className="flex flex-col gap-6 items-center w-full">
        <div className="flex flex-col gap-6 items-center p-6 w-full">
          {/* Card 1: Visionäre Kinesiologie */}
          <div className="bg-white flex flex-col gap-8 items-start p-5 rounded-xl shadow-xl w-full">
            <div className="bg-[#437c6d] flex items-center justify-center w-10 h-10 p-[10px] rounded-lg">
              <img src="/icons/sparkle.svg" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-[10px] items-start w-full">
              <h2 className="font-semibold text-base leading-6 text-[#437c6d] w-full">
                Visionäre Kinesiologie nach Kinninger®
              </h2>
              <p className="font-normal text-sm leading-[21px] text-[#64748b] tracking-[0.07px] w-full">
                Die revolutionäre Methode, die traditionelle kinesiologische Techniken mit visionären Elementen zur Persönlichkeitsentwicklung verbindet. Entdecken Sie Ihre wahre Bestimmung und lösen Sie energetische Blockaden auf allen Ebenen.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-start w-full">
              {['Visionsfindung', 'Energiebalance', 'Potenzialentfaltung', 'Transformation'].map((tag) => (
                <div key={tag} className="bg-[rgba(67,124,109,0.05)] flex items-center justify-center px-4 py-1 rounded-full">
                  <p className="font-semibold text-sm leading-[21px] text-[#437c6d] tracking-[0.07px]">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: AURA-SOMA */}
          <div className="bg-white flex flex-col gap-8 items-start p-5 rounded-xl shadow-xl w-full">
            <div className="bg-[#437c6d] flex items-center justify-center w-10 h-10 p-[10px] rounded-lg">
              <img src="/icons/spiritual.svg" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-[10px] items-start w-full">
              <h2 className="font-semibold text-base leading-6 text-[#437c6d] w-full">
                AURA-SOMA® Behandlungen
              </h2>
              <p className="font-normal text-sm leading-[21px] text-[#64748b] tracking-[0.07px] w-full">
                Als zertifizierte AURA-SOMA® Practitioner biete ich Ihnen die unterstützende Kraft der Farben und Essenzen. Chakra Balance Massagen und individuelle Farbberatung für Ihre energetische Harmonisierung und spirituelle Entwicklung.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-start w-full">
              {['Farbberatung', 'Chakra Balance', 'Energiebalance', 'Aura-Reinigung'].map((tag) => (
                <div key={tag} className="bg-[rgba(67,124,109,0.05)] flex items-center justify-center px-4 py-1 rounded-full">
                  <p className="font-semibold text-sm leading-[21px] text-[#437c6d] tracking-[0.07px]">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info: Visionäre Kinesiologie */}
      <section className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 items-center px-6 py-12 w-full">
        <div className="flex flex-col gap-6 items-start text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full">
            Visionäre Kinesiologie nach Kinninger®
          </h2>
          <div className="font-normal text-base leading-6 text-[#64748b] w-full">
            <p className="mb-4">
              Die Visionäre Kinesiologie nach Kinninger® ist eine innovative, ganzheitliche Methode, die traditionelle kinesiologische Techniken mit visionären Elementen zur Persönlichkeitsentwicklung und energetischen Harmonisierung kombiniert.
            </p>
            <p>
              Im Gegensatz zu klassischen kinesiologischen Methoden arbeitet die Visionäre Kinesiologie nicht nur mit Ihren aktuellen Blockaden, sondern integriert Ihre Zukunftsvisionen als transformierende Kraft in die Behandlung.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Step 1 */}
          <div className="bg-white flex flex-col min-h-[225px] items-center justify-between px-6 py-10 rounded-xl shadow-xl w-full text-center">
            <div className="bg-[#437c6d] flex items-center justify-center w-10 h-10 p-[10px] rounded-lg">
              <img src="/icons/analysis.svg" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-[10px] items-center w-full">
              <h3 className="font-semibold text-xl leading-6 text-[#437c6d]">
                Erstanalyse
              </h3>
              <p className="font-normal text-base leading-6 text-[#64748b]">
                Ganzheitliche Bestandsaufnahme und Visionsfindung (20-30 Min)
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-white flex flex-col min-h-[225px] items-center justify-between px-6 py-10 rounded-xl shadow-xl w-full text-center">
            <div className="bg-[#437c6d] flex items-center justify-center w-10 h-10 p-[10px] rounded-lg">
              <img src="/icons/diagnostics.svg" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-[10px] items-center w-full">
              <h3 className="font-semibold text-xl leading-6 text-[#437c6d]">
                Diagnostik
              </h3>
              <p className="font-normal text-base leading-6 text-[#64748b]">
                Kinesiologische Visions-Diagnostik und Muskeltests (30-40 Min)
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-white flex flex-col min-h-[225px] items-center justify-between px-6 py-10 rounded-xl shadow-xl w-full text-center">
            <div className="bg-[#437c6d] flex items-center justify-center w-10 h-10 p-[10px] rounded-lg">
              <img src="/icons/transformation.svg" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-[10px] items-center w-full">
              <h3 className="font-semibold text-xl leading-6 text-[#437c6d]">
                Transformation
              </h3>
              <p className="font-normal text-base leading-6 text-[#64748b]">
                Kinesiologische Visions-Diagnostik und Muskeltests (30-40 Min)
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="bg-white flex flex-col min-h-[225px] items-center justify-between px-6 py-10 rounded-xl shadow-xl w-full text-center">
            <div className="bg-[#437c6d] flex items-center justify-center w-10 h-10 p-[10px] rounded-lg">
              <img src="/icons/integration.svg" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-[10px] items-center w-full">
              <h3 className="font-semibold text-xl leading-6 text-[#437c6d]">
                Integration
              </h3>
              <p className="font-normal text-base leading-6 text-[#64748b]">
                Kinesiologische Visions-Diagnostik und Muskeltests (30-40 Min)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info: AURA-SOMA */}
      <section className="flex flex-col gap-12 items-center px-6 py-12 w-full">
        <div className="flex flex-col gap-6 items-start text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full">
            AURA-SOMA® Behandlungen
          </h2>
          <p className="font-normal text-base leading-6 text-[#64748b] w-full">
            Die kraftvolle Wirkung der Farben und Essenzen für Ihre energetische Harmonisierung
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Item 1 */}
          <div className="bg-white flex flex-col gap-8 items-start p-5 rounded-xl shadow-xl w-full">
            <div className="flex flex-col gap-[10px] items-start w-full">
              <h3 className="font-semibold text-base leading-6 text-[#437c6d] w-full">
                AURA-SOMA® Beratung
              </h3>
              <p className="font-normal text-sm leading-[21px] text-[#64748b] tracking-[0.07px] w-full">
                Professionelle Farbberatung und Analyse Ihrer persönlichen AURA-SOMA® Auswahl. Entdecken Sie die Botschaften der Farben für Ihr Leben.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              {[
                'Intuitive Farbwahl aus über 100 Essenzen',
                'Persönliche Deutung Ihrer Farbkombinationen',
                'Anwendungsempfehlungen für den Alltag',
                'Vertiefende Gespräche über Ihre Persönlichkeit'
              ].map((text, i) => (
                <div key={i} className="flex gap-[14px] items-start">
                  <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                  <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white flex flex-col gap-8 items-start p-5 rounded-xl shadow-xl w-full">
            <div className="flex flex-col gap-[10px] items-start w-full">
              <h3 className="font-semibold text-base leading-6 text-[#437c6d] w-full">
                Chakra Balance Massage
              </h3>
              <p className="font-normal text-sm leading-[21px] text-[#64748b] tracking-[0.07px] w-full">
                Harmonisierende Massage mit ausgewählten AURA-SOMA® Ölen für Ihre Energiezentren. Tiefe Entspannung und energetischer Ausgleich.
              </p>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              {[
                'Energetische Analyse der Chakren',
                'Sanfte Massage mit passenden Farbölien',
                'Kristalle und Pomander Essenzen',
                'Nachbesprechung und Empfehlungen'
              ].map((text, i) => (
                <div key={i} className="flex gap-[14px] items-start">
                  <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                  <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 items-center px-6 py-12 w-full">
        <div className="flex flex-col gap-6 items-start text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full">
            Für wen sind diese Behandlungen geeignet?
          </h2>
          <div className="font-normal text-base leading-6 text-[#64748b] w-full">
            <p className="mb-4">
              Meine Behandlungen sind ideal für Menschen, die bereit sind, Verantwortung für ihre persönliche Transformation zu übernehmen und nachhaltige Veränderung in allen Lebensbereichen anstreben.
            </p>
            <p>
              Sie profitieren besonders, wenn Sie eine ganzheitliche Herangehensweise an Ihre Entwicklung bevorzugen und offen für innovative Methoden sind.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center w-full">
          {/* Tag 1 */}
          <div className="flex flex-col gap-4 items-center w-[125px]">
            <div className="bg-white flex items-center justify-center p-[10px] rounded-xl shadow-xl w-12 h-12">
              <img src="/icons/mental.svg" alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <p className="font-semibold text-base leading-6 text-[#437c6d]">
                Visionsfindung
              </p>
            </div>
          </div>

          {/* Tag 2 */}
          <div className="flex flex-col gap-4 items-center w-[125px]">
            <div className="bg-white flex items-center justify-center p-[10px] rounded-xl shadow-xl w-12 h-12">
              <img src="/icons/energy.svg" alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <p className="font-semibold text-base leading-6 text-[#437c6d]">
                Energiebalance
              </p>
            </div>
          </div>

          {/* Tag 3 */}
          <div className="flex flex-col gap-4 items-center w-[125px]">
            <div className="bg-white flex items-center justify-center p-[10px] rounded-xl shadow-xl w-12 h-12">
              <img src="/icons/central.svg" alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <p className="font-semibold text-base leading-6 text-[#437c6d]">
                Potenzial-entfaltung
              </p>
            </div>
          </div>

          {/* Tag 4 */}
          <div className="flex flex-col gap-4 items-center w-[125px]">
            <div className="bg-white flex items-center justify-center p-[10px] rounded-xl shadow-xl w-12 h-12">
              <img src="/icons/transformation.svg" alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <p className="font-semibold text-base leading-6 text-[#437c6d]">
                Transformation
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className="bg-white flex flex-col gap-12 px-6 pt-6 pb-6 w-full">
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
            <p className="font-bold text-[#437c6d]">
              Jetzt Termin vereinbaren →
            </p>
          </div>
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
        <div className="font-normal text-sm leading-5 tracking-[0.07px] text-[#64748b] text-justify w-full">
          <p className="mb-[14px]">
            <span className="font-bold">Rechtlicher Hinweis:</span> Carolin Sattler ist keine medizinische Fachkraft und ersetzt keine ärztliche oder heilpraktische Behandlung. Bei gesundheitlichen Anliegen wird dringend geraten, sich an qualifizierte Schulmediziner, Heilpraktiker oder Psychotherapeuten zu wenden. Es ist wichtig, bestehende Behandlungen nicht zu unterbrechen.
          </p>
          <p>
            Carolin Sattler bietet psychologische Beratung außerhalb der Heilkunde an und unterliegt nicht der Psychotherapiegesetzgebung. Beachten Sie, dass diese Dienstleistungen keine medizinische oder therapeutische Behandlung ersetzen und in Absprache mit Fachleuten durchgeführt werden sollten.
          </p>
        </div>
        </div>
      </footer>
    </main>
  );
}