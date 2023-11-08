import Item from "../Products/Item";
import { PRODUCTS } from "../Products/ITEMS";

const Shop = () => {
    return (  
        <div className="container">
             <div className="row bg-none d-flex justify-content-center" style={{marginTop: "100px"}}>
                {PRODUCTS.map(item => {
                    return (
                        <Item key={item.id} Item={item}/>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Shop;