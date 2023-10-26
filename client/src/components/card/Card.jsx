import './card.css';
import Heart from '../../img/heart.svg';
import Share from '../../img/share.svg';
import Info from '../../img/info.svg';
import Comment from '../../img/comment.svg';

const Card = ({ post }) => {
    if(!post) {
        return null;
    }
    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} className='userImg' alt="" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} className='postImg' alt="" />
            <div className="interaction">
                <img src={Heart} className='userImg' alt="" />
                <img src={Comment} className='userImg' alt="" />
                <img src={Share} className='userImg' alt="" />
                <img src={Info} className='userImg' alt="" />
            </div>
        </div>
    )
}

export default Card;