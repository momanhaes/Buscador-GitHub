export interface IInput {
  name: string;
  code: string;
  control: string;
}

export const INPUTS: IInput[] = [
  {
    name: 'Standard',
    code: '<app-input [form]="form" label="Padrão" type="text" control="appInput" [required]="false" placeholder="Input padrão"></app-input>',
    control: 'appInput',
  },
];
