import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>Hello Home!</p>
                <Link to={'/home/fact'}>Get a cat fact</Link>
            </React.Fragment>
        );
    }
}

export default HomePage;
