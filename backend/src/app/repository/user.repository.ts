import User from "../entity/user.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
   public findByEmail(email: string){
      return this.findOne({email})
   }

   public findAll(){
      return this.find();
   }
}