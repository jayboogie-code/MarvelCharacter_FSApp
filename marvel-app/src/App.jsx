import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavbarComponent from './components/Navbar';
import Characters from './pages/Characters';
import CreateCharacter from './pages/CreateCharacter';
import CharacterDetail from './pages/CharacterDetail';
import EditCharacter from './pages/EditCharacter';
import NotFound from './pages/NotFound'; 

const App = () => {
  const [characters, setCharacters] = useState([]);
  
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters characters={characters} setCharacters={setCharacters} />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/character/:id/edit" element={<EditCharacter />} />
        <Route path="*" element={<NotFound />} /> {/* Use the NotFound component */}
      </Routes>
    </div>
  );
};

export default App;
