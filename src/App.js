import { AppRoutes } from './routes/Routes';
import { Header } from './components/header/Header';
// import { GalleryFotoGold } from './pages/gallery-foto-gold/GalleryFotoGold';
// import { Gallery } from './pages/gallery/gallery';
import { Mainpage } from './pages/mainpage/mainpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes>
        <Mainpage/>
        {/* <Gallery /> */}
        {/* <GalleryFotoGold /> */}
      </AppRoutes>
    </div>
  );
}

export default App;
