import React, { useState } from 'react';

//Components
import Navbar from './Navbar';
import SlideMenu from './SlideMenu';

const Header = () => {

    const [burgerClicked, setBurgerClicked] = useState(false);

    const burgerClickHandler = () => {
        setBurgerClicked(!burgerClicked)
    }

    return (
        <header>
            <Navbar burger={burgerClickHandler} />
            <SlideMenu clicked={{burgerClickHandler, burgerClicked}} />
        </header>
    );
}
 
export default Header;