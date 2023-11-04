// Define a common set of icons and their paths that are shared between day and night conditions
const commonIcons = {
    'Cloudy': 'images/conditions/cloudy.gif',
    'Mist': 'images/conditions/cloudy.gif',
    'Patchy rain possible': 'images/conditions/shower.gif',
    'Patchy snow possible': 'images/conditions/snow.gif',
    'Patchy sleet possible': 'images/conditions/sleet.gif',
    'Patchy freezing drizzle possible': 'images/conditions/freezing_rain.gif',
    'Thundery outbreaks possible': 'images/conditions/thunder.gif',
    'Blowing snow': 'images/conditions/windy_snow.gif',
    'Blizzard': 'images/conditions/wintry_mix.gif',
    'Fog': 'images/conditions/fog.gif',
    'Freezing fog': 'images/conditions/fog.gif',
    'Patchy light drizzle': 'images/conditions/shower.gif',
    'Light drizzle': 'images/conditions/shower.gif',
    'Freezing drizzle': 'images/conditions/freezing_rain.gif',
    'Heavy freezing drizzle': 'images/conditions/freezing_rain.gif',
    'Patchy light rain': 'images/conditions/shower.gif',
    'Light rain': 'images/conditions/shower.gif',
    'Moderate rain at times': 'images/conditions/rain.gif',
    'Moderate rain': 'images/conditions/rain.gif',
    'Heavy rain at times': 'images/conditions/rain.gif',
    'Heavy rain': 'images/conditions/rain.gif',
    'Light freezing rain': 'images/conditions/freezing_rain.gif',
    'Moderate or heavy freezing rain': 'images/conditions/freezing_rain.gif',
    'Light sleet': 'images/conditions/sleet.gif',
    'Moderate or heavy sleet': 'images/conditions/freezing_rain_sleet.gif',
    'Patchy light snow': 'images/conditions/snow.gif',
    'Light snow': 'images/conditions/snow.gif',
    'Patchy moderate snow': 'images/conditions/snow.gif',
    'Moderate snow': 'images/conditions/snow.gif',
    'Patchy heavy snow': 'images/conditions/heavy_snow.gif',
    'Heavy snow': 'images/conditions/heavy_snow.gif',
    'Ice pellets': 'images/conditions/sleet.gif',
    'Light rain shower': 'images/conditions/shower.gif',
    'Moderate or heavy rain shower': 'images/conditions/rain.gif',
    'Torrential rain shower': 'images/conditions/rain.gif',
    'Light sleet showers': 'images/conditions/freezing_rain_sleet.gif',
    'Moderate or heavy sleet showers': 'images/conditions/freezing_rain_sleet.gif',
    'Light snow showers': 'images/conditions/rain_snow.gif',
    'Moderate or heavy snow showers': 'images/conditions/rain_snow.gif',
    'Light showers of ice pellets': 'images/conditions/freezing_rain_sleet.gif',
    'Moderate or heavy showers of ice pellets': 'images/conditions/freezing_rain_sleet.gif',
    'Patchy light snow with thunder': 'images/conditions/thundersnow.gif',
    'Moderate or heavy snow with thunder': 'images/conditions/thundersnow.gif',
};

// Define icons specific to daytime conditions
const conditionIconsDay = {
    ...commonIcons,
    'Sunny': 'images/conditions/clear_day.gif',
    'Clear': 'images/conditions/clear_day.gif',
    'Partly cloudy': 'images/conditions/partly_cloudy_day.gif',
    'Overcast': 'images/conditions/mostly_cloudy_day.gif',
    
};

// Define icons specific to nighttime conditions
const conditionIconsNight = {
    ...commonIcons,
    'Sunny': 'images/conditions/clear_night.gif',
    'Clear': 'images/conditions/clear_night.gif',
    'Partly cloudy': 'images/conditions/partly_cloudy_night.gif',
    'Cloudy': 'images/conditions/cloudy.gif',
    'Overcast': 'images/conditions/mostly_cloudy_night.gif',
};

module.exports = { conditionIconsDay, conditionIconsNight };
