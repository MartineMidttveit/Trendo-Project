
import { useEffect, useState } from "react";
import config from "../API/config";

const baseURL = config.baseURL;

export default function useFetch(id = "") {

    const [value, setValue] = useState()

    useEffect(() => {

        async function fetchData() {
            const url = baseURL + id;
            const res = await fetch(url);
            const data = await res.json()
            setValue(data.data)
        }


        fetchData()
    }, [])

    return [value, setValue];

}