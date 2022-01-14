import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostItem from './components/PostItem';
import './styles/App.css';
function App() {
  
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'Javascript', body: 'Desctition' }} />
      <PostItem post={{ id: 2, title: 'Javascript', body: 'Desctition' }} />
      <PostItem post={{ id: 3, title: 'Javascript', body: 'Desctition' }} />
      <PostItem post={{ id: 4, title: 'Javascript', body: 'Desctition' }} />

    </div>
  );
}

export default App;

