import axios from 'axios';

const uri="https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        
        const {data:{ confirmed, recovered, deaths, lastUpdate}} = await axios.get(uri);
        return { confirmed, recovered, deaths, lastUpdate }
        
    } catch (error) {
        console.log(error);        
    }
}

