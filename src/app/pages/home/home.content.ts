export interface IHome {
  theme: string;
  label: string;
  icon: string;
  route: string;
  isExternal: boolean;
}

export const HOME: IHome[] = [
  {
    theme: 'outline',
    label: 'Portfolio',
    icon: 'fa fa-user-circle mr-2',
    route: 'mmanhaes.com.br',
    isExternal: true,
  },
  {
    theme: 'outline',
    label: 'GitHub Search',
    icon: 'fa fa-github mr-2',
    route: '/gh-search',
    isExternal: false,
  },
  {
    theme: 'outline',
    label: 'Gerenciador de Figurinhas',
    icon: 'fa fa-sticky-note mr-2',
    route: 'gerenciador-figurinhas.netlify.app',
    isExternal: false,
  },
];
