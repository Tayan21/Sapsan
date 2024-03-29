import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 60000,
    imageUrl: "/img/sneackers/1.jpg"
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 60000,
    imageUrl: "/img/sneackers/2.jpg"
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 60000,
    imageUrl: "/img/sneackers/3.jpg"
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 60000,
    imageUrl: "/img/sneackers/4.jpg"
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40 mb-40">
        <div className="d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="search..." />
          </div>
        </div>
        
        <div className="d-flex">
          {arr.map(obj => (
            <Card
            title ={obj.title}
            price ={obj.price}
            imageUrl ={obj.imageUrl}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
