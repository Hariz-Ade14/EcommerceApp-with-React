import Item from "./Item";
// import { PRODUCTS } from "./ITEMS";

const ProductDetails = ({PRODUCTS}) => {
    return ( 
        <div className="container mt-5">
             <p className="close">&times</p>
             <h1>Hello</h1> 
             <img src={PRODUCTS.image} alt=""/>  
        </div>
     );
}
 
export default ProductDetails;