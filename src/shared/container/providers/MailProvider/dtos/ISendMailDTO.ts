import IParseEmailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendaMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseEmailTemplateDTO;
}
