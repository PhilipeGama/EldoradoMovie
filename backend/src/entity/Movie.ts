import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Gender from "./Gender";


@Entity()
export default class Movie {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public name: string;

    @Column()
    public synopsis: string;

    @Column()
    public release_date: Date;

    @Column()
    public box_office: number;

    @Column()
    public poster: string;

    @CreateDateColumn()
    public created_at?: Date;
    
    @UpdateDateColumn()
    public updated_at?: Date;

    @ManyToOne(() => Gender)
    @JoinColumn({
        name: 'gender_id',
        referencedColumnName: 'id'
    })
    public gender_id;

    @BeforeInsert()
    public createAt() {
        this.created_at = new Date();
    }

    @BeforeUpdate()
    public updatedAt() {
        this.updated_at = new Date();
    }

}