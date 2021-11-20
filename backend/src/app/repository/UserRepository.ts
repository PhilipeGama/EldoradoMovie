import User from "../entity/User";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
    public findByEmail(email: string){
        this.findOne({email})
    }
}