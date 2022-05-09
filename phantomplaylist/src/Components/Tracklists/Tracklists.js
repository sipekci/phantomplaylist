import React from 'react';
import './Tracklists.css';
import Track from '../Track/Track';

class Tracklists extends React.Component {
    render() {
        return (
            <div className="Tracklists">
                {
                    this.props.tracks.map(track => {
                        return <Track track={track}
                            key={track.id} 
                            onAdd= {this.props.onAdd}
                            onRemove={this.props.onRemove}
                            isRemoval={this.props.isRemoval}/>
                    })
                }
            </div>

        )
    }
}
export default Tracklists;