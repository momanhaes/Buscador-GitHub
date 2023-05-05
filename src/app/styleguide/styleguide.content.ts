export enum ETema {
  DARK = 'Dark',
  LIGHT = 'Light',
}

export interface IContent {
  route: string;
  icon: string;
  label: string;
}

export const STYLEGUIDE_CONTENT: IContent[] = [
  {
    route: '/styleguide/typography',
    icon: 'fa fa-font',
    label: 'Typography',
  },
  {
    route: '/styleguide/colors',
    icon: 'fa fa-paint-brush',
    label: 'Colors',
  },
  {
    route: '/styleguide/inputs',
    icon: 'fa fa-keyboard-o',
    label: 'Inputs',
  },
  {
    route: '/styleguide/buttons',
    icon: 'fa fa-toggle-off',
    label: 'Buttons',
  },
  {
    route: '/styleguide/tables',
    icon: 'fa fa-table',
    label: 'Tables',
  },
  {
    route: '/styleguide/items',
    icon: 'fa fa-server',
    label: 'Items',
  },
  {
    route: '/styleguide/icons',
    icon: 'fa fa-smile-o',
    label: 'Icons',
  },
  {
    route: '/styleguide/pipes',
    icon: 'fa fa-money',
    label: 'Pipes',
  },
];
