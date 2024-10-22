import './index.css';
import P from 'prop-types';

const PostInformation = ({title, content}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default PostInformation;

PostInformation.propTypes = {
    title: P.string.isRequired,
    content: P.string.isRequired,
};