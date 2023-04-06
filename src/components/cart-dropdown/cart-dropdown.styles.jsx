import styled from "styled-components";

import {BaseButton, GoogleSignInButton, InvertedButton} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 320px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  overflow: hidden; /* added overflow hidden to hide scrollbar */ 
${BaseButton}, ${GoogleSignInButton}, ${InvertedButton}
 {
  margin-top: auto;
}
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  /* changed to overflow-y to hide only vertical scrollbar /
		padding-right: 15px; / added padding to avoid content being overlapped by scrollbar */
`

//   button {
//     margin-top: auto;
//   }
// }





