import { FaUser } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav>
            <FaUser className='icon' />
            <div>
                <h1 className='text_nav'>Douglas lima</h1>
                <span>2 pessoas online</span>
            </div>
        </nav>
    );
};

export default NavBar;
