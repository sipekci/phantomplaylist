import React from 'react';
import './App.css';
import LookUp from '../LookUp/LookUp';
import SearchOutput from '../SearchOutput/SearchOutput';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className = "highlight"> Phantom Playlist</h1>
        <div className ="App">
          <LookUp /> 
        <div className ="App-playlist">
          <SearchOutput />
          {/* <Playlist /> */}
        </div>
        </div>
      </div>
    )
  }
}

export default App;
