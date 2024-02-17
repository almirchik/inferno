import { products } from '../../data';
import './Action.css';
import Product from '../Product/Product';

export default function Action(){

    return(

        <>
        
        <div className="action">

        {products.map((product, id) => ( 
            <Product key={id} {...product} /> 
          ))}

        </div>
        
        </>



    )


}