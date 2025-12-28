import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function KontaktPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full max-w-[1440px] mx-auto">
      
      {/* Hero Section */}
      <section className="w-full py-6 lg:py-24">
        <div className="container-responsive px-6">
          <div className="w-full h-[586px] relative rounded-xl overflow-hidden">
          <img
            src="/images/af1e7185-a57d-4842-93fa-96c2b2530481.JPG"
            alt="Carolin Sattler Kinesiologie"
            className="w-full h-full object-cover"
          />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-12 lg:py-20 flex flex-col gap-6 lg:gap-10">
        <div className="container-responsive px-6 max-w-[800px] mx-auto">
          <h1 className="font-semibold text-[30px] leading-[30px] tracking-[-0.5px] text-[#437c6d] text-center">
          Lassen Sie uns Ihre Reise besprechen
        </h1>
        
        <div className="flex flex-col gap-4 text-[16px] leading-[24px] text-center">
          <p className="text-[#64748b]">
            Der beste Weg zu mehr Balance beginnt mit einer Nachricht.
          </p>
          
          <p className="text-[#64748b]">
            Um mich in meinen Sitzungen voll und ganz auf meine Klienten konzentrieren zu können, ist mein Telefon meist lautlos. Der einfachste und schnellste Weg zu mir führt daher über mein E-Mail-Postfach.
          </p>
          
          <p className="text-[#64748b]">
            Schreiben Sie mir gerne kurz, worum es geht. Ich sichte meine Mails in Ruhe (meist abends) und melde mich verlässlich bei Ihnen zurück.
          </p>
          
          <a 
            href="mailto:kontakt@kinesiologie-sattler.de"
            className="font-semibold text-[#437c6d] hover:underline"
          >
            kontakt@kinesiologie-sattler.de
          </a>
        </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className="bg-[rgba(67,124,109,0.1)] flex flex-col gap-12 py-12 w-full">
        <div className="container-responsive px-6">
          <div className="flex flex-col md:flex-row md:justify-between gap-12 w-full">
            <div className="flex flex-col gap-6 items-center md:items-start flex-1">
              <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center md:text-left">
                Navigation
              </h3>
              <div className="flex flex-col gap-1 font-normal text-base leading-6 tracking-0 text-[#64748b] text-center md:text-left">
            <a href="/">Start</a>
            <a href="/ueber-mich">Über mich</a>
            <a href="/leistungen">Leistungen</a>
            <a href="/kontakt">Kontakt</a>
            <a href="/aura-soma">AURA-SOMA®</a>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center md:items-start flex-1">
              <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center md:text-left">
                Leistungen
              </h3>
              <div className="flex flex-col gap-1 font-normal text-base leading-6 tracking-0 text-[#64748b] text-center md:text-left">
            <p>Körperliches Wohlbefinden</p>
            <p>Schmerzmanagement</p>
            <p>Geistige Entspannung</p>
            <p>Emotionsarbeit</p>
            <p>Persönliches Wachstum</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center md:items-start flex-1">
              <h3 className="font-semibold text-2xl leading-[28.8px] tracking-0 text-[#437c6d] text-center md:text-left">
                Kontakt
              </h3>
              <div className="flex flex-col gap-1 text-base leading-6 tracking-0 text-center md:text-left">
            <p className="font-normal text-[#64748b]">
              Terminvereinbarung nach Absprache
            </p>
            <a href="mailto:kontakt@kinesiologie-sattler.de" className="font-bold text-[#437c6d]">
              Jetzt Termin vereinbaren →
            </a>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-gray-300 w-full mt-6" />
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
          <div className="font-normal text-sm leading-5 tracking-[0.07px] text-[#64748b] text-justify w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>
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
