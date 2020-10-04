import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
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
                <Link to='/login'>
                    <div className='header_option'>
                        <span className='header_option_line_one'>
                            Hello, Sign in
                    </span>
                        <span className='header_option_line_two'>
                            Account
                    </span>
                    </div>
                </Link>
                <div className='header_option'>
                    <span className='header_option_line_one'>
                        Returns
                    </span>
                    <span className='header_option_line_two'>
                        & Orders
                    </span>
                </div>
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
