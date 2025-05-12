import Card from "./components/Card.jsx";
import Count from "./components/Count.jsx";

const App = ()=>{
  let chocolate = "https://jindalcocoa.com/cdn/shop/files/DarkChocolateHazelnutPista.jpg?v=1728548263";
  let cake = "https://www.ferrerorocher.com/in/sites/ferrerorocher20_in/files/2021-07/chocolate-cake-carousel-1.png?t=1734453602";
  let iceCream = "https://images.herzindagi.info/image/2019/Apr/how-to-make-chocolate-icecream.jpg";
  return(
    <section>
      <div className="container">
        <div className="row">
          <div className="col-4 my-5">
              <Card name="chocolate" image={chocolate} des="My favourite flavour Chocolate" color="primary"/>
          </div>
          <div className="col-4 my-5">
              <Card name="cake" image={cake} des="Yummmy Chocolate Cake"  color="success"/>
          </div>
          <div className="col-4 my-5">
              <Card name="iceCream" image={iceCream} des="Choco-Chips Ice-Cream"  color="warning"/>
          </div>
        </div>
        <div>
          <Count />
        </div>
      </div>
    </section>
  )
}

export default App;