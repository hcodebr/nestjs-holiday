export interface Holiday {
    id: string;
    name: string;
    date: Date;
    type: HolidaysType;
}

export enum HolidaysType {
    NACIONAL = 'NACIONAL',
    ESTADUAL = 'ESTADUAL',
    MUNICIPAL = 'MUNICIPAL',
    FACULTATIVO = 'FACULTATIVO',
}