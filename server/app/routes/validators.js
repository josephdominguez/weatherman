const { validationResult, query } = require('express-validator');

// Custom validation function for a valid ZIP code (5 or 9 digits)
const isValidZipCodePattern = (value) => {
    const zipCode5Pattern = /^\d{5}$/;
    const zipCode9Pattern = /^\d{5}-\d{4}$/;

    if (!(zipCode5Pattern.test(value) || zipCode9Pattern.test(value))) {
        throw new Error(
            'Invalid ZIP code format. Should be either XXXXX or XXXXX-XXXX.'
        );
    }
    return true;
};

// Validation middleware for ZIP code
const validateZipCode = [
    query('zipCode').custom(isValidZipCodePattern),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { validateZipCode };
