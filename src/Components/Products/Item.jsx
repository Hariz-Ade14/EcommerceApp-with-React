import { PRODUCTS } from "./ITEMS";
import { useCart } from "react-use-cart";
import { FaStar } from "react-icons/fa";

const Item = (props) => {
  const { addItem } = useCart();

  return (
    <div
      className="col-4 col-sm-3 col-md-2 p-0 mx-2 my-3 border"
    >
      <img src={props.Item.image} className="img-fluid item w-100 m-0" alt="" />
      <div className="about px-2 d-flex bg-none align-items-center justify-content-between mx-auto">
        <p className="">{props.Item.Name}</p>
        <p className="">${props.Item.price}</p>
      </div>
      <div style={{ color: "gold" }} className="px-2 star d-flex">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <button
        id="BTN"
        className="btn my-2 d-flex mx-auto text-white"
        onClick={() => {addItem(props.Item); console.log(props.Item)}}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
