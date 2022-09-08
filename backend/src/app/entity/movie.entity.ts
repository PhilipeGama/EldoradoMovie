import slugify from 'slugify';
import {
	AfterLoad,
	BeforeInsert,
	BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import Gender from './gender.entity';

import pathConfig from '../../config/path';

// import slugifyConfig from '../../config/slugify';
// import { text } from 'body-parser';
import { IsNotEmpty } from 'class-validator';

@Entity()
export default class Movie {
	@PrimaryGeneratedColumn('increment')
	public id: number;

	@Column()
	@IsNotEmpty()
	public name: string;

	// @Column()
	// public slug: string;

	@Column({ type: 'text' })
	@IsNotEmpty()
	public synopsis: string;

	@Column()
	public trailer: string;

	@Column({ name: 'release_date' })
	@IsNotEmpty()
	public releaseDate: Date;

	@Column({ name: 'box_office' })
	@IsNotEmpty()
	public boxOffice: number;

	@Column()
	public poster?: string;

	@CreateDateColumn({ name: 'created_at' })
	public createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	public updatedAt: Date;

	@ManyToOne(() => Gender)
	@JoinColumn({
		name: 'gender_id',
		referencedColumnName: 'id',
	})
	@IsNotEmpty()
	public gender: Gender;

	public fullPath: string;

	// @BeforeUpdate()
	// @BeforeInsert()
	// public addSlug() {
	// 	this.slug = slugify(this.name, slugifyConfig);
	// }

	@AfterLoad()
	public setFullPath() {
		this.fullPath = `${pathConfig.fullStaticPath}/${this.poster}`;
	}
}
