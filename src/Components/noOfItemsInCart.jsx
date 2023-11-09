import {FaShoppingBag} from "react-icons/fa";
import {useCart} from "react-use-cart"

const NoOfItemsInCart = () => {
    const {totalUniqueItems} = useCart();
    return (  
        <div style={{position:"relative"}}>
           <FaShoppingBag size={24}/>
            <p className='text-light text-center bg-danger d-flex align-items-center justify-content-center' style={{position:"absolute",top:"0px",left:"15px",fontSize:"12px",borderRadius:"50%",width:"17px",height:"17px"}}>{totalUniqueItems}</p>
        </div>
    );
}
 
export default NoOfItemsInCart;