import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            <div className='header_search'>
                <input className='header_search_input' type="text" />
                <SearchIcon className='header_search_icon' />
            </div>

            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_option_line_one'>
                        Hello, Sign in
                    </span>
                    <span className='header_option_line_two'>
                        Account
                    </span>
                </div>
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
                <div className='header_option_basket'>
                    <ShoppingCartIcon className='header_basket_icon' />
                    <span className='header_option_line_two header_basket_count'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
