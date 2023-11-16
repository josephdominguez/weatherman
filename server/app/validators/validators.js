const { validationResult, query, body } = require('express-validator');

// Common validation middleware
const validate = (validations) => [
    ...validations,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg });
        }
        next();
    },
];

// Custom validation function for a valid ZIP code (5 or 9 digits)
const isValidZipCodePattern = (value) => {
    const zipCode5Pattern = /^\d{5}$/; // XXXXX format zip code
    const zipCode9Pattern = /^\d{5}-\d{4}$/; // XXXXX-XXXX format zip code

    if (!(zipCode5Pattern.test(value) || zipCode9Pattern.test(value))) {
        throw new Error(
            'Invalid ZIP code format. Should be either XXXXX or XXXXX-XXXX.'
        );
    }
    return true;
};

// Custom validation function for savedLocations
const isValidSavedLocations = (value) => {
    if (typeof value === 'string') {
        return isValidZipCodePattern(value);
    } else if (
        Array.isArray(value) &&
        value.every((item) => typeof item === 'string' && isValidZipCodePattern(item))
    ) {
        return true;
    } else {
        throw new Error(
            'Invalid locations. Should be a single ZIP code or a list of valid ZIP codes.'
        );
    }
};

const validateZipCode = validate([
    query('zipCode').custom(isValidZipCodePattern)
]);

const validateUserSub = validate([
    query('sub').notEmpty().withMessage('Sub cannot be empty.'),
]);

const validateUserInfo = validate([
    body('sub').notEmpty().withMessage('Sub cannot be empty.'),
    body('email').isEmail().withMessage('Invalid email format.'),
    body('savedLocations').custom(isValidSavedLocations),
    body('unitPreference').isIn(['imperial', 'metric'])
        .withMessage('Invalid unitPreference. Must be "imperial" or "metric".'),
]);

module.exports = {
    validateZipCode,
    validateUserSub,
    validateUserInfo,
};
