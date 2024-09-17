import { User } from 'next-auth';

export interface IModalUserInfo extends User {
    onClose: () => void;
}
