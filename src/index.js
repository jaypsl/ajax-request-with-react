import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// create a new compeonent .this should produce some html

import SearchBar from './component/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
const API_KEY = 'AIzaSyBVGhNkYGuYIAvfldPYnJ6iK825mpZuyt4';

class App extends Component {

constructor(props){
	super(props);

	this.state = { videos : []};


YTSearch({key:API_KEY, term:'iphone features'}, (videos) => {
	this.setState({videos: videos});
});
}


	render(){
	return (
		<div> 
		<SearchBar /> 
		<VideoDetail video={this.state.videos[0]} />
		<VideoList videos = {this.state.videos} />
		</div>
		);
}
}

ReactDOM.render(<App/>, document.querySelector('.container'));
