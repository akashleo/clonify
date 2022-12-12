import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
// import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        Navbar
      </Box>
    </BrowserRouter>
  );
};

export default App;
