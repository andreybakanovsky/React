import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {

    const [post, setPost] = useState({
        title: '',
        body: ''
    });

    const addNewPost = (event) => {
        event.preventDefault(); // отключаем обновление страницы
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' });
    }

    return (
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
    )
}

export default PostForm;