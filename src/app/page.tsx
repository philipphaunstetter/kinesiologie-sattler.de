import { Button } from '@/components/Button';
import { FeatureCard } from '@/components/FeatureCard';
import { ScaleIcon, BoneIcon, SofaIcon, LaughIcon, SproutIcon, CheckIcon } from '@/components/Icons';

export default function Home() {
  return (
    <main className="bg-white w-full">
      {/* Hero Section */}
      <section className="flex flex-col gap-12 items-center p-6 w-full">
        <div className="flex flex-col gap-6 items-center text-center w-full">
          <h1 className="font-semibold text-[30px] leading-[30px] tracking-[-0.5px] text-[#437c6d] w-full">
            Für einen starken Körper. Für ein gesundes Leben.
          </h1>
          <p className="font-normal text-base leading-6 tracking-0 text-[#64748b] w-full">
            Die Kinesiologie kann Ihnen helfen, Ihr körperliches, geistiges und seelisches Wohlbefinden zu verbessern.
          </p>
        </div>
        <Button className="w-auto">
          Termin vereinbaren
        </Button>
        <div className="w-full aspect-[342/369] rounded-xl overflow-hidden bg-gray-200">
          {/* Hero Image Placeholder */}
          <div className="w-full h-full flex items-center justify-center text-[#64748b]">
            Hero Image
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 items-center px-6 py-12 w-full">
        <h2 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center w-full">
          Die Säulen der visionären Kinesiologie nach Kinninger®
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-12 w-full">
          <FeatureCard
            icon={<ScaleIcon />}
            title="Körperliches Wohlbefinden"
            description="Finden Sie das Gleichgewicht und die Stärke in Ihrem Körper wieder."
          />
          <FeatureCard
            icon={<BoneIcon />}
            title="Schmerzmanagement"
            description="Reduzieren Sie Schmerzen auf natürliche Weise."
          />
          <FeatureCard
            icon={<SofaIcon />}
            title={"Geistige\nEntspannung"}
            description="Erreichen Sie tiefere Entspannung durch gezielte Techniken."
          />
          <FeatureCard
            icon={<LaughIcon />}
            title={"Befreiende\nEmotionsarbeit"}
            description="Verarbeiten Sie Emotionen und finden Sie innere Balance."
          />
          <FeatureCard
            icon={<SproutIcon />}
            title={"Persönliches\nWachstum"}
            description="Entdecken Sie Ihr Potenzial und wachsen Sie persönlich."
          />
        </div>
      </section>

      {/* Muskeltest Section */}
      <section className="flex flex-col gap-6 items-start px-0 py-12 w-full">
        <div className="flex flex-col gap-12 items-center px-6 text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] w-full">
            Muskeltest – Die transformative Kraft der Kinesiologie
          </h2>
          <p className="font-normal text-base leading-6 tracking-0 text-[#64748b] w-full">
            Tauchen Sie ein in die faszinierende Welt des Muskeltests und erleben Sie die transformative Wirkung der visionären Kinesiologie nach Kinninger®
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {/* Tabs */}
          <div className="bg-white overflow-x-auto px-6 py-[10px] w-full scrollbar-hide">
            <div className="flex gap-5 items-center whitespace-nowrap">
              <div className="flex flex-col gap-[2px]">
                <p className="font-medium text-sm leading-[21px] tracking-[0.07px] text-[#437c6d] text-center">
                  Muskeltest-Techniken
                </p>
                <div className="h-[1px] bg-[#437c6d] w-full" />
              </div>
              <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b] text-center">
                Energiefluß-Balance
              </p>
              <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b] text-center">
                Strukturelle Anpassung
              </p>
              <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b] text-center">
                Emotionaler Stressabbau
              </p>
              <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b] text-center">
                Selbstentwicklung & Zielsetzung
              </p>
              <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b] text-center">
                Mind-Body-Integration
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="px-6">
            <div className="bg-[rgba(67,124,109,0.05)] flex flex-col gap-12 p-4 rounded-lg">
              <p className="font-semibold text-base leading-6 tracking-0 text-[#437c6d]">
                Harmonie von Innen:<br />
                Balance des Energieflusses
              </p>
              <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                Durch das harmonische Ausbalancieren des Energieflusses wird das Gleichgewicht von Körper und Geist gefördert. Erleben Sie, wie Kinesiologie Ihnen hilft, in Ihre innere Mitte zurückzufinden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-start min-h-[650px] w-full">
        <div className="bg-[#437c6d] flex flex-col w-full">
          <div className="h-[300px] w-full bg-gray-300 flex items-center justify-center text-white">
            {/* CTA Background Image Placeholder */}
            CTA Image
          </div>
          <div className="flex flex-col gap-12 items-center px-6 py-12 w-full">
            <h2 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#f8fafc] w-full">
              Bereit für Ihre persönliche Transformation?
            </h2>
            <p className="font-normal text-base leading-6 tracking-0 text-[#f8fafc] w-full">
              Entdecken Sie die transformative Kraft der Kinesiologie und beginnen Sie noch heute Ihren Weg zu mehr Wohlbefinden, Balance und Lebensenergie.
            </p>
            <Button variant="secondary" className="w-full">
              Jetzt Termin vereinbaren
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col gap-12 items-start p-6 w-full">
        <div className="flex flex-col gap-12 items-center text-center w-full">
          <h2 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] w-full">
            Lassen Sie uns Ihre Energie finden
          </h2>
          <p className="font-normal text-base leading-6 tracking-0 text-[#64748b] w-full">
            Investieren Sie in Ihr Wohlbefinden mit einer professionellen kinesiologischen Sitzung.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full">
          {/* Single Session */}
          <div className="border border-[#437c6d] flex flex-col gap-10 p-6 rounded-lg w-full">
            <div className="flex flex-col gap-[10px] items-center w-full">
              <p className="font-semibold text-base leading-6 tracking-0 text-black text-center">
                Einzelsitzung
              </p>
              <div className="flex gap-[10px] items-end justify-center">
                <p className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d]">
                  100€
                </p>
                <p className="font-semibold text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  / Sitzung
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  Individuelle Behandlung
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  Ausführliches Nachgespräch
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  Persönliche Empfehlungen
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  Behandlungsplanung
                </p>
              </div>
            </div>
            <Button className="w-full">
              Jetzt Termin buchen
            </Button>
          </div>

          {/* 10-Card Package */}
          <div className="bg-[rgba(67,124,109,0.05)] border border-[#437c6d] flex flex-col gap-10 p-6 rounded-lg w-full">
            <div className="flex flex-col gap-[10px] items-center w-full">
              <p className="font-semibold text-base leading-6 tracking-0 text-black text-center">
                10er Karte
              </p>
              <div className="flex gap-[10px] items-end justify-center">
                <p className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d]">
                  950€
                </p>
                <p className="font-semibold text-sm leading-[21px] tracking-[0.07px] text-[#64748b] line-through">
                  1000€
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  10 Einzelsitzungen
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  Flexible Terminplanung
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  24 Monate gültig
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <CheckIcon />
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  50€ Ersparnis
                </p>
              </div>
            </div>
            <Button className="w-full">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>

        <p className="font-normal text-xs leading-4 tracking-[0.18px] text-[#64748b] text-center w-full">
          <span className="font-bold">Rechtlicher Hinweis:</span> Carolin Sattler bietet psychologische Beratung außerhalb der Heilkunde an. Diese Dienstleistungen ersetzen keine medizinische oder therapeutische Behandlung. Bei gesundheitlichen Anliegen konsultieren Sie bitte qualifizierte Fachkräfte.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 p-6 w-full">
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center">
            Navigation
          </h3>
          <div className="flex flex-col gap-1 font-normal text-base leading-6 tracking-0 text-[#64748b] text-center w-full">
            <p>Start</p>
            <p>Über mich</p>
            <p>Leistungen</p>
            <p>Kontakt</p>
            <p>AURA-SOMA®</p>
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
            <p className="flex-1">Impressum</p>
            <p className="flex-1">Datenschutz</p>
          </div>
        </div>
        <p className="font-normal text-sm leading-4 tracking-[0.07px] text-[#64748b] text-justify w-full">
          <span className="font-bold">Rechtlicher Hinweis:</span> Carolin Sattler ist keine medizinische Fachkraft und ersetzt keine ärztliche oder heilpraktische Behandlung. Bei gesundheitlichen Anliegen wird dringend geraten, sich an qualifizierte Schulmediziner, Heilpraktiker oder Psychotherapeuten zu wenden. Es ist wichtig, bestehende Behandlungen nicht zu unterbrechen.<br /><br />
          Carolin Sattler bietet psychologische Beratung außerhalb der Heilkunde an und unterliegt nicht der Psychotherapiegesetzgebung. Beachten Sie, dass diese Dienstleistungen keine medizinische oder therapeutische Behandlung ersetzen und in Absprache mit Fachleuten durchgeführt werden sollten.
        </p>
      </footer>
    </main>
  );
}
