import { ajax } from "../tools/ajax";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather",
        params: {
            q: city,
            appid: "c3e2f962ce82a4f1628b303ef50d5c75",
            units: "metric" // Grados centígrados
        }
    };
    return await ajax(optionsRequest);
}
