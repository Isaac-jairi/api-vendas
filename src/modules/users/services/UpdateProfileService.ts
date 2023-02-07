import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
  user_id: number;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}
class UpdateProfileService {
  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequest): Promise<User | undefined> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const emailInUse = await usersRepository.findByEmail(email);

    if (emailInUse && emailInUse.id !== user_id) {
      throw new AppError('Email already in use');
    }

    if (password && !old_password) {
      throw new AppError('Old password is required');
    }

    if (password && old_password) {
      const oldPasswordMatch = await compare(old_password, user.password);

      if (!oldPasswordMatch) {
        throw new AppError('Old password did not match');
      }
      user.password = await hash(password, 10);
    }

    user.email = email;
    user.name = name;

    usersRepository.save(user);

    return user;
  }
}

export default UpdateProfileService;
