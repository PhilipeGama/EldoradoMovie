import { AfterInsert, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class Gender {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;


    @BeforeInsert()
    public createAt(){
        this.created_at = new Date();
    }

    @AfterInsert()
    public updateAt(){
        this.updated_at = new Date();
    }
    
}