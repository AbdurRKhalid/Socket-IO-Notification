import './navbar.css';
import Notification from '../../img/notification.svg';
import Message from '../../img/message.svg';
import Settings from '../../img/settings.svg';

function Navbar({ socket }) {
    return(
        <div className="navbar">
            <span className='log'>Lama Logo</span>
            <div className="icons">
                <div className="icon">
                    <img src={Notification} className='iconImg' alt='Logo Image' />
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Message} className='iconImg' alt='Message Icon' />
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Settings} className='iconImg' alt='Settings Icon' />
                    <div className="counter">2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;