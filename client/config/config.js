// Defines the API endpoint for making requests.
export const API_ENDPOINT = "https://theweatherman.cc/api";
export const API_ENDPOINT = "theweatherman.cc/api";

/**
 * `pages` is an array representing each page in the application.
 * Each page object contains the following properties:
 * - `component`: The name of the React component associated with the page.
 * - `title`: The title displayed in the navigation menu for the page.
 * - `path`: The URL path for accessing the page.
 */
export const pages = [
    {
        component: "CompleteForecast",
        title: "Complete Forecast",
        path: "/CompleteForecast",
    },
    {
        component: "CurrentConditionsComponent",
        title: "Current Conditions",
        path: "/CurrentConditions",
    },
    {
        component: "ExtendedForecastComponent",
        title: "Extended Forecast",
        path: "/ExtendedForecast",
    },
    {
        component: "LocalForecastComponent",
        title: "Local Forecast",
        path: "/LocalForecast",
    },
    {
        component: "TravelForecastComponent",
        title: "Travel Forecast",
        path: "/TravelForecast",
    },
];

/**
 * `tracks` is an array representing each track for music player.
 *  Each track contains their URL path.
 */
export const tracks = [
    { path: '/music/1.mp3' },
    { path: '/music/2.mp3' },
    { path: '/music/3.mp3' },
    { path: '/music/4.mp3' },
    { path: '/music/5.mp3' },
    { path: '/music/6.mp3' },
    { path: '/music/7.mp3' },
    { path: '/music/8.mp3' },
    { path: '/music/9.mp3' },
    { path: '/music/10.mp3' },
    { path: '/music/11.mp3' },
    { path: '/music/12.mp3' },
    { path: '/music/13.mp3' },
    { path: '/music/14.mp3' },
    { path: '/music/15.mp3' },
    { path: '/music/16.mp3' },
    { path: '/music/17.mp3' },
    { path: '/music/18.mp3' },
    { path: '/music/19.mp3' },
    { path: '/music/20.mp3' },
    { path: '/music/21.mp3' },
    { path: '/music/22.mp3' },
    { path: '/music/23.mp3' },
    { path: '/music/24.mp3' },
    { path: '/music/25.mp3' },
    { path: '/music/26.mp3' },
    { path: '/music/27.mp3' },
    { path: '/music/28.mp3' },
    { path: '/music/29.mp3' },
    { path: '/music/30.mp3' },
    { path: '/music/31.mp3' },
    { path: '/music/32.mp3' },
    { path: '/music/33.mp3' },
];
