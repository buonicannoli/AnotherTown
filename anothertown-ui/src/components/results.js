import React, {useEffect, useState} from 'react';
import MapChart from './map-chart';
import ResultsTable from './results-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';

function Results(props){
    const counter = useSelector(state => state.counter)
    const [wikiInfo] = useState('temp')
    useEffect(() => {
        console.log(props)

    }, props.wikiInfo)

        return <div>
        <div className='map-list-row'>
            <MapChart/>
            <div className="results-column">
                {/* <Button variant="outline-secondary">Test</Button> */}
                <ResultsTable
                    wikiInfo={props.wikiInfo}
                />
            </div>
        </div>
        <div></div>
        </div>
        
}


export default Results;