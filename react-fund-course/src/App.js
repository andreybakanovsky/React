import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import './styles/App.css';
function App() {
  const [value, setValue] = useState('Text in an inpit'); // it's hook

  return (
    <div className="App">

      <div className="post" >
        <div className='post__content'>
          <strong>1. Javascript </strong>
          <div>
            Javascript - programming language
          </div>
        </div>
        <div className='post__btns'>
          <button>Delete</button>
        </div>
      </div>

    </div>
  );
}

export default App;

