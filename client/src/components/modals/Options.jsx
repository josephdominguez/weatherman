import React, { useState } from 'react';
import Modal from '@components/modals/Modal';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import { GoGear } from 'react-icons/go';
import styles from '@css/modals/options.module.css';


function Options() {
    const [toggle, setToggle] = useState(false);

    const toggleOptions = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
    }

    const closeModal = () => {
        setToggle(false);
    }

    return (
        <>
            <Modal toggle={toggle} onClose={closeModal}>
                <div className={styles.options}>
                    <h1>Options</h1>
                    <ZipCodeUpdater />
                </div>
            </Modal>
            <GoGear className={styles.toggleOptionsButton} onClick={toggleOptions} />
        </>
    );
}

export default Options;