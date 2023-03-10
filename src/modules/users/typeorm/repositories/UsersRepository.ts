import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  public async findByName(name: string): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        name,
      },
    });
    return user;
  }
  public async findById(id: number): Promise<User | undefined> {
    const user = this.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}
export default UsersRepository;
