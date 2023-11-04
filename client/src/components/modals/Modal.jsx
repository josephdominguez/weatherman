import { useRef, useEffect } from "react";
import { GoXCircle } from "react-icons/go";
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
        else { document.removeEventListener('click', toggleModal); }
    }, [toggle]);

    return (
        <>
            {toggle && (
                <div className={styles['modal']}>
                    <div ref={modalRef} className={styles['modal-content']}>
                        < GoXCircle className={styles['close-modal-button']} onClick={onClose} />
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
