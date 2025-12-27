import { Button } from '@/components/Button';
import { MobileNavigation } from '@/components/MobileNavigation';

export default function AboutPage() {
  return (
    <main className="bg-white w-full">
      <MobileNavigation />
      
      {/* Hero Section */}
      <section className="flex flex-col gap-6 items-center py-6 w-full">
        <div className="w-full h-[586px]">
          <img
            src="/images/197eb551-c7ca-417d-8cf7-143b32032588.JPG"
            alt="Carolin Sattler"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 items-center px-6 text-center w-full">
          <h1 className="font-semibold text-[30px] leading-[30px] tracking-[-0.5px] text-[#437c6d] w-full">
            Der Schlüssel zur Balance
          </h1>
          <div className="font-normal text-base leading-6 text-[#64748b] w-full">
            <p className="mb-4">
              Ich bin Carolin Sattler, Ihre professionelle Wegbegleiterin auf der Reise zu ganzheitlichem Wohlbefinden und authentischer Lebensgestaltung.
            </p>
            <p className="mb-4">
              Als zertifizierte Praktikerin der Visionären Kinesiologie nach Kinninger® und AURA-SOMA® Practitioner verbinde ich bewährte kinesiologische Techniken mit innovativen, zukunftsorientierten Ansätzen zur Persönlichkeitsentwicklung und energetischen Balance.
            </p>
            <p>
              Meine Berufung ist es, Menschen wie Ihnen dabei zu helfen, Ihre innere Balance zu finden, Blockaden zu lösen und Ihr volles Potenzial zu entfalten. Mit meiner ganzheitlichen Herangehensweise begleite ich Sie einfühlsam und kompetent auf Ihrem Weg zu mehr Lebensfreude und Wohlbefinden.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Transformation Section */}
      <section className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 items-center px-6 py-12 w-full text-center">
        <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full">
          Die Erweckung: Meine persönliche Transformation
        </h2>
        <div className="font-normal text-base leading-6 text-[#64748b] w-full">
          <p className="mb-4">
            Mein eigener Weg zu diesen transformativen Methoden begann durch persönliche Herausforderungen, die mich zu den ersten Sitzungen der Visionären Kinesiologie nach Kinninger® führten.
          </p>
          <p className="mb-4">
            Die Erfahrung war lebensverändernd: Die kraftvolle Wirkung dieser Methoden am eigenen Leib zu erleben, entfachte eine tiefe Berufung in mir. So intensiv, dass ich mich dazu berufen fühlte, anderen Menschen durch diese revolutionären Techniken zu ihrer eigenen inneren Balance zu verhelfen.
          </p>
          <p>
            Heute bin ich dankbar für diesen Weg, der mich nicht nur zu meiner eigenen inneren Stärke, sondern auch zu meiner wahren Lebensaufgabe geführt hat.
          </p>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="flex flex-col gap-12 items-center px-6 py-12 w-full">
        <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] text-center w-full">
          Meine Qualifikationen
        </h2>
        <div className="flex flex-col gap-6 w-full">
          {/* Visionäre Kinesiologie Card */}
          <div className="bg-white border border-[#437c6d] flex flex-col items-start px-6 py-10 rounded-2xl shadow-xl w-full">
            <div className="flex flex-col min-h-[300px] items-start justify-between w-full">
              <h3 className="font-semibold text-xl leading-6 text-[#437c6d] w-full">
                Visionäre Kinesiologie nach Kinninger®
              </h3>
              <div className="flex flex-col gap-4 w-full">
                <p className="font-normal text-base leading-6 text-[#437c6d]">
                  Zertifizierte Praktikerin für:
                </p>
                <div className="flex flex-col gap-[10px] py-[10px] w-full">
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Erweiterte Muskeltest-Diagnostik
                    </p>
                  </div>
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Energetische Impulsarbeit mit visionärem Fokus
                    </p>
                  </div>
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Visionsentwicklung und Manifestation
                    </p>
                  </div>
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Mind & Soul Map Diagnostik
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AURA-SOMA Card */}
          <div className="bg-white border border-[#437c6d] flex flex-col items-start px-6 py-10 rounded-2xl shadow-xl w-full">
            <div className="flex flex-col min-h-[300px] items-start justify-between w-full">
              <h3 className="font-semibold text-xl leading-6 text-[#437c6d] w-full">
                AURA-SOMA® Practitioner
              </h3>
              <div className="flex flex-col gap-4 w-full">
                <p className="font-normal text-base leading-6 text-[#437c6d]">
                  Zertifizierte Anwendung von:
                </p>
                <div className="flex flex-col gap-[10px] py-[10px] w-full">
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Professioneller Farbberatung
                    </p>
                  </div>
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Equilibrium Bottle Deutung
                    </p>
                  </div>
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Chakra Balance Massage
                    </p>
                  </div>
                  <div className="flex gap-[14px] items-start">
                    <img src="/icons/default_checkmark.svg" alt="" className="w-6 h-6 flex-shrink-0" />
                    <p className="font-normal text-base leading-6 text-[#64748b] flex-1">
                      Pomander und Kristallenergie-Arbeit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="flex flex-col gap-12 items-center px-6 py-12 w-full">
        <div className="flex flex-col gap-6 text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full">
            Mein ganzheitlicher Ansatz
          </h2>
          <p className="font-normal text-base leading-6 text-[#64748b] w-full">
            In meiner Praxis vereinige ich die kraftvollen Methoden der Visionären Kinesiologie mit der heilsamen Farbenergie von AURA-SOMA®. Dieser einzigartige Ansatz ermöglicht es mir, Sie auf allen Ebenen Ihres Seins zu unterstützen und Ihre individuellen Bedürfnisse ganzheitlich zu adressieren.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 items-start justify-center w-full">
          {/* Körperlich */}
          <div className="flex flex-col gap-4 items-center w-[100px]">
            <div className="bg-white flex items-center justify-center p-[10px] rounded-xl shadow-xl w-12 h-12">
              <img src="/icons/body.svg" alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <p className="font-semibold text-base leading-6 text-[#437c6d]">
                Körperlich
              </p>
              <p className="font-normal text-xs leading-4 tracking-[0.18px] text-[#64748b]">
                Energiebalance & Entspannung
              </p>
            </div>
          </div>

          {/* Mental */}
          <div className="flex flex-col gap-4 items-center w-[100px]">
            <div className="bg-white flex items-center justify-center p-[10px] rounded-xl shadow-xl w-12 h-12">
              <img src="/icons/mental.svg" alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <p className="font-semibold text-base leading-6 text-[#437c6d]">
                Mental
              </p>
              <p className="font-normal text-xs leading-4 tracking-[0.18px] text-[#64748b]">
                Klarheit & Visionsfindung
              </p>
            </div>
          </div>

          {/* Spirituell */}
          <div className="flex flex-col gap-4 items-center w-[100px]">
            <div className="bg-white flex items-center justify-center p-[10px] rounded-xl shadow-xl w-12 h-12">
              <img src="/icons/spiritual.svg" alt="" className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center text-center w-full">
              <p className="font-semibold text-base leading-6 text-[#437c6d]">
                Spirituell
              </p>
              <p className="font-normal text-xs leading-4 tracking-[0.18px] text-[#64748b]">
                Bewusstseins-erweiterung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col gap-12 items-center px-6 py-12 w-full">
        <div className="w-full max-w-[337px] rounded-xl overflow-hidden">
          <img
            src="/images/8ef99100-8ef6-4f19-bb9c-b2419c3e5ecb.JPG"
            alt="Meine Mission"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] text-[#437c6d] w-full">
            Meine Mission
          </h2>
          <div className="font-normal text-base leading-6 text-[#64748b] w-full">
            <p className="mb-4">
              Meine Arbeit ist eine psychologische, beratende Tätigkeit außerhalb der Heilkunde. Sie ergänzt medizinische Behandlungen wertvoll und unterstützt Sie bei Ihrer persönlichen Entwicklung und dem Wohlbefinden.
            </p>
            <p>
              Es ist mir eine Herzensangelegenheit, Menschen dabei zu begleiten, ihre authentische Vision zu entdecken, energetische Blockaden zu lösen und ein Leben in Einklang mit ihrer wahren Bestimmung zu führen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-start min-h-[650px] w-full">
        <div className="bg-[rgba(67,124,109,0.1)] flex flex-col w-full">
          <div className="flex flex-col gap-12 items-center px-6 py-6 w-full">
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
              src="/images/2c6b1351-bc0f-4111-8a81-71401c16496c.JPG"
              alt="Transformative Reise"
              className="w-full h-full object-cover"
            />
          </div>
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
        <p className="font-normal text-sm leading-5 tracking-[0.07px] text-[#64748b] text-justify w-full">
          <span className="font-bold">Rechtlicher Hinweis:</span> Carolin Sattler ist keine medizinische Fachkraft und ersetzt keine ärztliche oder heilpraktische Behandlung. Bei gesundheitlichen Anliegen wird dringend geraten, sich an qualifizierte Schulmediziner, Heilpraktiker oder Psychotherapeuten zu wenden. Es ist wichtig, bestehende Behandlungen nicht zu unterbrechen.<br /><br />
          Carolin Sattler bietet psychologische Beratung außerhalb der Heilkunde an und unterliegt nicht der Psychotherapiegesetzgebung. Beachten Sie, dass diese Dienstleistungen keine medizinische oder therapeutische Behandlung ersetzen und in Absprache mit Fachleuten durchgeführt werden sollten.
        </p>
      </footer>
    </main>
  );
}
