import { EntityRepository, Repository } from "typeorm";
import Gender from "../entity/Gender";

@EntityRepository(Gender)
export default class GenderRepository extends Repository<Gender> {

    public findAll(){
       return this.find();
    }
}