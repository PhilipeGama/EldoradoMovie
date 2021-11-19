import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Movie {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column()
    public releaseDate: string;

    @CreateDateColumn()
    public created_at?: Date;
    
    @UpdateDateColumn()
    public updated_at?: Date;

    @BeforeInsert()
    public createAt() {
        this.created_at = new Date();
    }

    @BeforeUpdate()
    public updatedAt() {
        this.updated_at = new Date();
    }

}