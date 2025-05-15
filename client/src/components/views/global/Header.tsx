import css from '../../../styles/styles'

import {Link} from "react-router-dom";


const Header = () => {
    const {HeaderContainer, HeaderCSS, ButtonUI} = css
    return (

        <HeaderContainer>
            <HeaderCSS.Logo>
                <Link to='/' style={{textDecoration: 'none',color: 'black',cursor: 'pointer'}} >
                    CAD Exchanger
                </Link>
            </HeaderCSS.Logo>

            <HeaderCSS.MenuContainer>
                <Link to='/'><ButtonUI>Main</ButtonUI></Link>
                <Link to='/contact' ><ButtonUI>Contact us</ButtonUI></Link>

            </HeaderCSS.MenuContainer>
        </HeaderContainer>
    );
};

export default Header;