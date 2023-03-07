import { APP_ROUTES } from './appRoutes';

export const routes = [
  {
    href: APP_ROUTES.blog,
    component: '<blog-page></blog-page>',
  },
  {
    href: APP_ROUTES.cart,
    component: '<cart-page></cart-page>',
  },
  {
    href: APP_ROUTES.catalog,
    component: '<catalog-page></catalog-page>',
  },
  {
    href: APP_ROUTES.contacts,
    component: '<cantacts-page></cantacts-page>',
  },
  {
    href: APP_ROUTES.product,
    component: '<product-page></product-page>',
  },
];
