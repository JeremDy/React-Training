import React from 'react';




class SearchBar extends React.Component {

    state = {
        content : '',
    }

    onInputChange = evt => {     
        this.setState({content: evt.target.value});     
    }

    onFormSubmit = evt => {
        evt.preventDefault();
        this.props.onSearchSubmit(this.state.content);
    }
    
    
    render = () =>(
        <div className="search-bar ui segment">
            <form className="ui form"onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Rechercher votre video : </label>
                    <input 
                        value={this.state.content} 
                        type="text" 
                        onChange={this.onInputChange} 
                    />
                </div>
            </form>
        </div>
    );

}

export default SearchBar;