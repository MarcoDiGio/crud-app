import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Insert from './pages/Insert';
import { Toaster } from 'react-hot-toast';
import { PersonListProvider } from './context/PersonListContext';
import './styles/globals.css';

export default function App() {
  return (
    <>
      <PersonListProvider>
        <Router>
          <Routes>
            <Route path='/crud-app/' element={<Home />} />
            <Route path='/crud-app/insert' element={<Insert />} />
          </Routes>
          <Toaster />
        </Router>
      </PersonListProvider>
    </>
  )
}
