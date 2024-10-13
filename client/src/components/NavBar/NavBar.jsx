import { FaUser } from 'react-icons/fa';

const NavBar = ({ userName, numberUsers }) => {
    return (
        <nav>
            <FaUser className='icon' />
            <div>
                <h1 className='text_nav'>{userName}</h1>
                <span>{numberUsers} pessoas online</span>
            </div>
        </nav>
    );
};

export default NavBar;
