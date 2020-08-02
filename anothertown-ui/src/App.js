import React from 'react';
import './scss/App.scss';
import Results from './components/results'
import axios from 'axios';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      wikiInfo: null
    }
  }

  componentWillMount = () => {
    const search_locs= ['Boston_Massachusetts', 'Dallas_texas', 'Richmond_Virginia', 'Seattle_Washington',
        'Tampa_florida', 'Omaha_Nebraska', 'Burlington_Vermont', 'Bend_Oregon', 'Boulder_Colorado', 'Ann_Arbor_Michigan']
    // const search_locs=['Burlington_Vermont']
    this.get_wiki(search_locs)
  }

  get_wiki = async(terms) =>{
    this.setState({
      wikiInfo: null,
    });

    axios.all(
      terms.map(term => {
        return axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${term}`)
      })
    ).then( responseArr => {
      this.setState({
        wikiInfo: responseArr.map(response => {
          return response.data.extract;
        }),
        wikiLoad: false,
      })
    }
    ).catch(response => {
        this.setState({
          wikiLoad: false,
          WikiError: true,
        })
      })

    // axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${"Burlington_Vermont"}`)
    // .then(response=>
    //   this.setState({
    //         wikiInfo: [response.data.extract],
    //       })
    // )
  };
  

  render = () => {
    

    return <div className="App">
      <header className="App-header">

        <div>Another Town</div>
       
      </header>
      <Results
        wikiInfo={this.state.wikiInfo}
      />
    </div>
  };
}

export default App;
