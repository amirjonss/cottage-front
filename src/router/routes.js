
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomePage'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/cottage',
    component: () => import('pages/CottagePage.vue')
  }
]

export default routes
