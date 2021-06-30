import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne,
    JoinColumn } from 'typeorm';

import User from './User';

@Entity('projects')
class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(()=> User)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column()
    link: string;

    @Column()
    image: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;
}

export default Project;