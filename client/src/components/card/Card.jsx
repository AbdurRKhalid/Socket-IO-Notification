import './card.css';
import Heart from '../../img/heart.svg';
import Share from '../../img/share.svg';
import Info from '../../img/info.svg';
import Comment from '../../img/comment.svg';
import FilledHeart from '../../img/heartFilled.svg';
import { useState } from 'react';

const Card = ({ post, socket, user }) => {
    const [liked, setLiked] = useState(false);

    const handleNotification = () => {
        setLiked(true);
    }

    if (!post) {
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
                {
                    liked ? (<img src={FilledHeart} className='cardIcon' />) :
                        <img src={Heart} className='cardIcon' onClick={handleNotification}/>
                }
                <img src={Comment} className='cardIcon'/>
                <img src={Share} className='cardIcon'/>
                <img src={Info} className='cardIcon'/>
            </div>
        </div>
    )
}

export default Card;