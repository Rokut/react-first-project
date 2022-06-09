import React, {useState} from 'react' //state naudosim prekiu krepseliui
import Product from '../Product/Product'


const Productlist = () => {
  
  //reik state, kur issaugosim ta krepseli
  const [items, setItems] = useState([]);
  //aprasom funkcija, kad idetume preke i krepseli
  const addToCart = (product) => {
    console.log(product);

    //1- tikrinti ar tokia preke yra krepselyje
    //2- jeigu nera, prideti savybe kiekis, ja padidinti ir reiksme 1
    //3- jeigu preke yra,surast savybe kieks ir ja padidinti (kiekis++)

    

  }

  return (
    <div>
      <Product addToCart={addToCart}/>
    </div>
  )
}

export default Productlist