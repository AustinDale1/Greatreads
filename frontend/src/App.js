import Header from './components/Header';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import BookPage from './pages/BookPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Friends' exact element={<Friends />}/>
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/BookPage/works/:key' element={<BookPage />}/>
          <Route path='/' exact element={<Explore />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
