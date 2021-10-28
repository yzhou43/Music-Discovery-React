import './App.css';
import { useState } from 'react';

function App() {
  // TODO: Implement your main page as a React component.
  const args = JSON.parse(document.getElementById('data').text);
  const [newArtist, setNewArtist] = useState('');
  const [artistLists, setArtistLists] = useState(args.artist_ids);

  function saveArtist() {
    fetch('/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ artist_list: artistLists }),
    })
      .then((response) => response.json())
      .then((data) => {
        setArtistLists(data.artistLists_server);
        if (data.invalid_num) {
          alert(data.invalid_num + ' artists ID invalid!');
        } else {
          alert('Saved!');
        }
      });
  }

  const deleteArtist = (artistId) => {
    const newArtists = [...artistLists];
    const index = artistLists.findIndex((art) => art == artistId);
    newArtists.splice(index, 1);
    setArtistLists(newArtists);
    console.log(artistLists);
  };

  const addArtist = () => {
    const newArtists = [...artistLists, newArtist];
    setArtistLists(newArtists);
    setNewArtist('');
    console.log(artistLists);
  };

  return (
    <>
      <h1 class="title">
        {args.username}
        's Song Explorer
      </h1>
      {args.has_artists_saved ? (
        <>
          <h2 class="song-name">{args.song_name}</h2>
          <h3 class="song-artist">{args.song_artist}</h3>
          <div>
            <img src={args.song_image_url} width={300} height={300} />
          </div>
          <div>
            <audio controls>
              <source src={args.preview_url} />
            </audio>
          </div>
          <a href={args.genius_url}> Click here to see lyrics! </a>
        </>
      ) : (
        <h2>Looks like you don't have anything saved! Use the form below!</h2>
      )}
      <h1>Your Saved Artists:</h1>
      <table class="table">
        {artistLists.map(function (artistId, index) {
          return (
            <tr>
              <td key={index}>{artistId}</td>
              <td>
                <button type="button" class="delete" onClick={() => deleteArtist(artistId)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <h1>Save a favorite artist ID for later:</h1>
      <div class="add-artist">
        <input value={newArtist} onChange={(e) => setNewArtist(e.target.value)} />
        <button type="button" onClick={addArtist}>
          Add Artist
        </button>
        <button type="button" class="save" onClick={saveArtist}>
          Save
        </button>
      </div>
    </>
  );
}

export default App;
