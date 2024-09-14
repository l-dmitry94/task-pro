import { IRegisterForm } from '@/components/shared/Auth/RegisterForm/RegisterForm.types';
import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const signup = async (data: IRegisterForm) => {
    return await instance.post(ENDPOINTS.auth.signup, data);
};
