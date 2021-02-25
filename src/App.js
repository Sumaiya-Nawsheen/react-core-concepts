import logo from './logo.svg';
import './App.css';

function App() {
    const products =[
        {name:'Illustrator', price:'$60.99'},
        {name:'PhotoShop', price:'$90.99'},
        {name:'PDF Reader', price:'$6.99'}
    ]
    return ( <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <p >
        Edit < code > src / App.js </code> and save to reload. </p>
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
    return ( <div>
        <h3 > Hi </h3> 
        </div >
    )
}



export default App;