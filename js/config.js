let respecConfig = {
  useLogo: true,
  useLabel: true,

  // TODO: title is verplicht! Neem hieronder de titel van het document op
  title: "NEN 3610-2022 Ontologie",
  //-- specStatus is verplicht! (activeer 1 van de volgende)
  specStatus: "wv",                 // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document

  //-- specType is verplicht bij alle andere dan BASIS
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice

  //-- pubDomain is verplicht! (komt in de URL)
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  //-- TODO: vul pubDomain in
  pubDomain: "nen3610-2022",

  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding

  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)
  //-- Regel: shortName mag geen hoofdletters bevatten.
  shortName: "nen3610-2022",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht. Als je werkversie gekozen hebt  dan pakt Respec
  //-- de pushdate maar de publishDate is nog steeds verplicht.
  publishDate: "2026-02-09",
  
  //-- publishVersion is verplicht. Hij mag wel leeg zijn [], maar niet de lege string zijn "".
  publishVersion: [],
 
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beide aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",

  //-- Deze gebruiken we niet binnen Geonovum
  //prevVersion: "0.0.1",

  //-- TODO: de namen van de Editor(s) / Redacteur(en)
  //-- vul in: per Editor: name:, company:, companyURL:
  editors:
  [
    {
      name:       "Paul Janssen",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    },
  ],

  //-- de namen van de auteur(s) 
  //-- vul in: per auteur: name:, company:, companyURL: 
  authors:
    [
      {
        name: "voornaam achternaam",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],

  // TODO: Vul de github URL in.
  // neem hier de URL van de github repository op waar het respec document in staat
  // dit zorgt voor het 'Doe mee:' onderdeel in het voorblad van de publicatie.
 github: "https://github.com/Geonovum/nen3610-ontologie",

  postProcess: [
    ...(organisationConfig.postProcess ?? []),
    localizeGitHubHeaderLinks
  ],

  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //        uri: "static/template.pdf",
  //    },
  //],

  //
  // Lokale lijst voor bibliografie
  // - Kijk eerst naar de beschikbare www.specref.org .
  // - Kijk daarna in de organisatieconfig op: https://tools.geostandaarden.nl/specref/
  // - Voeg dan pas hieronder toe.
  // - Zie handleiding: https://geonovum.github.io/handleiding-tooling/ReSpec/ReSpec-onderdelen/#bibliografie
  //
 localBiblio:
  {
    "MDA":
    {
      title:      "Model Driven Architecture (MDA) Guide",
      href:       "",
      status:     "rev. 2.0, 1-6-2014",
      publisher:  "",
      company:    "Object Management Group",
    },
    "UML":
    {
      title:      "Unified Modeling Language (UML)",
      href:       "http://uml.org",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "ODM":
    {
      title:      "Ontology Definition Metamodel",
      href:       "https://www.omg.org/spec/ODM/1.1",
      status:     "versie 1.1, September 2014",
      publisher:  "",
      company:    "Object Management Group",
    },
    "OMG":
    {
      title:      "OMG Unified Modeling Language TM",
      href:       "http://www.omg.org/spec/UML/2.5",
      status:     "versie 2.5",
      publisher:  "",
      company:    "",
    },
    "SCAT":
    {
      title:      "Stelselcatalogus",
      href:       "http://www.stelselcatalogus.nl",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "GAB":
    {
      title:      "GAB",
      href:       "https://www.noraonline.nl/wiki/Gemeenschappelijke_Afspraken_Berichten",
      status:     "",
      publisher:  "",
      company:    "",
    },
	"Linked-Data":
    {
      title:      "Linked Data",
      href:       "https://www.noraonline.nl/wiki/Linked_Data",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "iso-8601":
    {
      title:      "Representation of dates and times. ISO 8601:2004.",
      href:       "http://www.iso.org/iso/catalogue_detail?csnumber=40874",
      publisher:  "International Organization for Standardization (ISO)",
      date:       "2004",
      status:     "ISO 8601:2004",
    },
    "NORA":
    {
      title:      "Handreiking gegevensbeschrijving (NORA)",
      href:       "http://noraonline.nl/wiki/Gegevensbeschrijvingen/Handreiking",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "iso-11404":
    {
      title:      "11404:2008 Information technology – General Purpose Datatypes (GPD)",
      href:       "https://www.nen.nl/nen-iso-iec-11404-2008-en-122652",
      status:     "",
      publisher:  "",
      company:    "NEN-ISO/IEC",
    },
    "REGEXP":
    {
      title:      "Formeel patroon (Reguliere Expressies)",
      href:       "http://perldoc.perl.org/perlre.html",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "OCL":
    {
      title:      "OCL",
      href:       "http://www.omg.org/spec/OCL/2.4/",
      status:     "",
      publisher:  "",
      company:    "",
    },
    "NEN3610":
    {
      title:      "NEN-3610 Basismodel geo-informatie",
      href:       "https://www.nen.nl/nen-3610-2011-a1-2016-nl-217738",
      date:       "Mei 2016",
      publisher:  "NEN",
    },
	 "GeoJSON":
    {
      title:      "GeoJSON",
      href:       "https://geojson.org/",
      publisher:  "",
      status:     "",
      company:    "",
    },
	 "SOAP":
    {
      title:      "SOAP Specifications",
      href:       "https://www.w3.org/TR/SOAP/",
      publisher:  "",
      status:     "",
      company:    "",
    },
  },
};

function localizeGitHubHeaderLinks(_config, document) {
  if (document.documentElement.lang !== "nl") {
    return;
  }

  const issueLink = document.querySelector(
    '.head dl a[href$="/issues/"], .head dl a[href$="/issues"]'
  );
  if (issueLink) {
    issueLink.textContent = "Alle issues";
  }
}
