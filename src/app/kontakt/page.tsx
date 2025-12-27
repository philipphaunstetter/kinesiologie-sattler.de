import { MobileNavigation } from '@/components/MobileNavigation';

export default function KontaktPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <MobileNavigation />
      
      {/* Hero Section */}
      <section className="w-full">
        <div className="w-full h-[586px] relative">
          <img
            src="/images/af1e7185-a57d-4842-93fa-96c2b2530481.JPG"
            alt="Carolin Sattler Kinesiologie"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-6 flex flex-col gap-6">
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
            <p className="flex-1">Impressum</p>
            <p className="flex-1">Datenschutz</p>
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
