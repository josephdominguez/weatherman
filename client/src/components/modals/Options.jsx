// Options.jsx

import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from '@components/modals/Modal';
import NavigationMenu from '@components/app/NavigationMenu';
import MusicPlayerController from '@components/app/MusicPlayerController';
import ProfileMenu from '@components/app/ProfileMenu';
import LocationMenu from '@components/app/LocationMenu';
import { GoGear } from 'react-icons/go';
import styles from '@css/modals/options.module.css';

function Options() {
    const [activeTab, setActiveTab] = useState('location'); // Initial active tab
    const [toggle, setToggle] = useState(false);
    const { isAuthenticated } = useAuth0();

    const toggleOptions = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
    };

    const closeOptions = () => {
        setToggle(false);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Modal toggle={toggle} onClose={closeOptions}>
                <div className={styles['options']}>
                    <div className={styles['tabContainer']}>
                        <h1>Options</h1>
                        <div className={styles['tabs']}>
                            {isAuthenticated && (
                                <button
                                    className={`${styles['tabButton']} ${
                                        activeTab === 'profile'
                                            ? styles['activeTab']
                                            : ''
                                    }`}
                                    onClick={() => handleTabClick('profile')}
                                >
                                    Profile
                                </button>
                            )}
                            <button
                                className={`${styles['tabButton']} ${
                                    activeTab === 'location' ? styles['activeTab'] : ''
                                }`}
                                onClick={() => handleTabClick('location')}
                            >
                                Location
                            </button>
                            <button
                                className={`${styles['tabButton']} ${
                                    activeTab === 'navigation'
                                        ? styles['activeTab']
                                        : ''
                                }`}
                                onClick={() => handleTabClick('navigation')}
                            >
                                Navigation
                            </button>
                            <button
                                className={`${styles['tabButton']} ${
                                    activeTab === 'music' ? styles['activeTab'] : ''
                                }`}
                                onClick={() => handleTabClick('music')}
                            >
                                Music
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles['menu']}>
                    {activeTab === 'profile' && isAuthenticated && <ProfileMenu />}
                    {activeTab === 'location' && <LocationMenu />}
                    {activeTab === 'navigation' && <NavigationMenu />}
                    {activeTab === 'music' && <MusicPlayerController />}
                </div>
            </Modal>
            <GoGear className={styles['toggleOptionsButton']} onClick={toggleOptions} />
        </>
    );
}

export default Options;
