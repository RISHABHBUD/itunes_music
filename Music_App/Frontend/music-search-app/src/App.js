import React from 'react';
import { BrowserRouter , Route , Routes , Link } from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import ResultPage from './Components/ResultPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SearchPage/>} />
        <Route path="/result" element={<ResultPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
