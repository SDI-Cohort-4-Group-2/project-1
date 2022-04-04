import API from './API'
import {useState} from "react";

export default function SearchBar(props) {
    const [busStopCode, setBusStopCode] = useState('');
    const [busNumber, setBusNumber] = useState('');

    async function getBusArrivalData(e) {
        e.preventDefault();
        const RESPONSE = await API.get('/BusArrivalv2', {
            headers:{
                'AccountKey': 'HcXVAu/3TQ6F7Ymp1JHamA==',
            },
            params:{
                'BusStopCode': `${busStopCode}`,
                'ServiceNo': `${busNumber}`
            }
        });

        let data = RESPONSE.data.Services
        props.fetchData({data})

    }

    function handleInput(e) {
        const FIELDNAME = e.target.name;

        switch(FIELDNAME) {
            case 'busStopCode':
                setBusStopCode(e.target.value);
                break;
            case 'busNumber':
                setBusNumber(e.target.value);
                break;
        }
    }

    return (
        <>
            <form onSubmit={getBusArrivalData}>
                <input type='text' placeholder='Enter Bus Stop Code' name='busStopCode' onChange={handleInput} />
                <input type='text' placeholder='Enter Bus Number' name='busNumber' onChange={handleInput} />
                <button>Search</button>
            </form>
        </>
    )
}