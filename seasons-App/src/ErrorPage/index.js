import React from 'react';
import './errorPage.css'

const ErrorPage = ({errorMessage}) =>(
    <div className='error-page'>
        <h1>{errorMessage}</h1>
    </div>
)

ErrorPage.defaultProps = {
    errorMessage : 'Erreur !',
}
export default ErrorPage;