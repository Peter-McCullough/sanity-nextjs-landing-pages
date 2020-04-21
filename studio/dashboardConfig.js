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
                  buildHookId: '5e9f20982d5918c790980014',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qhw6a2cs',
                  apiId: '067ea756-66d8-442d-aa9e-b6d3bac09278'
                },
                {
                  buildHookId: '5e9f209895ede4ce6c79112b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-teq5rnjn',
                  apiId: 'bf37b42f-a355-426b-a5b9-dd18ec71f6d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Peter-McCullough/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-teq5rnjn.netlify.app', category: 'apps'}
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
