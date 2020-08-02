import React from 'react';
import MapChart from './map-chart';
// import Button from 'react-bootstrap/Button';
import ResultsTable from './results-table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Results extends React.Component{



    render = () => {
        return <div>
        <div className='map-list-row'>
            <MapChart/>
            <div className="results-column">
                {/* <Button variant="outline-secondary">Test</Button> */}
                <ResultsTable
                    wikiInfo={this.props.wikiInfo}
                />
            </div>
        </div>
        <div></div>
        </div>
        
    }
}

export default Results;