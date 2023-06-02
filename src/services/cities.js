import { ajax } from "../tools/ajax";

export const getCities = async countryCode => {
    const optionsRequest = {
        method: "GET",
        url: "https://spott.p.rapidapi.com/places/autocomplete",
        headers: {
            "X-RapidAPI-Key": "7d752c4fbcmsh3a0e23cd78780b8p1e991djsn6bac50537f79",
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
