export interface ISocialContent {
  link: string;
  color: string;
  svg: string;
  tooltip: string;
}

export const SOCIAL_CONTENT: ISocialContent[] = [
  {
    link: 'https://www.linkedin.com/in/mmanhaes/',
    color: 'primary',
    svg: '/assets/svgs/linkedin.svg',
    tooltip: 'LinkedIn',
  },
  {
    link: 'https://github.com/momanhaes',
    color: 'primary',
    svg: '/assets/svgs/github.svg',
    tooltip: 'GitHub',
  },
  {
    link: 'https://twitter.com/momanhaes',
    color: 'primary',
    svg: '/assets/svgs/twitter.svg',
    tooltip: 'Twitter',
  },
  {
    link: 'https://www.facebook.com/momanhaes',
    color: 'primary',
    svg: '/assets/svgs/facebook.svg',
    tooltip: 'Facebook',
  },
  {
    link: 'https://www.instagram.com/manhaesdev/',
    color: 'primary',
    svg: '/assets/svgs/instagram.svg',
    tooltip: 'Instagram',
  },
];
