import { PRODUCTS } from "./ITEMS";
import { useCart } from "react-use-cart";
import { FaStar } from "react-icons/fa";
import { useRef } from "react";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

const Item = ({Item}) => {
  const { addItem } = useCart();

  const onClickRef = useRef();

  const showProduct = () => {
         return (
               <div className="container">
                    <div className="row">
                         <div className="col-md-6">
                            <img src={Item.image} alt=""/>
                         </div>
                         <div className="col-md-6">
                            <h3>{Item.Name}</h3>
                         </div>
                    </div>
                   
               </div>
         )

  } 

  return (
    <div
      className="col-4 col-sm-3 col-md-2 p-0 mx-2 my-3 border"
      id="prod"
    >
      <img loading="lazy" src={Item.image} className="img-fluid item w-100 h-100 m-0" alt="" />
      {/* <div className="about px-2 d-flex bg-none align-items-center justify-content-between mx-auto"> */}
        <Link className="text-center fw-bold" to={`/details/${Item.Name}`}>{Item.Name}</Link>
        <p className="text-center">${Item.price}</p>
      {/* </div> */}
      {/* <a href={<ProductDetails/>}>Details</a> */}
      {/* <Link ref={onClickRef} onClick={() => handleClick()} to="/details">Details</Link> */}
      {/* <div style={{ color: "gold" }} className="px-2 star d-flex">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div> */}
      <button
        id="BTN"
        className="btn my-3 d-flex mx-auto text-white"
        onClick={() => {addItem(Item); console.log(Item)}}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
