const { expect } = require('../config');
const forecast = require('../../app/models/forecast.model');

describe('Forecast Model', function () {
    const synopsisText = '...SYNOPSIS\nThis is the SYNOPSIS section text.&&...';
    const shortTermText = '...SHORT TERM\nThis is the SHORT TERM section text.&&...';
    const otherText = '...OTHER SECTION\nThis is some other section text.&&...';

    describe('(Private functions)', function () {
        describe('_extractForecastSection', function () {
            it('should extract the SYNOPSIS section from the text', function () {
                const result = forecast.extractForecastSection(
                    'SYNOPSIS',
                    synopsisText
                );
                expect(result).to.equal('This is the SYNOPSIS section text.');
            });

            it('should extract the SHORT TERM section from the text', function () {
                const result = forecast.extractForecastSection(
                    'SHORT TERM',
                    shortTermText
                );
                expect(result).to.equal('This is the SHORT TERM section text.');
            });

            it('should return an empty string if the section is not found', function () {
                const result = forecast.extractForecastSection('SYNOPSIS', otherText);
                expect(result).to.equal('');
            });
        });
    });

    describe('extractSynopsis', function () {
        it('should extract the SYNOPSIS section from the text', function () {
            const result = forecast.extractSynopsis(synopsisText);
            expect(result).to.equal('This is the SYNOPSIS section text.');
        });

        it('should return a message if the SYNOPSIS section is not found', function () {
            const result = forecast.extractSynopsis(otherText);
            expect(result).to.equal('No synopsis available.');
        });
    });

    describe('extractShortTerm', function () {
        it('should extract the SHORT TERM section from the text', function () {
            const result = forecast.extractShortTerm(shortTermText);
            expect(result).to.equal('This is the SHORT TERM section text.');
        });

        it('should return a message if the SHORT TERM section is not found', function () {
            const result = forecast.extractShortTerm(otherText);
            expect(result).to.equal('No short term forecast available.');
        });
    });
});
