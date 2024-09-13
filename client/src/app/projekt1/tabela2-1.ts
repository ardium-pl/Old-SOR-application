export class Tabela21 {

    nazwa: string;
  
    C = Array<number>(30);
    D = Array<number>(30);
    E = Array<number>(30);
    F = Array<number>(30);
    G = Array<number>(30);
    I = Array<number>(30);

    constructor(nazwa: string) {
      this.nazwa = nazwa;

      for (let i = 0; i < 30; i++)
      {
        this.C[i] = 0;
        this.D[i] = 0;
        this.E[i] = 0;
        this.F[i] = 0;
        this.G[i] = 0;
        this.I[i] = 0;
      }
    }
  
  }
  