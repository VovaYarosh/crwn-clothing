import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import {CartContext} from '../../contexts/cart.context'
import {useContext} from "react";

import './cart-icon.styles.scss'


const CartIcon = () => {
	const {setIsCartOpen, isCartOpen} = useContext(CartContext)

	return (
		<div className='cart-icon-container' onClick={()=> setIsCartOpen(!isCartOpen)}>
			<ShopingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	)
}

export default CartIcon