import React from 'react';
import './Playlist.css';
import Tracklists from '../Tracklists/Tracklists';

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                <Tracklists tracks={this.props.playlistTrack}
                    onRemove={this.props.onRemove}
                    isRemoval={true} />
                <button className="save-list">SAVE TO SPOTIFY</button>
            </div>

        )
    }
}
export default Playlist;