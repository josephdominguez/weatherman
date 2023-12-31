// This file contains an array of top cities and a function to retrieve random cities from the list.

/**
 * An array containing objects representing top cities with their names and zip codes.
 *
 * @type {Array}
 */
const topCities = [
    { city: 'New York, NY', zipCode: '10019' },
    { city: 'Los Angeles, CA', zipCode: '90045' },
    { city: 'Chicago, IL', zipCode: '60657' },
    { city: 'Houston, TX', zipCode: '77045' },
    { city: 'Phoenix, AZ', zipCode: '85005' },
    { city: 'Philadelphia, PA', zipCode: '19118' },
    { city: 'San Antonio, TX', zipCode: '78218' },
    { city: 'San Diego, CA', zipCode: '92154' },
    { city: 'Dallas, TX', zipCode: '75231' },
    { city: 'Austin, TX', zipCode: '78749' },
    { city: 'Jacksonville, FL', zipCode: '32246' },
    { city: 'San Jose, CA', zipCode: '95136' },
    { city: 'Fort Worth, TX', zipCode: '76131' },
    { city: 'Columbus, OH', zipCode: '43232' },
    { city: 'Charlotte, NC', zipCode: '28210' },
    { city: 'Indianapolis, IN', zipCode: '46222' },
    { city: 'San Francisco, CA', zipCode: '94132' },
    { city: 'Seattle, WA', zipCode: '98118' },
    { city: 'Denver, CO', zipCode: '80249' },
    { city: 'Oklahoma City, OK', zipCode: '73142' },
    { city: 'Nashville, TN', zipCode: '37228' },
    { city: 'El Paso, TX', zipCode: '79936' },
    { city: 'Washington, DC', zipCode: '20018' },
    { city: 'Las Vegas, NV', zipCode: '89147' },
    { city: 'Boston, MA', zipCode: '02163' },
    { city: 'Portland, OR', zipCode: '97230' },
    { city: 'Louisville, KY', zipCode: '40220' },
    { city: 'Memphis, TN', zipCode: '38125' },
    { city: 'Detroit, MI', zipCode: '48202' },
    { city: 'Baltimore, MD', zipCode: '21231' },
    { city: 'Milwaukee, WI', zipCode: '53233' },
    { city: 'Albuquerque, NM', zipCode: '87121' },
    { city: 'Tucson, AZ', zipCode: '85756' },
    { city: 'Fresno, CA', zipCode: '93727' },
    { city: 'Sacramento, CA', zipCode: '95838' },
    { city: 'Mesa, AZ', zipCode: '85212' },
    { city: 'Kansas City, MO', zipCode: '64139' },
    { city: 'Atlanta, GA', zipCode: '30350' },
    { city: 'Colorado Springs, CO', zipCode: '80918' },
    { city: 'Omaha, NE', zipCode: '68124' },
    { city: 'Raleigh, NC', zipCode: '27661' },
    { city: 'Virginia Beach, VA', zipCode: '23479' },
    { city: 'Long Beach, CA', zipCode: '90831' },
    { city: 'Miami, FL', zipCode: '33125' },
    { city: 'Oakland, CA', zipCode: '94624' },
    { city: 'Minneapolis, MN', zipCode: '55428' },
    { city: 'Tulsa, OK', zipCode: '74133' },
    { city: 'Bakersfield, CA', zipCode: '93313' },
    { city: 'Tampa, FL', zipCode: '33634' },
    { city: 'Wichita, KS', zipCode: '67214' },
    { city: 'Arlington, TX', zipCode: '76016' },
    { city: 'Aurora, CO', zipCode: '80045' },
    { city: 'New Orleans, LA', zipCode: '70130' },
    { city: 'Cleveland, OH', zipCode: '44135' },
    { city: 'Anaheim, CA', zipCode: '92812' },
    { city: 'Honolulu, HI', zipCode: '96826' },
    { city: 'Henderson, NV', zipCode: '89014' },
    { city: 'Stockton, CA', zipCode: '95212' },
    { city: 'Riverside, CA', zipCode: '92505' },
    { city: 'Lexington, KY', zipCode: '40514' },
    { city: 'Corpus Christi, TX', zipCode: '78412' },
    { city: 'Orlando, FL', zipCode: '32825' },
    { city: 'Irvine, CA', zipCode: '92620' },
    { city: 'Cincinnati, OH', zipCode: '45214' },
    { city: 'Santa Ana, CA', zipCode: '92712' },
    { city: 'Newark, NJ', zipCode: '07114' },
    { city: 'Saint Paul, MN', zipCode: '55112' },
    { city: 'Pittsburgh, PA', zipCode: '15212' },
    { city: 'Greensboro, NC', zipCode: '27412' },
    { city: 'Lincoln, NE', zipCode: '68514' },
    { city: 'Durham, NC', zipCode: '27712' },
    { city: 'Plano, TX', zipCode: '75094' },
    { city: 'Anchorage, AK', zipCode: '99508' },
    { city: 'Jersey City, NJ', zipCode: '07306' },
    { city: 'Saint Louis, MO', zipCode: '63109' },
    { city: 'Chandler, AZ', zipCode: '85286' },
    { city: 'North Las Vegas, NV', zipCode: '89081' },
    { city: 'Chula Vista, CA', zipCode: '91915' },
    { city: 'Buffalo, NY', zipCode: '14209' },
    { city: 'Gilbert, AZ', zipCode: '85296' },
    { city: 'Reno, NV', zipCode: '89512' },
    { city: 'Madison, WI', zipCode: '53714' },
    { city: 'Fort Wayne, IN', zipCode: '46814' },
    { city: 'Toledo, OH', zipCode: '43613' },
    { city: 'Lubbock, TX', zipCode: '79415' },
    { city: 'Saint Petersburg, FL', zipCode: '33713' },
    { city: 'Laredo, TX', zipCode: '78046' },
    { city: 'Irving, TX', zipCode: '75039' },
    { city: 'Chesapeake, VA', zipCode: '23328' },
    { city: 'Glendale, AZ', zipCode: '85308' },
    { city: 'Winston Salem, NC', zipCode: '27110' },
    { city: 'Scottsdale, AZ', zipCode: '85261' },
    { city: 'Garland, TX', zipCode: '75046' },
    { city: 'Boise, ID', zipCode: '83712' },
    { city: 'Norfolk, VA', zipCode: '23508' },
    { city: 'Port Saint Lucie, FL', zipCode: '34952' },
    { city: 'Spokane, WA', zipCode: '99207' },
    { city: 'Richmond, VA', zipCode: '23225' },
    { city: 'Fremont, CA', zipCode: '94555' },
    { city: 'Huntsville, AL', zipCode: '35810' },
];

/**
 * Get a list of random cities from the `topCities` array.
 *
 * @param {number} n - The number of random cities to retrieve.
 * @throws {Error} If `n` is greater than the length of `topCities`.
 * @returns {Array} An array of random city objects.
 */
function getRandomCities(n) {
    if (topCities.length < n) {
        throw new Error(`Length of cities list is less than ${n}.`);
    }

    const randomCities = [];
    while (randomCities.length < n) {
        const index = Math.floor(Math.random() * topCities.length);
        const city = topCities[index];
        if (!randomCities.includes(city)) {
            randomCities.push(topCities[index]);
        }
    }
    return randomCities;
}

module.exports = { topCities, getRandomCities };
