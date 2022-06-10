import React, {useState} from 'react' //state naudosim prekiu krepseliui
import Product from '../Product/Product'


const Productlist = () => {
  
  //reik state, kur issaugosim ta krepseli
  const [items, setItems] = useState([]);
  //aprasom funkcija, kad idetume preke i krepseli
  const addToCart = (product) => {
    // console.log(product);

    //1- tikrinti ar tokia preke yra krepselyje
    //reikia lokalaus kintamojo, kad pasidaryti duomenu kopija

    let myCart = [...items]; //duomenu kopija
    //turim patikrinti ar yra tokia preke krepselyje ar nera
    //jeigu yra +1 vnt , +2vnt. Jeigu nera - ideti i krepseli
    let arYra = myCart.find((preke) => product.name === preke.name); //eina per masyva ir ziuri ar yra
    console.log(arYra)
    
    
    //2- jeigu nera, patikrinti ar yra sandelyje, prideti savybe kiekis, ja padidinti ir reiksme 1
    //3- jeigu preke yra,surast ar yra sandelyke, savybe kiekis(krepselyje) ir ja padidinti (kiekis++)

    if(arYra && arYra.kiekis < product.countInStock){ //lyginam su kiekis: 1, jeigu 1 ir daugiau , galim is sandelio prideti i krepseli
      
      arYra.kiekis++;

    }else if(arYra===undefined && product.countInStock > 0){ 
      arYra={
        ...product,
        kiekis: 1
      }
      myCart.push(arYra);
  }

  else{
    alert('prekes nera sandelyje')
  }
  setItems(myCart);

  }
  console.log(items) //paziureti items krepselyje
  return (
    <div>
      <Product addToCart={addToCart}/>
    </div>
  )
}


export default Productlist