export class User {
  constructor(public id:string, public email: string, private role: string, private _token: string){
  }

}