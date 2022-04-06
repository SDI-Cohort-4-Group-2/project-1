// Refernce: https://www.digitalocean.com/community/tutorials/react-react-autocomplete

import { useState } from 'react';
import './autocomplete.css'

export default function Autocomplete( props ) {
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestion, setFilteredSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [userInput, setUserInput] = useState('');

    function onChange(e) {
        const userInput = e.target.value
        const filtered = props.busStops.filter(
            item => item.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

        setActiveSuggestion(0);
        setFilteredSuggestion(filtered)
        setShowSuggestion(true);
        setUserInput(e.target.value)
    }

    function onClick(e) {
        setActiveSuggestion(0);
        setFilteredSuggestion([])
        setShowSuggestion(false);
        setUserInput(e.target.innerText)
        props.fetchData(e.target.innerText)   
    }

    function onKeyDown(e) {
        if (e.keyCode === 13) {
            setActiveSuggestion(0);
            setShowSuggestion(false);
            setUserInput(filteredSuggestion[activeSuggestion]);
            props.fetchData(filteredSuggestion[activeSuggestion])   
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion(activeSuggestion - 1);
        } else if (e.keyCode === 40) {
            if (activeSuggestion === filteredSuggestion.length - 1) {
                return;
            }
            setActiveSuggestion(activeSuggestion + 1);
        }
    }

    function SuggestionListComponent() {
        if (showSuggestion && userInput) {
            if (filteredSuggestion.length) {
                return (
                    <ul className='suggestion'>
                        {filteredSuggestion.map((suggestion, index) => {
                            let className;
                            if (index === activeSuggestion) {
                                className = 'suggestion-active'
                            }
                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>
                            )
                        })}
                    </ul>
                );
            } else {
                return (
                    <div className='no-suggestions'>
                        <em>No suggestions available</em>
                    </div>
                );
            }
        }
    }

    return (
        <>
            <input type='text'
                placeholder="Enter Bus Stop Code"
                name="busStopCode"
                className="search-one"
                required
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={userInput}
                autoComplete="off"
            />
            <SuggestionListComponent />
        </>
    )
}