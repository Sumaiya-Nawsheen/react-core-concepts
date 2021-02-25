import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const products =[
        {name:'Illustrator', price:'$60.99'},
        {name:'PhotoShop', price:'$90.99'},
        {name:'PDF Reader', price:'$6.99'},
        {name:'PDF EI', price:'$24.99'}
    ]
    // const productNames = products.map(product => product.name)
    // const productPrices = products.map(product => product.price)
    // console.log(productNames)
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" / >
            <ul>
                {
                  products.map(product => <li>{product.name}</li>)  
                }
            </ul>
            {
                products.map(pd=> <Product product={pd}></Product>)
            }
            
        <p >
        Edit < code > src / App.js </code> and save to reload. </p>
        <Counter></Counter>
        <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product>
        
        < Person > </Person>  
        <Person > </Person> 
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        My first react paragraph. </a> 
       </header> 
          </div>
    );
}

function Counter(){
    const [count,setCount]= useState(10);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick= {()=> setCount(count - 1) }>Decrease</button>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

function Product(props){
    const productStyle = {
        border: "1px solid gray",
        borderRadius: '5px',
        backgroundColor: 'lightgray',
        height:'250px',
        width:'200px',
        float:'left',
        color:'blue'
    }
    return(
        <div style={productStyle}>
       <h3>{props.product.name} </h3>
       <h1>{props.product.price}</h1>
       <button>Buy Now</button>
        </div>
    )
}

function Person() {
    const personStyle = {
        border: '2px solid red',
        margin: '10px'
    }
    return ( <div style={personStyle}>
        <h3 > Hiiiii </h3> 
        </div >
    )
}



export default App;