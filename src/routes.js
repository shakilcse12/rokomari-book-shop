export const ROUTES = {
    HOME: '/',
    FAQ: '/faq',
    ABOUT: '/about',
    BLOG: '/blog',
    SINGLE_BOOK: {
      STATIC: '/book/:id', 
      DYNAMIC: (bookId) => `/book/${bookId}`,
    },
    NOT_FOUND: '*',
  };
  