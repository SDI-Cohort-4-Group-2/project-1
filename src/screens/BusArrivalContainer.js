import API from '../components/API';
import {useState, useEffect} from 'react';
import SearchBar from '../components/SearchBar';


export default function BusArrivalContainer() {


    const [busStops, setBusStops] = useState([]);
    const [busArrival, setBusArrival] = useState([]);

    function fetchData(data) {
        setBusArrival(data)
    }

    // useEffect(() => {
    //     getBusStopData();

    // }, [])

    // async function getBusStopData() {
    //     const RESPONSE = await API.get('/BusStops', {
    //         headers:{
    //             'AccountKey': 'HcXVAu/3TQ6F7Ymp1JHamA==',
    //         }
    //     });

    //     let data = RESPONSE.data.value.map(item => {
    //         return {BusStop: item.BusStopCode, RoadName: item.RoadName, Desc: item.Description}
    //     });

    //     setBusStops(data);
    // }

    return (
        <>
            <SearchBar fetchData={fetchData} />
        </>
    )
}