// Defines the API endpoint for making requests.
export const API_ENDPOINT = "localhost:8080";

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
];
