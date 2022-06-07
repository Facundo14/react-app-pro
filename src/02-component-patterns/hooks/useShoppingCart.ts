import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product}: {count:number; product: Product}) => {
        // console.log(count, product);

        setShoppingCart( oldShoppingCart => {
            
            // if count is 0, remove product from cart
            if (count === 0) {
                const { [product.id]: toDelte, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {
                    ...product,
                    count
                }
            }
        })
    }
    
    return {
        shoppingCart,
        onProductCountChange,
    }
}
