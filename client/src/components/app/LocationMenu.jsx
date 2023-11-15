import ZipCodeUpdater from '@components/app/ZipCodeUpdater';

function LocationMenu() {
    return (
        <div>
            <h2>Current Location</h2>
            <ZipCodeUpdater />
        </div>
    );
}

export default LocationMenu;
