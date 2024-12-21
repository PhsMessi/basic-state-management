import { useState } from "react";
import SideCategories from "./components/SideNav";
import NavigationBar from "./components/navBar";
import Cart from "./components/cart";
import ProductLists from "./components/productList";

export default function App() {
  const guns = [
    {
      id: 0,
      name: "SIG SAUER MCX AIR RIFLE - FDE",
      img: "https://tacticalcornerinc.com/admin/prodimage/a5794320fb9d2494e52098aff627f06f.jpg",
    },
    {
      id: 1,
      name: "SIG SAUER MCX AIR RIFLE - BLACK",
      img: "https://tacticalcornerinc.com/admin/prodimage/d92f90c3e9cfc4af68134ae89eb65d73.jpg",
    },
    {
      id: 2,
      name: "SIG SAUER ASP20, AIR RIFLE .177CAL",
      img: "https://tacticalcornerinc.com/admin/prodimage/ec512fbacc66528b581f36088a4ae747.jpg",
    },
  ];
  const [cartItem, setItem] = useState(0);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  function addItem(num) {
    setItem(cartItem + num);
  }

  function deleteCartItem() {
    setItem(cartItem - 1);
  }

  function addCart(gun, name, id) {
    setCart((prevCart) => [...prevCart, { gun: gun, name: name, id: id }]);
    console.log(`${gun} ${name} added to cart!`);
  }
  function modalTrigger() {
    setModal(true);
    console.log(...cart);
  }

  function home() {
    setModal(false);
  }

  function deleteItem(id) {
    setCart((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="w-screen">
      <NavigationBar
        cartItem={cartItem}
        toggleModal={modalTrigger}
        toggleHome={home}
      />
      <main className="flex px-16">
        <SideCategories />

        {modal ? (
          <Cart
            cartList={cart}
            toggleDelete={deleteItem}
            deleteCart={deleteCartItem}
          />
        ) : (
          <ProductLists products={guns} addCart={addCart} addItem={addItem} />
        )}
      </main>
    </div>
  );
}
