import '../../App.css'
import MenuItem from './MenuItem'
import { useState } from 'react'

function Hamburger() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

    return (
    <div className='hamburger-menu-wrapper'>
        <div
            className="hamburger-icon-wrapper"
            onClick={() => setIsSideMenuOpen(true)}>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
            <div className="hamburger-icon"></div>
        </div>
        <div className={`hamburger-wrapper${ isSideMenuOpen ? ' hamburger-wrapper-active' : '' }`}>
            <div
                className="hamburger-close-button"
                onClick={() => setIsSideMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
            <MenuItem name={'About'}/>
            <MenuItem name={'Journal'}/>
            <MenuItem name={'Blog'}/>
            <MenuItem name={'Contact'}/>
        </div>
    </div>  
    )
}

export default Hamburger