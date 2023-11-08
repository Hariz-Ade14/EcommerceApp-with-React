import {FaShoppingBag} from "react-icons/fa";
import {useCart} from "react-use-cart"

const NoOfItemsInCart = () => {
    const {totalUniqueItems} = useCart();
    return (  
        <div>
           <FaShoppingBag size={30}/>
            <p className='badge text-light bg-danger'>{totalUniqueItems}</p>
        </div>
    );
}
 
export default NoOfItemsInCart;