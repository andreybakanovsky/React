import React, { useState } from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
               {title}
            </h1>
            {posts.map((post, index) => // передадим номер элемента в массиве
                <PostItem number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;
