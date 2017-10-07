import _ from 'lodash';
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
  this.state = {
     videos: [],
     selectedVideo: null
   };

this.videoSearch('cricket');
}

videoSearch(term){
  YTSearch ({key: API_KEY, term: term}, (videos) =>{
    this.setState({
       videos :videos,
       selectedVideo: videos[0]
     });
    });
}


  render() {
    const videoSearch =_.debounce((term) => {this.videoSearch(term) }, 300);
  return  (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
     </div>
   );
 }
}

// get the Component generated data and put it on pafe in the dom
ReactDOM.render(<App /> , document.querySelector('.container'));
