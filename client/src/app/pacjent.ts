export class Pacjent {

    id: number;
    pesel : number = 0;
    imie: string;
    nazwisko: string;
    dataUrodzenia: Date;
    typ:TypPacjenta;

    constructor(id: number,  pesel: number, imie: string, nazwisko: string, dataUrodzenia: Date)
    {
        this.dataUrodzenia = dataUrodzenia;
        this.id = id;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.pesel = pesel;
    }
}

export enum TypPacjenta {
    Resuscytacja,
    ZagrozenieZycia,
    PilnyOstry,
    PilnyNieostry,
    Niepilny
}
