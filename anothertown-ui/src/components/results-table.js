import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/results-column.scss';

import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class ResultsTable extends React.Component{

    constructor(props){
        super(props);
        this.state={
            wikiInfo: this.props.wikiInfo
        }
    }

    // componentDidMount = () =>{
    //     const search_locs= ['Boston_Massachusetts', 'Dallas_texas', 'Richmond_Virginia', 'Seattle_Washington',
    //     'Tampa_florida', 'Omaha_Nebraska', 'Burlington_Vermont', 'Bend_Oregon', 'Boulder_Colorado', 'Ann_Arbor_Michigan']
    //     this.state.wiki(search_locs)
    // }

    // componentWillReceiveProps = (nextProps) =>{
    //     this.setState({wikiInfo: nextProps.wikiInfo})
    // }

    getRows = () => {
        const locations = ['Boston', 'Dallas', 'Richmond', 'Seattle', 'Tampa', 'Omaha', 'Burlington', 'Bend', 'Boulder', 'Ann Arbor']

        return locations.map( (location, count) => {
            return <ListGroup.Item action href={`#link${count}`} key={`list-group-${count}`}>
            {`${count + 1}: ${location}`}
            </ListGroup.Item>
        })
    }

    getPanes = (wikiInfo) => {
        const locations = ['Boston', 'Dallas', 'Richmond', 'Seattle', 'Tampa', 'Omaha', 'Burlington', 'Bend', 'Boulder', 'Ann Arbor']

        return locations.map( (location, count) => {
            return <Tab.Pane eventKey={`#link${count}`} key={`tab-pane-${count}`}>
                {`${location} --  ${wikiInfo ? wikiInfo[count] : null}`}
            </Tab.Pane>
        })
    }


    render = () =>{
        const{
            wikiInfo
        } = this.props;

        return <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4}>
                <ListGroup>
                    {this.getRows()}
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                   {this.getPanes(wikiInfo)}
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>

    }
}

export default ResultsTable;