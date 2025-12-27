import { Button } from '@/components/Button';
import { MobileNavigation } from '@/components/MobileNavigation';

export default function AuraSomaPage() {
  return (
    <main className="bg-white w-full">
      <MobileNavigation />
      
      {/* Hero Section */}
      <section className="flex flex-col gap-6 items-center p-6 w-full text-center">
        <h1 className="font-semibold text-[30px] leading-[30px] tracking-[-0.5px] text-[#437c6d] w-full">
          Entdecken Sie die Kraft der Farben für Ihre Seele
        </h1>
        <p className="font-normal text-base leading-6 text-[#64748b] w-full">
          Als zertifizierte AURA-SOMA® Practitioner begleite ich Sie auf Ihrem Weg zur energetischen Balance durch die wohltuende Kraft von Farben, Pflanzen und Kristallen.
        </p>
        <Button className="w-auto">
          Jetzt Beratung buchen
        </Button>
      </section>

      {/* What is AURA-SOMA Section */}
      <section className="flex flex-col gap-12 items-center px-6 py-12 w-full">
        <div className="flex flex-col gap-6 items-start text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full">
            Was ist AURA-SOMA®?
          </h2>
          <p className="font-normal text-base leading-6 text-[#64748b] w-full">
            AURA-SOMA® ist ein energetisches Körperpflegesystem, das die natürlichen Energien von Farben, Pflanzen und Kristallen nutzt, um ganzheitlich Wohlbefinden und Vitalität zu fördern.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Card 1: Die Kraft der Farben */}
          <div className="bg-white flex flex-col gap-8 items-start p-5 rounded-xl shadow-xl w-full">
            <p className="font-semibold text-base leading-6 text-[#437c6d] text-center w-full">
              Die Kraft der Farben
            </p>
            <div className="flex flex-wrap gap-2 items-start w-full">
              {['Symbolische Ebene', 'Spirituelle Ebene', 'Mentale Ebene', 'Emotionale Ebene', 'Energetische Ebene'].map((tag) => (
                <div key={tag} className="bg-[rgba(67,124,109,0.05)] flex items-center justify-center px-4 py-1 rounded-full">
                  <p className="font-semibold text-sm leading-[21px] text-[#437c6d] tracking-[0.07px]">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Ihre Potenziale entfalten */}
          <div className="bg-white flex flex-col gap-8 items-start p-5 rounded-xl shadow-xl w-full">
            <p className="font-semibold text-base leading-6 text-[#437c6d] text-center w-full">
              Ihre Potenziale entfalten
            </p>
            <div className="flex flex-wrap gap-2 items-start w-full">
              {['Verborgene Talente', 'Lebensrichtung', 'Natürliche Vitalität', 'Innere Balance'].map((tag) => (
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

      {/* AURA-SOMA Treatments Section */}
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
          {/* Treatment 1: AURA-SOMA Beratung */}
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
            <Button className="w-full">
              Beratung buchen
            </Button>
          </div>

          {/* Treatment 2: Chakra Balance Massage */}
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
            <Button className="w-full">
              Massage buchen
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-start min-h-[650px] w-full">
        <div className="bg-[rgba(67,124,109,0.1)] flex flex-col w-full">
          <div className="flex flex-col gap-12 items-center px-6 py-12 w-full">
            <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full text-center">
              Bereit für Ihre transformative Reise?
            </h2>
            <p className="font-normal text-base leading-6 text-[#437c6d] w-full text-center">
              Lassen Sie uns gemeinsam den Schlüssel zu Ihrer inneren Balance und Ihrem authentischen Lebensweg entdecken.
            </p>
            <Button className="w-full">
              Zum Fragebogen
            </Button>
          </div>
          <div className="h-[300px] w-full overflow-hidden">
            <img
              src="/images/96eb8438-8c8b-49ce-970d-6392c12c1eb1.JPG"
              alt="Transformative Reise"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white flex flex-col gap-12 px-6 pt-6 pb-6 w-full">
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
            <p className="font-bold text-[#437c6d]">
              Jetzt Termin vereinbaren →
            </p>
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
      </footer>
    </main>
  );
}