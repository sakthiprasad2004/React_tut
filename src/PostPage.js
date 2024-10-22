import React from 'react'
import { useParams,Link,  useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import DataContext from './context/DataContext'
import { useStoreState,useStoreActions } from 'easy-peasy';

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const deletePost = useStoreActions((actions) => actions.deletePost); // Correct for actions
  const getPostById = useStoreState((state) => state.getPostById); // Correct for state access
  
  const post = getPostById(id);
  //dont need async thunk is an asunc
  const handleDelete = (id) => {
    deletePost(id);
    navigate('/');
  };

  return (
    <main className='PostPage'>
      <article className='post'>
        {post ? (
          <>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className='editButton'>Edit Post</button>
            </Link>
            <button className='deleteButton' onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        ) : (
          <>
            <h2>Post not found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to='/'>Visit our homepage...</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;