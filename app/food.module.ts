
export class Food {
  constructor(public name: string, public description: string, public calories: number, public timestamp: Date, public id: number) {

  }

  getDateTime(): string {
    //return this.timestamp.getHours()+":"+this.timestamp.getMinutes()+" "+ this.timestamp.getMonth()+"/"+this.timestamp.getDate()+"/"+this.timestamp.getFullYear();
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
