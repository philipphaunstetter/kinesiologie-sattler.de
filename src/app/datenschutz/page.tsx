import { MobileNavigation } from '@/components/MobileNavigation';

export default function DatenschutzPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <MobileNavigation />
      
      {/* Content Section */}
      <section className="px-6 py-6 flex flex-col gap-6 w-full">
        <h1 className="font-semibold text-[30px] leading-[30px] tracking-[-0.5px] text-[#437c6d] text-center">
          Datenschutzerklärung
        </h1>
        
        {/* 1. Datenschutz auf einen Blick */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            1. Datenschutz auf einen Blick
          </p>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px] leading-[24px] text-[#020617] text-center">
              Allgemeine Hinweise
            </p>
            <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>
        </div>
        
        {/* 2. Datenerfassung auf dieser Website */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            2. Datenerfassung auf dieser Website
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px] leading-[24px] text-[#020617] text-center">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px] leading-[24px] text-[#020617] text-center">
                Wie erfassen wir Ihre Daten?
              </p>
              <div className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            3. Allgemeine Hinweise und Pflichtinformationen
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px] leading-[24px] text-[#020617] text-center">
                Datenschutz
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px] leading-[24px] text-[#020617] text-center">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4. Datenerfassung auf dieser Website */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            4. Datenerfassung auf dieser Website
          </p>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-[16px] leading-[24px] text-[#020617] text-center">
              Server-Log-Dateien
            </p>
            <div className="font-normal text-[16px] text-[#64748b] text-justify">
              <p className="leading-[24px] mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt:
              </p>
              <ul className="list-disc mb-4 ml-6">
                <li className="leading-[24px]">Browsertyp und Browserversion</li>
                <li className="leading-[24px]">Verwendetes Betriebssystem</li>
                <li className="leading-[24px]">Referrer URL</li>
                <li className="leading-[24px]">Hostname des zugreifenden Rechners</li>
                <li className="leading-[24px]">Uhrzeit der Serveranfrage</li>
                <li className="leading-[24px]">IP-Adresse</li>
              </ul>
              <p className="leading-[24px]">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </div>
          </div>
        </div>
        
        {/* 5. Kontaktformular */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            5. Kontaktformular
          </p>
          <div className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </div>
        </div>
        
        {/* 6. Ihre Rechte */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            6. Ihre Rechte
          </p>
          <div className="flex flex-col gap-4">
            <div className="font-normal text-[16px] text-[#64748b] text-justify">
              <p className="leading-[24px] mb-4">Sie haben jederzeit das Recht:</p>
              <ul className="list-disc ml-6">
                <li className="leading-[24px]">Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li className="leading-[24px]">Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li className="leading-[24px]">Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li className="leading-[24px]">Einschränkung der Datenverarbeitung zu verlangen</li>
                <li className="leading-[24px]">Widerspruch gegen die Verarbeitung einzulegen</li>
                <li className="leading-[24px]">Datenübertragbarkeit zu verlangen</li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[16px] leading-[24px] text-[#020617] text-center">
                Kontakt bei Fragen zum Datenschutz
              </p>
              <p className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an die im Impressum angegebenen Kontaktdaten.
              </p>
            </div>
          </div>
        </div>
        
        {/* 7. SSL- bzw. TLS-Verschlüsselung */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            7. SSL- bzw. TLS-Verschlüsselung
          </p>
          <div className="font-normal text-[16px] leading-[24px] text-[#64748b] text-justify">
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            </p>
            <p>
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>
        </div>
        
        {/* 8. Besondere Kategorien personenbezogener Daten */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[16px] leading-[24px] text-[#437c6d] text-center">
            8. Besondere Kategorien personenbezogener Daten (Gesundheitsdaten)
          </p>
          <div className="font-normal text-[16px] text-[#64748b] text-justify">
            <p className="leading-[24px] mb-4">
              Wichtiger Hinweis: Im Rahmen kinesiologischer Beratungen und Behandlungen können besondere Kategorien personenbezogener Daten, insbesondere Gesundheitsdaten, verarbeitet werden.
            </p>
            <p className="leading-[24px] mb-4">
              Die Verarbeitung erfolgt ausschließlich:
            </p>
            <ul className="list-disc mb-4 ml-6">
              <li className="leading-[24px]">Mit Ihrer ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO)</li>
              <li className="leading-[24px]">Zur Gesundheitsvorsorge oder -behandlung (Art. 9 Abs. 2 lit. h DSGVO)</li>
              <li className="leading-[24px]">Unter strikter Beachtung der ärztlichen Schweigepflicht</li>
            </ul>
            <p className="leading-[24px]">
              Ihre Gesundheitsdaten werden vertraulich behandelt und nicht an Dritte weitergegeben, es sei denn, Sie haben ausdrücklich eingewilligt oder es besteht eine gesetzliche Verpflichtung.
            </p>
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
