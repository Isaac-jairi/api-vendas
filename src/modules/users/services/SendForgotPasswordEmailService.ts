import EtherealMail from '@config/mail/EtherealMail';
import HandlebarsMailTemplate from '@config/mail/HandlebarsMailTemplate';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { UsersRepository } from '../typeorm/repositories/UsersRepository';
import { UserTokensRepository } from '../typeorm/repositories/UserTokensRepository';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('No user with this email');
    }

    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const { token } = await userTokensRepository.generate(user.id);

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      from: {
        email: 'equipeVendas@gmail.com',
        name: 'Equipe Vendas',
      },
      subject: 'Redefinição de senha API Vendas',
      templateData: {
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}

export default SendForgotPasswordEmailService;
