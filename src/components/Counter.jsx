import React, {useState} from 'react'

const Counter = () => {
    //state darom virsuje, importuojam
    //1-current, 2-method state update, 3-inicial(pradine) value

    const [count, setCount] = useState(0) //setCount atnaujinsim count reiksme.Pradine 0, nes desim +1 -1
    
    // funkcija aprasome visada virs "return"
    const decrementCount = () => {
        setCount(prevCount => prevCount -1)
    }
    const incrementCount = () => {
        setCount(prevCount => prevCount +1)
    }

    return (
    <div>
        {/* pamazins count reiksme */}
        <button onClick={decrementCount}>-</button> 
        {/* span kokia gausim reiksme */}
        <span>{count}</span>
        {/* padidins count reiksme */}
        <button onClick={incrementCount}>+</button>
        

    </div>
  )
}

export default Counter