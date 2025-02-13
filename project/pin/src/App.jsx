import Pin from "./components/Pin.jsx";
import Card from "./components/menu/Card.jsx";
import SideList from "./components/sideStatus/SideList.jsx";
import Menu from './components/menu/Menu.jsx';
import OrderList from './components/orderList/OrderList.jsx';
function App() {
  return (
    <div className=" h-screen w-full bg-gray-950">
      {/* <Pin />
      {list.map((item, i) => (
        <div key={i}>
          <Card cardDetails={item} />
        </div>
      ))} 
 
      <Card/> */}

      {/* <SideList /> */}
      <Menu/> 

{/* <OrderList/> */}
    </div>
  );
}

export default App;
