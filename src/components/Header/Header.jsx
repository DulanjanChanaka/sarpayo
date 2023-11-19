import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [footerMenuSelect, setFooterMenuSelect] = useState("/");

    useEffect(() => {
        setFooterMenuSelect(location.pathname);
    }, [location]);

    return (
        <div className='fixed top-0 rounded-b-lg left-0 z-[100] w-full py-4 bg-lime-600 drop-shadow-header-shadow'>
            <div className='flex flex-row justify-between'>
                <div>
                    <h1 className="pl-5 text-sm font-bold">SL <span className="text-white">SNAKES</span></h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex flex-row gap-10 pr-[80px] text-white'>
                        <Link to='/'><li style={{
                            color: footerMenuSelect === '/' ? 'white' : 'rgb(34, 26, 26)'
                        }}>Home</li></Link>
                        <Link to='/Search'><li style={{
                            color: footerMenuSelect === '/Search' ? 'white' : 'rgb(34, 26, 26)'
                        }}>Search</li></Link>
                        <Link to='/Category'><li style={{
                            color: footerMenuSelect === '/Category' ? 'white' : 'rgb(34, 26, 26)'
                        }}>Category</li></Link>
                        <Link to='/About'><li style={{
                            color: footerMenuSelect === '/About' ? 'white' : 'rgb(34, 26, 26)'
                        }}>About</li></Link>
                    </ul>
                    <div className='lg:hidden'>
                        <MenuOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
