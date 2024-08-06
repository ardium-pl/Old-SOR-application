export class Tabela31 {

    nazwa: string;
  
    H = Array<number>(20);
    L = Array<number>(20);
    L6 = "godz."

    constructor() {


      for (let i = 0; i < 20; i++)
      {
        this.H[i] = 0;
        this.L[i] = 0;

      }
    }
  
  }
  