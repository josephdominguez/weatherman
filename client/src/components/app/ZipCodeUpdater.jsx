import { ZipCodeManager } from '@components/utilities/ZipCodeManager';

function ZipCodeUpdater() {
  const { tempZipCode, handleInputChange, handleKeyPress, updateZipCode } = ZipCodeManager();

  return (
    <div>
      <input type="text" placeholder="Enter Zip Code" value={tempZipCode} onChange={handleInputChange} onKeyDown={handleKeyPress} />
      {' '}
      <button onClick={updateZipCode}>Update Zip Code</button>
    </div>
  );
}

export default ZipCodeUpdater;
