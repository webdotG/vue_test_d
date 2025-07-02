const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: 'Home'
    }
  },
  {
    path: '/diamonds',
    name: 'Diamonds',
    component: Diamonds,
    meta: {
      breadcrumb: 'Diamonds'
    }
  },
  {
    path: '/diamonds/search',
    name: 'DiamondSearch',
    component: DiamondSearch,
    meta: {
      breadcrumb: 'Diamond Search'
    }
  },
  {
    path: '/diamonds/:id',
    name: 'DiamondDetail',
    component: DiamondDetail,
    meta: {
      breadcrumb: 'Diamond Detail',
      dynamicBreadcrumb: (params) => `Diamond ${params.id}`
    }
  }
]