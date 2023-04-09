
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Sidebar from './components/Sidebar';
import Acceuil from './pages/acceuil/Acceuil';
import Emprunt from './pages/emprunt/Emprunt';
import Emprunteur from './pages/emprunteur/Emprunteur';
import Exemplaire from './pages/exemplaire/Exemplaire';
import Livre from './pages/livre/Livre';
import Login from './pages/login/Login';

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/loging" element={<Login />}/>
        <Route path="/acceuil" element={<Acceuil />}/>
        <Route path="/livre" element={<Livre />}/>
        <Route path="/emprunt" element={<Emprunt />}/>
        <Route path="/emprunteur" element={<Emprunteur />}/>
        <Route path="/exemplaire" element={<Exemplaire />}/>
      </Routes>
  </Sidebar>
</BrowserRouter> 
  );
}

export default App;
