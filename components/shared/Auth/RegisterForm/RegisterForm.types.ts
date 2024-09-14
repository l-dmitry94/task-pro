import { ILoginForm } from '../LoginForm';

export interface IRegisterForm extends ILoginForm {
    name: string;
}
