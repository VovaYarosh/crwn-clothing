import {CartContext} from '../../contexts/cart.context'
import {useContext} from "react";

import { ShoppingIcon,ItemCount, CartIconContainer} from './cart-icon.styles'


const CartIcon = () => {
	const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext)

	return (
		<CartIconContainer onClick={()=> setIsCartOpen(!isCartOpen)}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon