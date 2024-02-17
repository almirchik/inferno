import './Product.css';
import { NavLink } from "react-router-dom";

export default function Product({id,photo,name,price}){

    return(
        <>
        
        <NavLink to={`${id}`}>
        <div className="product">
            <div className="product-img">
            <img src={photo} alt="" />
            </div>
            <div className="product-name">
                <p>{name}</p>
            </div>
            <div className="product-price">
                <p>{price}.00 ₽</p>
            </div>
            
        </div>
        </NavLink>
        </>
    )

}
