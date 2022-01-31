import React from 'react';
import { Link } from 'react-router-dom';
import { axios, processRequest } from '../../core/Axios';

class HomeCatFactPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            catFact: undefined,
        };

        this.getCatFact = this.getCatFact.bind(this);
    }

    async componentDidMount() {
        await this.getCatFact();
    }

    async getCatFact() {
        const catFact = await processRequest(axios.get, 'https://catfact.ninja/fact');

        this.setState({ catFact: catFact?.fact });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.catFact === undefined && <p>Loading your fact fact...</p>}
                {this.state.catFact && <p>{this.state.catFact}</p>}
                <Link to={'/home'}>Home</Link>
            </React.Fragment>
        );
    }
}

export default HomeCatFactPage;
