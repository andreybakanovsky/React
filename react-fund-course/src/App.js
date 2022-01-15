import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
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

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {/* Условная отрисовка */}
      {posts.length !== 0
        ?
         <PostList remove={removePost} posts={posts} title="Posts about JS" />
        :
        <h1 style={{textAlign: 'center'}}>
           Posts not found 
        </h1>
      }

      
    </div>
  );
}

export default App;

