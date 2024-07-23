import React, {useEffect} from 'react';

import './style/Modal.scss';

const Modal = ({isVisible = false, content, onClose}) => {
    const keydownHandler = ({key}) => {
        key === 'Escape' && onClose();
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                {content}
            </div>
        </div>
    );
};

export default Modal;
