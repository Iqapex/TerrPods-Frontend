// src/config/menuConfig.ts
export const navItems = [
   { name: "Home", path: "/" },
  {
    name: 'About',
    subMenu: [
      { name: 'Mission', path: '/about/mission' },
      { name: 'Team', path: '/about/team' },
      { name: 'Partners', path: '/about/partners' },
    ],
  },
  {
    name: 'Programmes',
    path: '/programmes',
  },
  {
    name: 'Events',
    subMenu: [
      { name: 'Calendar', path: '/events/calendar' },
    ],
  },
  {
    name: 'Membership & FAQs',
    path: '/membership',
  },
  {
    name: 'Media',
    subMenu: [
      { name: 'News', path: '/news' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  {
    name: 'Donate',
    path: '/donate',
  },
  {
    name: 'Login',
    path: '/login',
  },
];
