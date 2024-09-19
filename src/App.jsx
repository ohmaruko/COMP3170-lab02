import { artists } from './best-selling-music-artists';
import Header from './components/Header';
import ArtistDetails from './components/ArtistDetails';

const artistsList = artists.map(artist => {
  return(
    <ArtistDetails 
      key={artist.name} 
      photo={artist.photo_url} 
      name={artist.name} 
      country={artist.country}
      year={artist.years_active}
      />
  )
})

function App() {

  return (
    <div className="app">
      <Header />
      {artistsList}
    </div>
  );
}

export default App;
