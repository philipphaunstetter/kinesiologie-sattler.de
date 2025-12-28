import { Button } from '@/components/Button';
import { FeatureCard } from '@/components/FeatureCard';
import { MuskelTestTabs } from '@/components/MuskelTestTabs';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-white w-full">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col gap-12 items-center p-6 w-full md:flex-row md:justify-between md:gap-8 lg:p-12">
        <div className="flex flex-col gap-6 items-center text-center w-full md:items-start md:text-left md:w-1/2">
          <h1 className="font-semibold text-[36px] leading-[38px] tracking-[-0.5px] text-[#437c6d] w-full lg:text-[48px] lg:leading-[56px]">
            Für einen starken Körper. Für ein gesundes Leben.
          </h1>
          <p className="font-normal text-lg leading-7 tracking-0 text-[#64748b] w-full">
            Die Kinesiologie kann Ihnen helfen, Ihr körperliches, geistiges und seelisches Wohlbefinden zu verbessern.
          </p>
          <Button className="w-auto">
            Termin vereinbaren
          </Button>
        </div>
        <div className="w-full aspect-[342/369] rounded-xl overflow-hidden md:w-1/2 md:max-w-[500px]">
          <img
            src="/images/29741336-245b-4ca7-9bd4-faf974739611.JPG"
            alt="Kinesiologie Behandlung"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 items-center px-6 py-12 w-full lg:px-12 lg:py-24">
        <h2 className="font-semibold text-[28px] leading-[32px] tracking-0 text-[#437c6d] text-center w-full lg:text-[36px] lg:leading-[44px]">
          Die Säulen der visionären Kinesiologie nach Kinninger®
        </h2>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full max-w-[1200px]">
          <FeatureCard
            icon={<img src="/icons/scale.svg" alt="" className="w-10 h-10" />}
            title="Körperliches Wohlbefinden"
            description="Finden Sie das Gleichgewicht und die Stärke in Ihrem Körper wieder."
          />
          <FeatureCard
            icon={<img src="/icons/pain.svg" alt="" className="w-10 h-10" />}
            title="Schmerzmanagement"
            description="Reduzieren Sie Schmerzen auf natürliche Weise."
          />
          <FeatureCard
            icon={<img src="/icons/chill.svg" alt="" className="w-10 h-10" />}
            title={"Geistige\nEntspannung"}
            description="Erreichen Sie tiefere Entspannung durch gezielte Techniken."
          />
          <FeatureCard
            icon={<img src="/icons/emotion.svg" alt="" className="w-10 h-10" />}
            title={"Befreiende\nEmotionsarbeit"}
            description="Verarbeiten Sie Emotionen und finden Sie innere Balance."
          />
          <FeatureCard
            icon={<img src="/icons/growth.svg" alt="" className="w-10 h-10" />}
            title={"Persönliches\nWachstum"}
            description="Entdecken Sie Ihr Potenzial und wachsen Sie persönlich."
          />
        </div>
      </section>

      {/* Muskeltest Section */}
      <section className="flex flex-col gap-6 items-start px-0 py-12 w-full">
        <div className="flex flex-col gap-12 items-center px-6 text-center w-full">
          <h2 className="font-semibold text-[28px] leading-[32px] tracking-0 text-[#437c6d] w-full">
            Muskeltest – Die transformative Kraft der Kinesiologie
          </h2>
          <p className="font-normal text-lg leading-7 tracking-0 text-[#64748b] w-full">
            Tauchen Sie ein in die faszinierende Welt des Muskeltests und erleben Sie die transformative Wirkung der visionären Kinesiologie nach Kinninger®
          </p>
        </div>
        <MuskelTestTabs />
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-start min-h-[650px] w-full lg:min-h-auto">
        <div className="bg-[#437c6d] flex flex-col w-full lg:flex-row-reverse lg:items-center">
          <div className="h-[300px] w-full overflow-hidden lg:h-[500px] lg:w-1/2">
            <img
              src="/images/35c30a8d-3151-4994-b3c1-fe48d195f665.JPG"
              alt="Transformation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-12 items-center px-6 py-12 w-full lg:w-1/2 lg:p-24 lg:items-start lg:text-left">
            <h2 className="font-semibold text-[28px] leading-[32px] tracking-0 text-[#f8fafc] w-full lg:text-[36px] lg:leading-[44px]">
              Bereit für Ihre persönliche Transformation?
            </h2>
            <p className="font-normal text-lg leading-7 tracking-0 text-[#f8fafc] w-full">
              Entdecken Sie die transformative Kraft der Kinesiologie und beginnen Sie noch heute Ihren Weg zu mehr Wohlbefinden, Balance und Lebensenergie.
            </p>
            <Button variant="secondary" className="w-full md:w-auto">
              Jetzt Termin vereinbaren
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col gap-12 items-start p-6 w-full">
        <div className="flex flex-col gap-12 items-center text-center w-full">
          <h2 className="font-semibold text-[28px] leading-[32px] tracking-0 text-[#437c6d] w-full">
            Lassen Sie uns Ihre Energie finden
          </h2>
          <p className="font-normal text-lg leading-7 tracking-0 text-[#64748b] w-full">
            Investieren Sie in Ihr Wohlbefinden mit einer professionellen kinesiologischen Sitzung.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:flex-row md:justify-center md:items-stretch max-w-[1000px] mx-auto">
          {/* Single Session */}
          <div className="border border-[#437c6d] flex flex-col gap-10 p-6 rounded-lg w-full md:w-1/2">
            <div className="flex flex-col gap-[10px] items-center w-full">
              <p className="font-semibold text-base leading-6 tracking-0 text-black text-center">
                Einzelsitzung
              </p>
              <div className="flex gap-[10px] items-end justify-center">
                <p className="font-semibold text-3xl leading-9 tracking-0 text-[#437c6d]">
                  100€
                </p>
                <p className="font-semibold text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  / Sitzung
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  Individuelle Behandlung
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  Ausführliches Nachgespräch
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  Persönliche Empfehlungen
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  Behandlungsplanung
                </p>
              </div>
            </div>
            <Button className="w-full">
              Jetzt Termin buchen
            </Button>
          </div>

          {/* 10-Card Package */}
          <div className="bg-[rgba(67,124,109,0.05)] border border-[#437c6d] flex flex-col gap-10 p-6 rounded-lg w-full md:w-1/2">
            <div className="flex flex-col gap-[10px] items-center w-full">
              <p className="font-semibold text-base leading-6 tracking-0 text-black text-center">
                10er Karte
              </p>
              <div className="flex gap-[10px] items-end justify-center">
                <p className="font-semibold text-3xl leading-9 tracking-0 text-[#437c6d]">
                  950€
                </p>
                <p className="font-semibold text-base leading-6 tracking-[0.07px] text-[#64748b] line-through">
                  1000€
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  10 Einzelsitzungen
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  Flexible Terminplanung
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  24 Monate gültig
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img src="/icons/pricing_checkmark.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                  50€ Ersparnis
                </p>
              </div>
            </div>
            <Button className="w-full">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>

        <p className="font-normal text-sm leading-5 tracking-[0.18px] text-[#64748b] text-center w-full">
          <span className="font-bold">Rechtlicher Hinweis:</span> Carolin Sattler bietet psychologische Beratung außerhalb der Heilkunde an. Diese Dienstleistungen ersetzen keine medizinische oder therapeutische Behandlung. Bei gesundheitlichen Anliegen konsultieren Sie bitte qualifizierte Fachkräfte.
        </p>
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
