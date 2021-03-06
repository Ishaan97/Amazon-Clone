import React from 'react'
import {connect} from "react-redux";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-cart.svg"

import "./cart-icon.styles.css";


class CartIcon extends React.Component{
    render(){
        const {toggleCartHidden, itemCount} = this.props;
        return (
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon"/>
                <span className = "item-count">{itemCount}</span>
            </div>

        );
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);