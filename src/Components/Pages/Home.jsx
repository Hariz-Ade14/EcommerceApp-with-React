import img1 from "../../assets/ecommerce images/irene-kredenets-tcVH_BwHtrc-unsplash.jpg";
import img2 from "../../assets/ecommerce images/erik-mclean--iJgjj33eEk-unsplash.jpg";
import img3 from "../../assets/ecommerce images/andres-jasso-PqbL_mxmaUE-unsplash.jpg";
import img4 from "../../assets/ecommerce images/markus-winkler-PQmXUxmfR44-unsplash.jpg";
import img5 from "../../assets/ecommerce images/alireza-dolati-OVS3rqXq9gg-unsplash.jpg";
import img6 from "../../assets/ecommerce images/pascal-brauer-ttdio_nOPjQ-unsplash.jpg";
import img7 from "../../assets/ecommerce images/malik-skydsgaard-qATVOVghbTk-unsplash.jpg";
import img8 from "../../assets/ecommerce images/dom-hill-nimElTcTNyY-unsplash.jpg";
import img9 from "../../assets/ecommerce images/sirio-7_ZNLVlJchs-unsplash.jpg";
import { FaPlaneDeparture , FaCopyright , FaTag , FaAmazonPay , FaRegArrowAltCircleLeft} from "react-icons/fa";

const Home = () => {
    return (  
        <div>
           <div className="home">
             <h1>Welcome to the world of Fashion</h1>
           </div>
           <div className="newArrivals">
                <p className="text-center mt-5 h1">New Arrivals</p>
                <div className="row d-flex justify-content-center my-5">
                      <div className="col-sm-2 mx-1 p-0">
                           <img src={img1} alt="" className="w-sm-100"/>
                           <p className="text-center my-2">Bags</p>
                      </div>
                      <div className="col-sm-2 mx-1 p-0">
                           <img src={img2} alt="" className="w-sm-100"/>
                           <p className="text-center my-2">Nike Jordan</p>
                      </div>
                      <div className="col-sm-2 mx-1 p-0">
                           <img src={img3} alt="" className="w-sm-100"/>
                           <p className="text-center my-2">Nike Air Force</p>
                      </div>
                      <div className="col-sm-2 mx-1 p-0">
                           <img src={img4} alt="" className="w-sm-100"/>
                           <p className="text-center my-2">Sweatshirts</p>
                      </div>
                </div>
           </div>
           <div className="row featured my-5 d-flex justify-content-center discover">
                <h1 className="text-center my-5">Featured</h1>
                <div className="col-10 col-sm-4 d-flex align-items-center justify-content-center p-0">
                     <div className="verona">
                       <img src={img5} className="img-fluid shadow" alt=""/>
                       <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Saepe eos temporibus provident veniam assumenda vitae.
                                Autem eius, quidem dicta iure numquam sequi perspiciatis,
                                ea quos error reiciendis incidunt veritatis consectetur,
                                <br/>
                                <button className="btn mt-3">Discover More</button>
                             </p>
                       </div>
                       
                     </div>
                </div>
                <div className="col-sm-4 text-center d-flex justify-content-center align-items-center">
                     <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                     </p>
                </div>
               
           </div>
           <div className="row d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>
                <div className="col-10 col-sm-5">
                     <div className="row p-0">
                          <div id="services" className="col-6 m-0 p-0 w-50 bg-danger">
                               <img src={img6} className="IMG w-100" alt=""/>
                          </div>
                          <div className="col-6 w-50 p-0 m-0">
                               <img src={img7} className="IMG w-100" alt=""/>
                          </div>
                          <div className="col-6 m-0 p-0 w-50">
                               <img src={img8} className="IMG w-100" alt=""/>
                          </div>
                          <div className="col-6 m-0 p-0 w-50">
                               <img src={img9} className="IMG w-100" alt=""/>
                          </div>
                     </div>
                </div>
                <div className="col-10 p-5 col-sm-5 text-center d-flex align-items-center justify-content-center">
                     <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit numquam cupiditate reprehenderit, facilis, temporibus quae quasi, facere mollitia incidunt expedita odit asperiores. Porro id at aliquid earum. Aspernatur, beatae asperiores?
                     </p>
                </div>
           </div>
           <div className="row mb-5 d-flex justify-content-center align-items-center" style={{marginTop:"100px" , color:"red"}}>
                <div id="services" className="col-6 col-sm-3 text-center">
                     <h5>Free Shihpping</h5>
                     <p><FaPlaneDeparture size={30} className="mx-2"/>Orders over 10,000</p>
                </div>
                <div id="services" className="col-6 col-sm-3 text-center">
                     <h5>Best Prices</h5>
                     <p><FaTag size={30} className="mx-2"/>Guaranteed</p>
                </div>
                <div id="services" className="col-6 col-sm-3 text-center">
                     <h5>100% secure transactions</h5>
                     <p><FaAmazonPay size={30} className="mx-2"/>Online Payment</p>
                </div>
                <div id="services" className="col-6 col-sm-3 text-center">
                     <h5>Free Returns</h5>
                     <p><FaRegArrowAltCircleLeft size={30} className="mx-2"/>Within 30days</p>
                </div>
           </div>
          
        </div>
       
    );
}
 
export default Home;