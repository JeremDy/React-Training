import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay/';
import Loader from './Loader/';
import ErrorPage from './ErrorPage/';


class App extends React.Component 
{
   
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({errorMessage : err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <ErrorPage errorMessage='Désolé, vous devez donner votre localisation.'/>
        }
        if (this.state.lat && !this.state.errorMessage) {

            return <SeasonDisplay lat= {this.state.lat}/>
        }

        return <Loader message="Please, show us your location"/>


        
    }
   
    render(){ 
       return this.renderContent(); 
    }
   

}

ReactDom.render(
    <App />,
    document.getElementById('root')
);

