import React, {useState, useEffect} from 'react'

const Posts = () => {
    //state visada apsirasome virsuje
    //state pavadinimas(resourseType), metodas - keisiantis state reiksme(setresourseType), pradine state reiksme(useState('posts');
    const [resourseType, setResourseType] = useState('posts');
    const [items, setItems] = useState([]);
    

    //reikalingas, kad zinotu,kada daryti uzklausa
    //turi dvi reiksmes: fnkcijos iskvietima ir parametra, kuriam pasikeitus bus kvieciama nurodyta fnkcija
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourseType])

    return (
    <div>
        <div>
            <button onClick={() => setResourseType('posts')}>Posts</button>
            <button onClick={() => setResourseType('users')}>Users</button>
            <button onClick={() => setResourseType('comments')}>Comments</button>
        </div>
        <h3>{resourseType}</h3>
        {/* {gautu duomenu is api spausdinimas} */}
        {/* map fnkcija nori grazinti du: item ir index */}
        {items.map((item, index) => {
            return <pre key={index}>{JSON.stringify(item)}</pre>
        })}
    </div>
  )
}

export default Posts

//state - vieta, kur saugoma info(pvz prekiu krepselis)
//ir atnaujinti darba su jais, juos pakeisti, atnaujinti

//props - read only

