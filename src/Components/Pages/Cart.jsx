import {useCart} from "react-use-cart";
import { PRODUCTS } from "../Products/ITEMS";
import {FaTrash} from "react-icons/fa";

const Cart = () => {
    const {
           items,
           isEmpty,
           addItem,
           totalItems,
           totalUniqueItems,
           cartTotal,
           removeItem,
           updateItemQuantity,
           emptyCart
    } = useCart();

    if(isEmpty) {
        return(
             <div className="d-flex align-items-center justify-content-center">
                  <h1>Your Cart is Empty</h1>
              </div>
        )
    }

    return ( 
        <div className="container">
            <div className="row" style={{marginTop:"100px"}}>
                 {items.map(item => {
                    return (
                      <div className="col-md-12 border my-5">
                           <div className="row m-3 d-flex align-items-center justify-content-center">
                                <div className="col-md-4 d-flex align-items-center justify-content-center">
                                    <img src={item.image} className="itemIncart m-0" alt="" />
                                </div>
                                <div className="col-md-4 aboutInCart text-center px-2">
                                    <p className="">{item.Name}</p>
                                    <p className="">${item.price}</p>
                                    <p className="mx-2">Quantity({item.quantity})</p>

                                    <div className="d-flex justify-content-center">
                                        <button className="subtract btn mx-2" onClick={() => updateItemQuantity(item.id , item.quantity - 1)}>-</button>
                                        <button className="add btn mx-2" onClick={() => updateItemQuantity(item.id , item.quantity + 1)}>+</button>
                                        <button className="add btn mx-2" onClick={() => removeItem(item.id)}><FaTrash/></button>
                                    </div>
                                </div>
                           </div>
                           
                     </div>
                    )
                 })}
                
            </div>
            {console.log(items)}
            <h3>Total Price = ${cartTotal}</h3>
            <button onClick={() => {emptyCart()}} className="btn my-5 btn-danger">Clear Cart</button>
        </div>
        
     );
}
 
export default Cart;