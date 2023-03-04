import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import Edit from './components/Edit'
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App