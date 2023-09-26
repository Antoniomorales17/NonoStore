import React, { useState } from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Cart from '../Cart/Cart';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left"></div>
                <div className="item">
                    <img src="/img/en.png" alt="" />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>EUR</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Hombre</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Mujer</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/3">Niños</Link>
                </div>
                <div className="center">
                    <Link className='link' to="/">NONOSTORE</Link>
                </div>
                <div className="right">
                <div className="item">
                    <Link className='link' to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Contacto</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className='icons'>
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <div className='cartIcon' onClick={()=>setOpen(!open)}>
                        <ShoppingCartIcon />
                        <span>0</span>
                        
                    </div>
                    
                    
                </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    );
}

export default Navbar;
