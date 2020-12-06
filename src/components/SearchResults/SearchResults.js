import './SearchResults';
import React from 'react';

class SearchResults extends React.Component {
    render () {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList />
            </div>
        )
    }
}

export default SearchResults;