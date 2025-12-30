import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'HOME',
      href: '/',
    },
    {
      text: 'SOBRE',
      href: '#sobre',
    },
    {
      text: 'ACADÊMICO',
      href: '#academico',
    },
    {
      text: 'PROJETOS',
      href: '#projetos',
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/guricartee', target: '_blank' }],
};
export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/guricartee' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/guricartee"> Gustavo Ricarte</a> · All rights reserved.
  `,
};
