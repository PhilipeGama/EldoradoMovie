import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import bcrypt from 'bcryptjs';

@Entity()
export default class User {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public name: string;

    @Column({unique: true})
    public email: string;

    @Column()
    public password: string;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;
    

    @BeforeInsert()
    public async hashPassword(){
        this.password = await bcrypt.hash(this.password, 5);
    }
}