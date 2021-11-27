import slugify from "slugify";
import { AfterLoad, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Gender from "./Gender";

// import pathConfig from "src/config/path";

import slugifyConfig from "../../config/slugify";



@Entity()
export default class Movie {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column()
    public name: string;

    @Column('varchar')
    public slug: string;

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
    public gender: Gender;

    public full_path: string;
    
    @BeforeInsert()
    public createAt() {
        this.created_at = new Date();
    }

    @BeforeUpdate()
    public updatedAt() {
        this.updated_at = new Date();
    }

    @BeforeUpdate()
    @BeforeInsert()
    public addSlug() {
        this.slug = slugify(this.name, slugifyConfig)
    }

    // @AfterLoad()
    // public setFullPath() {
    //     this.full_path = `${pathConfig.fullStaticPath}/${this.poster}`;
    // }

}