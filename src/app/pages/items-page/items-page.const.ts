export interface IItems { label: string; value: string | number; type: string; }

export const ITEMS: IItems[] = [
    {
        label: 'Standard',
        value: 'Valor sem formatação',
        type: 'standard'
    },
    {
        label: 'Currency',
        value: '1000',
        type: 'currency'
    },
    {
        label: 'CPF',
        value: '99999999999',
        type: 'cpf'
    },
    {
        label: 'CNPJ',
        value: '99999999999999',
        type: 'cnpj'
    },
    {
        label: 'Account',
        value: 1234180343,
        type: 'account'
    },
    {
        label: 'Percent',
        value: .1,
        type: 'percent'
    },
];
