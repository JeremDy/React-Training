import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = { 
        videos : [],
        clickedVideo : null,
    };

    componentDidMount = () => {
        this.onSearchSubmit('Reactjs');
    }

    onSearchSubmit = async content =>{       
        const response = await youtube.get('/search', {
            params: {
                q : content
            }
        });

        this.setState({videos : response.data.items, clickedVideo : response.data.items[0]});
    }

    onItemClick = (clickedVideo) =>{
        this.setState({clickedVideo});    
    }


    render = () => (
        <div className="ui container">
            <h1>React-Tube</h1>
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
            <div className="ui grid">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.clickedVideo}/>
                </div>
                <div className="five wide column">
                    <VideoList videos={this.state.videos} onItemClick={this.onItemClick} />
                </div>
            </div>
        </div>
    )

}
export default App;