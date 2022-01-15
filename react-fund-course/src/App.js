import React, { useState, useRef } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
  ])

  const [title, setTitle] = useState('');
  const bodyInputRef = useRef(); // для неуправляемого компонента


  const addNewPost = (event) => {
    event.preventDefault(); // отключаем обновление страницы
    console.log(title);
    console.log(bodyInputRef.current.value);

    // function addNewPost() {
    //   // possible
    // }
  }

  return (
    <div className="App">
      <form>
        <MyInput /* управляемый компонент */
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder='Posts name'
        />
        {/* <input ref={bodyInputRef} type='text' /> */}

        <MyInput  /* неуправляемый/ неконтролируемый компонент */
          ref={bodyInputRef}
          type="text"
          placeholder='Posts description '
        />
        <MyButton type='submit' onClick={addNewPost}>Create post</MyButton>
        {/* по умолчанию у кнопки type='submit' */}

      </form>
      <PostList posts={posts} title="Posts about JS" />
    </div>
  );
}

export default App;

