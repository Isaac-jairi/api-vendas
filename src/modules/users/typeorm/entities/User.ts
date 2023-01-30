import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn({ name: 'created_at'})
    created_at:Date;

    @UpdateDateColumn({ name: 'updated_at'})
    updated_at: Date;
}
export default User;