import {Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import {UserContext} from "../../contexts/user.context";
import {CartContext} from "../../contexts/cart.context"

import {signOutUser} from "../../utils/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {LogoContainer, NavigationContainer, NavLinks, NavLink} from "./navigation.styles";


const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext)

	return (
		<Fragment>
			<NavigationContainer>

				<LogoContainer to='/'>
					<CrwnLogo className='logo'/>
				</LogoContainer>

				<NavLinks>
					<NavLink className="nav-link" to='/'>
						SHOP
					</NavLink>
					{
						currentUser ? (
							<NavLink as='span' onClick={signOutUser}>Sign out</NavLink>)
							: (<NavLink className="nav-link" to='auth'>Sign in</NavLink>
						)
					}
					<CartIcon/>
				</NavLinks>
				{isCartOpen && <CartDropdown/>}
			</NavigationContainer>
			<Outlet/>

		</Fragment>
	)
}

export default Navigation