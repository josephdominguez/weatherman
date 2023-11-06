// Utility functions to extract specific forecast sections from text.

/**
 * Extracts a specific section of forecast from the given input text based on a section identifier.
 *
 * @param {string} section - The section identifier to search for in the text.
 * @param {string} text - The text from which to extract the section.
 * @returns {string} - The extracted section text, or an empty string if not found.
 */
exports.extractForecastSection = (section, text) => {
    const regExp = new RegExp(`${section}([\\s\\S]*?)&&`, 'g');
    const match = regExp.exec(text);
    if (match) {
        const extractedText = match[1].trim();
        return extractedText;
    }
    return '';
};

exports.extractSynopsis = (text) => {
    return exports.extractForecastSection('SYNOPSIS', text);};

exports.extractShortTerm = (text) => {
    return exports.extractForecastSection('SHORT TERM', text);
};
