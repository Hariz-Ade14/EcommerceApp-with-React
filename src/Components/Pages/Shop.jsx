import Item from "../Products/Item";
import { PRODUCTS } from "../Products/ITEMS";
import img1 from "../../assets/ecommerce images/irene-kredenets-tcVH_BwHtrc-unsplash.jpg";
import img2 from "../../assets/ecommerce images/erik-mclean--iJgjj33eEk-unsplash.jpg";
import img3 from "../../assets/ecommerce images/andres-jasso-PqbL_mxmaUE-unsplash.jpg";
import img4 from "../../assets/ecommerce images/markus-winkler-PQmXUxmfR44-unsplash.jpg";
import {useRef} from "react";

const Shop = () => {
    return (  
        <div className="container-fluid SHOP" id="">
             <div className="row mb-5 d-flex justify-content-center" style={{marginTop: "100px"}}>
                {PRODUCTS.map(item => {
                    return (
                        <Item
                             key={item.id} 
                             Item={item}
                        />
                    )
                })}
            </div>

            <div className="row d-flex justify-content-center my-5">
                      <div className="col-5 col-sm-3 col-md-2 mx-2 mx-md-1 mx-sm-4 my-2 shadow-sm p-0">
                           <img loading="lazy" src={img1} alt="" className="others my-0"/>
                           <p className="text-center my-2">Accessories</p>
                      </div>
                      <div className="col-5 col-sm-3 col-md-2 mx-2 mx-md-1 mx-sm-4 my-2 shadow-sm p-0">
                           <img loading="lazy" src={img2} alt="" className="others my-0"/>
                           <p className="text-center my-2">Shoes</p>
                      </div>
                      <div className="col-5 col-sm-3 col-md-2 mx-2 mx-md-1 mx-sm-4 my-2 shadow-sm p-0">
                           <img loading="lazy" src={img3} alt="" className="others my-0"/>
                           <p className="text-center my-2">Shirts</p>
                      </div>
                      <div className="col-5 col-sm-3 col-md-2 mx-2 mx-md-1 mx-sm-4 my-2 shadow-sm p-0">
                           <img loading="lazy" src={img4} alt="" className="others my-0"/>
                           <p className="text-center my-2">Jeans</p>
                      </div>
            </div>
        </div>
    );
}
 
export default Shop;