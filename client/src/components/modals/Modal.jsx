import React, { useRef, useEffect } from "react";
import styles from "@css/modals/modal.module.css";

function Modal({ toggle, onClose, children }) {
    const modalRef = useRef(null);

    const toggleModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (toggle) { document.addEventListener('click', toggleModal); }
        else { document.removeEventListener('click', toggleModal); };
    }, [toggle]);

    return (
        <>
            {toggle && (
                <div className={styles['modal']}>
                    <div ref={modalRef} className={styles['modal-content']}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
