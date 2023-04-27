export interface IHome {
  theme: string;
  label: string;
  icon: string;
  route: string;
  isExternal: boolean;
}

export const HOME: IHome[] = [
  // {
  //   theme: 'outline',
  //   label: 'Site Pessoal',
  //   icon: 'fa fa-user-circle',
  //   route: 'mmanhaes.com.br',
  //   isExternal: true,
  // },
  {
    theme: 'primary',
    label: 'GitHub Search',
    icon: 'fa fa-github',
    route: '/gh-search',
    isExternal: false,
  },
  // {
  //   theme: 'outline',
  //   label: 'JS Vanilla GitHub Search',
  //   icon: 'fa fa-github-square',
  //   route: 'mmanhaes-jsgh-search.netlify.app',
  //   isExternal: true,
  // },
  // {
  //   theme: 'outline',
  //   label: 'Gerenciador de Figurinhas',
  //   icon: 'fa fa-sticky-note',
  //   route: 'gerenciador-figurinhas.netlify.app',
  //   isExternal: true,
  // },
  // {
  //   theme: 'outline',
  //   label: 'Wedding Site',
  //   icon: 'fa fa-diamond',
  //   route: 'casamentomem.netlify.app',
  //   isExternal: true,
  // },
  // {
  //   theme: 'outline',
  //   label: 'Calculadora',
  //   icon: 'fa fa-calculator',
  //   route: 'mmanhaes-calculadora.netlify.app',
  //   isExternal: true,
  // },
  // {
  //   theme: 'outline',
  //   label: 'To Do List',
  //   icon: 'fa fa-list-ul',
  //   route: 'mmanhaes-todolist.netlify.app',
  //   isExternal: true,
  // },
  // {
  //   theme: 'outline',
  //   label: 'CRUD Produtos',
  //   icon: 'fa fa-plus-square',
  //   route: 'mmanhaes-crud-produtos.netlify.app',
  //   isExternal: true,
  // },
];
