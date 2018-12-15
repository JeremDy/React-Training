import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends React.Component
{
    state = {
        images : [],
        wordSearched : ''
    }
    
    onSearchSubmit = async (term) => {
        
        const response = await unsplash.get('search/photos', {params: { query : term }});
        this.setState({ images: response.data.results, wordSearched: term});
    }

    
 
    render = () =>(
    <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <p>we found {this.state.images.length} images of {this.state.wordSearched} ! </p>
        <ImageList images={this.state.images} />
    </div>
  )
}

export default App;