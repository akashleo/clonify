//import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

// import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
// import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        Navbar
        <Routes>
          <Router path="/" exact element={<Feed/>} />
          <Router path="/video/:id" exact element={<VideoDetail/>}/>
          <Router path="/channel/:id" exact element={<ChannelDetail/>}/>
          <Router path="/search/:searchTerm" exact element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
