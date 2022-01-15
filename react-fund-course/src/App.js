import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'dd' },
    { id: 2, title: 'cc', body: 'aa' },
    { id: 3, title: 'bb', body: 'bb' },
  ])
  const [selectedSort, setSelectedSort] = useState('');

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      {/* Сортировка */}
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: 'title', name: 'by name' },
            { value: 'body', name: 'by description' }
          ]}
        />
      </div>
      {/* Условная отрисовка */}
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title="Posts about JS" />
        :
        <h1 style={{ textAlign: 'center' }}>
          Posts not found
        </h1>
      }


    </div>
  );
}

export default App;

