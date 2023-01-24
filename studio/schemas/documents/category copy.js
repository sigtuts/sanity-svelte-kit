import {TagIcon} from '@sanity/icons'

export default {
  name: 'category2',
  type: 'document',
  icon: TagIcon,
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
