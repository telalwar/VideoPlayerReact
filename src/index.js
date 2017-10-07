import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCJmUEx-dhpAah3fIUoV3_xd5MCdNlHHDU';

//creating new Component which produces some html data
class App extends Component{
constructor(props){
  super(props);
  this.state = { videos: [] };

  YTSearch ({key: API_KEY, term: 'cricket'}, (videos) =>{
    this.setState({ videos});
    });
}


  render() {
  return  (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]} />
      <VideoList videos={this.state.videos} />
     </div>
   );
 }
}

// get the Component generated data and put it on pafe in the dom
ReactDOM.render(<App /> , document.querySelector('.container'));
