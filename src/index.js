import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCJmUEx-dhpAah3fIUoV3_xd5MCdNlHHDU';



//creating new Component which produces some html data
class App extends Component{
constructor(props){
  super(props);
  this.state = { videos: [] };

  YTSearch ({key: API_KEY, term: 'surfboards'}, (videos) =>{
    this.setState({ videos});
    console.log();("sdf");
    });
}


  render() {
  return  (
    <div>
      <SearchBar />
     </div>
   );
 }
}

// get the Component generated data and put it on pafe in the dom
ReactDOM.render(<App /> , document.querySelector('.container'));
