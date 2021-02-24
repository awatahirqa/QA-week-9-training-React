'use strict';
import PropTypes from 'prop-types';
// const Post = ({name,mail}) => {
const Post = (props) => {
    console.log(props);
    const { name, mail } = props;

    return (
        <>
            <h3>{props.headerText}</h3>
            <p>{name}</p>
            <a href="mailto:wtahir@qa.com">{mail}</a>
        </>
    );
}
Post.defaultProps = {
headerText:'Use this Text if nothing is being provided'

}

export default Post; 