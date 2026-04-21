// Schema for "Arbeidskrav" documents in Sanity
const arbeidskrav = {
  name: "arbeidskrav", // Internt navn brukt i groq-spørringer
  title: "Arbeidskrav", // Navn som vises i Sanity
  type: "document", // Dokument betyr at hvert arbeidskrav er et eget dokument i Sanity
  
  // Feltene som brukeren fyller ut i Sanity
  fields: [
    {
      // Nummeret på arbeidskravet
      name: "number",
      title: "Nummer",
      type: "number",

      // Validering for å sikre at nummeret er påkrevd, positivt og et heltall 
      // Kilde: https://www.sanity.io/docs/studio/validation
      validation: (Rule) => Rule.required().positive().integer(),
    },
    {
      // Tittelen på arbeidskravet
      name: "title",
      title: "Tittel",
      type: "string",

      // Validering for å sikre at tittelen er påkrevd
      validation: (Rule) => Rule.required(),
    },
    {
      // Beskrivelsen av arbeidskravet
      name: "description",
      title: "Kort beskrivelse",
      type: "text",

      // Høyden på tekstfeltet i Sanity
      rows: 4,

      // Validering for å sikre at beskrivelsen er påkrevd
      validation: (Rule) => Rule.required(),
    },
  ],

  // Bestemmer hvordan dokumentet vises i oversikten i Sanity
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
}

// Eksporterer schemaet slik at det kan brukes i Sanity
export default arbeidskrav