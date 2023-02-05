import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Generated,
} from 'typeorm';

@Entity('user_tokens')
class UserToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  token: string;

  @Column()
  user_id: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
export default UserToken;
