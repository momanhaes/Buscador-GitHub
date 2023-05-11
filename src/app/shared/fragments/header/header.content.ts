export enum ETema {
  DARK = 'Dark',
  LIGHT = 'Light',
}

export interface IContent {
  route: string;
  icon: string;
  label: string;
}

export const HEADER_CONTENT: IContent[] = [
  {
    route: '/home',
    icon: 'fa fa-home',
    label: 'Início',
  },
  {
    route: '/styleguide',
    icon: 'fa fa-paint-brush',
    label: 'Styleguide',
  },
  {
    route: '/gh-search',
    icon: 'fa fa-github',
    label: 'GitHub Search',
  },
];
