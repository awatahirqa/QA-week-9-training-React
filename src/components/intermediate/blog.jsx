'use strict'
import Comments from './Comments.json'
import Post from './post'
import PropTypes from 'prop-types';


const Blog = () => {

    return(
        <>
            {Comments.map((post) => (
                // <p>{post.name}</p>
                <Post key={post.id} name={post.name} mail={post.email}/>
            )) }
        </>
    ); 


}
Post.propTypes = {
    name: PropTypes.string.isRequired,
    mail : PropTypes.string
}

export default Blog; 