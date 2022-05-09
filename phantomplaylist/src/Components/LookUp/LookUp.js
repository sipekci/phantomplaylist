import React from 'react';
import './LookUp.css';

class LookUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.newSearch = this.newSearch.bind(this);
    }
    
    search(){
        this.props.onSearch(this.state.term);
    }

    newSearch(event){
        this.setState({term: event.target.value})
    }
    
    render() {
        return (
            <div className="LookUp">
                <input onChange={this.newSearch} placeholder="Insert Podcast or Song Name" />
                <button className="Button" onClick= {this.search} >Search</button>
            </div>

        )
    }
}
export default LookUp;