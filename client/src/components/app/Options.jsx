import React, { useState } from 'react';
import ZipCodeUpdater from '@components/app/ZipCodeUpdater';
import styles from '@css/app/options.module.css';

function Options() {
    const [toggle, setToggle] = useState(false);

    const toggleOptions = () => {
        setToggle(!toggle);
    }

    return (
        <>
            {toggle && 
                <div className={`${styles.options}}`}>
                    <div className={styles.menu}>
                        <ul>
                            <ZipCodeUpdater />
                        </ul>
                    </div>
                </div>
            }
            <button onClick={toggleOptions}>Options</button>
        </>
      );

}

export default Options;