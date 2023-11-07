import { useNavigate } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { ZipCodeManager } from '@components/utilities/ZipCodeManager';
import styles from '@css/app/zipcode_search.module.css';

function ZipCodeSearch() {
    const { handleInputChange, handleKeyPress, updateZipCode } =
        ZipCodeManager();
    const navigate = useNavigate();

    // Navigates to complete forecast if zip code is valid.
    const callback = () => {
        navigate('/CompleteForecast');
    };

    return (
        <>
            <div className={styles['search-container']}>
                <GoSearch
                    className={styles['search-svg']}
                    onClick={() => updateZipCode(callback)}
                />{' '}
                <input
                    className={styles['search-input']}
                    type='text'
                    placeholder='Get latest forecast by ZIP code'
                    onChange={handleInputChange}
                    onKeyDown={(event) => handleKeyPress(event, callback)}
                />
            </div>
        </>
    );
}

export default ZipCodeSearch;
