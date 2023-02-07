import handlebars from 'handlebars';
import './Interfaces';

export default class HandlebarsMailTemplate {
  public async parse({ variables }: IParseMailTemplate): Promise<string> {
    const parseTemplate = handlebars.compile(
      `<style>
        .message-content{
          font-family: Arial, Helvetica, sans-serif;
          max-width: 600px;
          font-size: 18px;
          line-height: 24px;
        }
      </style>

      <div class="message-content">
        <h3> Olá {{name}}! </h3>
        <br>
        <p>Recebemos uma solicitação de redefinição de Senha.</p>
        <p>Click no link abaixo para resetar</p>
        <p>
          <a href="{{link}}">Resetar Minha Senha</a>
        </p>
        <p>Caso não tenha solicitado, ignore este email.</p>
        <br>
        <p>Equipe API Vendas</p>
      </div>`,
    );

    return parseTemplate(variables);
  }
}
