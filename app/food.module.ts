
export class Food {
  constructor(public name: string, public description: string, public calories: number, public timestamp: Date, public id: number) {

  }

  getDateTime(): string {
    return this.getDate();
  }

  getDate(): string {
     return (this.timestamp.getMonth()+1)+"/"+this.timestamp.getDate()+"/"+this.timestamp.getFullYear();
  }
}

export interface IFood {
  name: string;
  description: string;
  calories: number;
}
