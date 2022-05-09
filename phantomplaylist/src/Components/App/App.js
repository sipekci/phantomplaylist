import React from 'react';
import './App.css';
import LookUp from '../LookUp/LookUp';
import SearchOutput from '../SearchOutput/SearchOutput';
import Playlist from '../Playlist/Playlist';
import Tracklists from '../Tracklists/Tracklists';
import Track from '../Track/Track';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchOutput: [{name: 'name1', artist: 'artist1', image: 'img1', id:1},
      {name: 'name2', artist: 'artist2', image: 'img2', id:2},
      {name: 'name3', artist: 'artist3', image: 'img3', id:3}],
      playlistName: 'My Playlist',
      playlistTrack: [{name: 'pLname1', artist: 'pLartist1', image: 'pLimg1', id:4},
      {name: 'pLname2', artist: 'pLartist2', image: 'pLimg2', id:5},
      {name: 'pLname3', artist: 'pLartist3', image: 'pLimg3', id:6}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  
  addTrack(track){
    let tracks = this.state.playlistTrack;
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTrack: tracks})
  }

  removeTrack(track){
    let tracks = this.state.playlistTrack;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({playlistTrack: tracks});
  }
  render() {
    return (
      <div>
        <h1 className = "highlight"> Phantom Playlist</h1>
        <div className ="App">
          <LookUp /> 
        <div className ="App-playlist">
          <SearchOutput searchOutput={this.state.searchOutput}
                onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName}
            playlistTrack = {this.state.playlistTrack}
            onRemove = {this.removeTrack}
            />
        </div>
        </div>
      </div>
    )
  }
}

export default App;
