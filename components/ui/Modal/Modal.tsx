import { FC } from 'react';
import ReactModal from 'react-modal';
import Icon from '../Icon';
import { IModal } from './Modal.types';
import scss from './Modal.module.scss';

const Modal: FC<IModal> = ({ isOpen, onClose, title, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            closeTimeoutMS={300}
            ariaHideApp={false}
            overlayClassName={scss.overlay}
            className={scss.modal}
        >
            <button type="button" className={scss.closeButton} onClick={onClose}>
                <Icon variant="close" className={scss.closeIcon} />
            </button>
            <h2 className={scss.title}>{title}</h2>
            {children}
        </ReactModal>
    );
};

export default Modal;
