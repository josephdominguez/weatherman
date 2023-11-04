import { useState } from 'react';
import Modal from '@components/modals/Modal';
import NavigationMenu from '@components/app/NavigationMenu';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import MusicPlayerController from '@components/app/MusicPlayerController';
import { GoGear } from 'react-icons/go';
import styles from '@css/modals/options.module.css';


function Options() {
    const [toggle, setToggle] = useState(false);

    const toggleOptions = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
    }

    const closeOptions = () => {
        setToggle(false);
    }

    return (
        <>
            <Modal toggle={toggle} onClose={closeOptions}>
                <div className={styles['options']}>
                    <h1>Options</h1>
                    <ZipCodeUpdater />
                    <NavigationMenu />
                    <MusicPlayerController />
                </div>
            </Modal>
            <GoGear className={styles['toggleOptionsButton']} onClick={toggleOptions} />
        </>
    );
}

export default Options;
