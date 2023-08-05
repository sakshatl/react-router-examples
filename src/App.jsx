import { Route, Routes } from 'react-router';
import './App.css'

// protected route
import ProtectedRoute from './ProtectedRoute';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

// components
import Navbar from './components/Navbar';

function App() {

  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
