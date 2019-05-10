export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd54b5f68eec6aa0a930537',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pagesqweqw-studio',
                  apiId: '6053d5eb-7211-403e-9dab-f1dbf8d2b55c'
                },
                {
                  buildHookId: '5cd54b5f374bf5c6d7df2f0b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pagesqweqw',
                  apiId: 'bd960fbb-11b4-4f5e-ab31-05159ff39ed2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pagesqweqw',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pagesqweqw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
