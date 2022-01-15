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

  const [post, setPost] = useState({
    title:  '',
    body: ''
  });

  const addNewPost = (event) => {
    event.preventDefault(); // отключаем обновление страницы
    setPosts([...posts, {...post, id: Date.now()}]);
    /* не изменяем состояние напрямую - мы берем старый массив и к нему добавляем новый Post */

    setPost({ title: '', body: '' });
  }

  return (
    <div className="App">
      <form>
        <MyInput /* управляемый компонент */
          value={post.title}
          onChange={event => setPost({ ...post, title: event.target.value })}
          type="text"
          placeholder='Posts name'
        />
        <MyInput
          value={post.body}
          onChange={event => setPost({ ...post, body: event.target.value })}
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

