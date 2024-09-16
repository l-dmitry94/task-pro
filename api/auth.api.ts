import { IRegisterForm } from '@/components/shared/Auth/RegisterForm/RegisterForm.types';
import instance from './axios.config';
import ENDPOINTS from './endpoints';
import { User } from 'next-auth';

export const signup = async (data: IRegisterForm) => {
    return await instance.post(ENDPOINTS.auth.signup, data);
};

export const update = async (data: User) => {
    return await instance.put(ENDPOINTS.auth.update, data);
};
