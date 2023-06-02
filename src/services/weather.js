import { ajax } from "../tools/ajax";

export const getCityWeather = async city => {
    const optionsRequest = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: {
            q: city,
            appid: "a3ae1906a7msh8668f21f14c901dp124c0bjsn956023a3082f",
            units: "metric" // Grados centígrados
        }
    };
    return await ajax(optionsRequest);
}
