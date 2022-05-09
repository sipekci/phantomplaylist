import React from 'react';
import './SearchOutput.css';
import Tracklists from '../Tracklists/Tracklists';

class SearchOutput extends React.Component {
    
    render(){
        return(
            <div className="SearchOutput">
                <h2>Results</h2>
                <Tracklists tracks={this.props.searchOutput}
                            onAdd ={this.props.onAdd}
                            isRemoval={false} />
            </div>
        )
    }
}

export default SearchOutput;