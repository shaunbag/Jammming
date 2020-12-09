import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Playlist } from '../Playlist/Playlist';
import { SearchResults } from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {   name: 'Reign in Blood',
            artist: 'Slayer' ,
            album: 'Reign in Blood',
            id: 'the Id'}
      ],
      playlistName: 'Metal',
      playlistTracks: [
        {   name: 'Enter SandMan',
            artist: 'Metallica',
            album: 'The Black Album',
            id: 'old'},
        {
            name: 'Whole Lotta Love',
            artist: 'Led Zeppelin',
            album: 'Led Zepplin 3',
            id: 'new'
        }
      ],
      };
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
    }

    addTrack(track) {
        if (!this.state.playlistTracks.find(savedTrack => savedTrack.id !== track.id)) {
        return;
      } else {
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks: this.state.playlistTracks});
      }
    }
    
    removeTrack(track) {
        let newplaylistTracks = this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
        this.setState({playlistTracks: newplaylistTracks});
      }
    
    updatePlaylistName(name){
      this.setState({playlistName: name});
    }

    savePlaylist() {
      let tracksURIs = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
      
    }

    render() {
    return (
    <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
        <Playlist 
          playlistName={this.state.playlistName} 
          playlistTracks={this.state.playlistTracks} 
          onRemove={this.removeTrack}
          onNameChange={this.updatePlaylistName}
          onSave={this.savePlaylist}/>
      </div>
    </div>
  </div>
    )
  };
} 

export default App;
