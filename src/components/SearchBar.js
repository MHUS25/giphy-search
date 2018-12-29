import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { query: '' }
    }

    onInputChange(query) {
        this.setState({query});
        this.props.onTermChange(query);
    }

    render() {
        return (
            <div className="search">
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
