export default {
  name: 'arbeidskrav',
  title: 'Arbeidskrav',
  type: 'document',
  fields: [
    {
      name: 'number',
      title: 'Nummer',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    },
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}