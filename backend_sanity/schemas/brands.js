export default {
  name: 'brands',
  title: 'Brads',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
}
