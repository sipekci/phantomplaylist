import React from 'react';
import './LookUp.css';

class LookUp extends React.Component {
    render() {
        return (
            <div className="LookUp">
                <input placeholder="Insert Podcast or Song Name" />
                <button className="Button">Search</button>
            </div>

        )
    }
}
export default LookUp;