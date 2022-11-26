export interface IButton {
  theme: string;
  label: string;
  disabled: boolean;
  code: string;
  icon?: string;
}

export const BUTTONS: IButton[] = [
  {
    theme: 'primary',
    label: 'Primary',
    disabled: false,
    code: '<app-button [theme]="primary" [label]="Primary" [disabled]="false"></app-button>',
  },
  {
    theme: 'custom',
    label: 'Custom',
    disabled: false,
    code: '<app-button [theme]="custom" [label]="Custom" [disabled]="false"></app-button>',
  },
  {
    theme: 'primary',
    label: 'Primary Icon',
    disabled: false,
    code: '<app-button [theme]="primary" [label]="Primary Icon" [disabled]="false" [icon]="fa fa-mouse-pointer"></app-button>',
    icon: 'fa fa-mouse-pointer'
  },
  {
    theme: 'outline',
    label: 'Outline Icon',
    disabled: false,
    code: '<app-button [theme]="outline" [label]="Outline Icon" [disabled]="false" [icon]="fa fa-mouse-pointer"></app-button>',
    icon: 'fa fa-mouse-pointer'
  },
  {
    theme: 'cancel',
    label: 'Cancel',
    disabled: false,
    code: '<app-button [theme]="cancel" [label]="Cancel" [disabled]="false"></app-button>',
  },
  {
    theme: 'outline',
    label: 'Outline',
    disabled: false,
    code: '<app-button [theme]="outline" [label]="Outline" [disabled]="false"></app-button>',
  },
  {
    theme: 'primary-disabled',
    label: 'Primary Disabled',
    disabled: true,
    code: '<app-button [theme]="primary-disabled" [label]="Primary Disabled" [disabled]="true"></app-button>',
  },
  {
    theme: 'outline',
    label: 'Outline Disabled',
    disabled: true,
    code: '<app-button [theme]="outline" [label]="Outline Disabled" [disabled]="true"></app-button>',
  },
];
