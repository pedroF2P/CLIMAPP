import { ajax } from "../tools/ajax";

export const getCities = async countryCode => {
    const optionsRequest = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places/autocomplete",
        headers: {
            "X-RapidAPI-Key": "834eeebe63msh28803bdb79271a1p1d9430jsn88a7b7c3fac0",
            "X-RapidAPI-Host": "spott.p.rapidapi.com"
        },
        params: {
            limit: 10,
            type: "CITY",
            country: countryCode ?? "US",
        }
    };
    return await ajax(optionsRequest);
}
