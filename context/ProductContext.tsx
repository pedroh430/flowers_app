import { Children, createContext, useContext, useState} from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({children}){
    const [products, setProducts] = useState([]);
    
    function addProduct(product){
      setProducts(prev => [...prev, product]);
    }

    return(
      <ProductContext.Provider value= {{products, addProduct}}>
      {children}
      
      </ProductContext.Provider>
    )
}

export function useProductContext(){
  return useContext(ProductContext);
}