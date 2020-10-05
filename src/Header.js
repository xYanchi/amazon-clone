import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            < Link to='/'>
                <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className='header_search'>
                <input className='header_search_input' type="text" />
                <SearchIcon className='header_search_icon' />
            </div>

            <div className='header_nav'>
                {/* Only redirect to login page if there are no user (Not when we sign out) */}
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                        <span className='header_option_line_one'>
                            Hello, {user ? user.email : 'Guest'}
                        </span>
                        <span className='header_option_line_two'>
                            {/* If user is present */}
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className='header_option'>
                        <span className='header_option_line_one'>
                            Returns
                    </span>
                        <span className='header_option_line_two'>
                            & Orders
                    </span>
                    </div>
                </Link>
                <div className='header_option'>
                    <span className='header_option_line_one'>
                        Try
                    </span>
                    <span className='header_option_line_two'>
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className='header_option_basket'>
                        <ShoppingCartIcon className='header_basket_icon' />
                        <span className='header_option_line_two header_basket_count'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
