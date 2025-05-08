import { useEffect, useState } from "react";
import { data } from "./data";
import logo from "./images/logo.svg";
import { BsCart3 } from "react-icons/bs";
import avatar from "./images/image-avatar.png";

function Header({visible, setVisible, count, setCount}) {
  
  return (
    <div className="relative">
      <header className="flex gap-3 border-b border-Grayish-blue p-2 items-center justify-between max-w-6xl mx-auto h-28 relative ">
        <div className="flex gap-8 justify-start items-center">
          <img
            src={logo}
            alt="logo"
            className="hover:scale-110 transition-all ease-in-out duration-300"
          />
          <nav>
            <ul className="flex gap-8 text-Dark-grayish-blue justify-center items-center text-sm ">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div>
          <div className="flex justify-center items-center gap-8 relative">
            {count > 0 && <div className="cartCount bg-Orange text-White rounded-2xl text-[9px] px-2 font-bold absolute top-1 left-3">{count}</div>}
            <button
              onClick={() => setVisible(!visible)}
              className="w-full h-max p-2 scale-150 cursor-pointer hover:scale-[1.75] smooth-transition"
            >
              <BsCart3 />
            </button>
            <img
              src={avatar}
              alt="avatar_image"
              className="w-12 hover:border-[3px] border-Orange/80 rounded-full"
            />
          </div>
        </div>
      </header>
      {visible && <CartComp count={count} setCount={setCount} />}
    </div>
  );
}

function CartComp({count, setCount}) {
  
  return (
    <div className="cart absolute bg-White h-[35vh] w-[25vw] top-[12vh] right-0 shadow-xl rounded-lg flex flex-col ">
      <div className="up border-b-Grayish-blue border-b">
        <h2 className="p-3 font-semibold text-Very-dark-blue ">Cart</h2>
      </div>
      <div className="down flex items-center justify-center h-full p-2 ">
        {
          count > 0 ? <ProductComp count={count} setCount={setCount} /> : <p className="text-Grayish-blue font-semibold ">Your cart is empty.</p>
        }
      </div>
    </div>
  );
}

function ProductComp({count, setCount}) {
  return (
    <div className="product ">
      <div className="flex gap-6 justify-between items-center">
        <img src="/images/image-product-1-thumbnail.jpg" alt="Shoes" className="h-16 rounded-lg" />
        <div>
          <p className="text-Dark-grayish-blue" >Fall Limited Edition Sneakers</p>
          <p className="text-Dark-grayish-blue" >$125.00 <span> x {count}</span> <b className="text-Very-dark-blue">${count * 125}.00</b></p> 
        </div>
        <button onClick={() => setCount(0)}>
          <img src="/images/delete.png" alt="delete" className="h-7 " />
        </button>
      </div>
      <button className="orange-button mt-5">Checkout</button>
    </div>
  );
}

export default function App() {
  const [products] = useState(data);
  const [count, setCount] = useState(0);
  const [enable, setEnable] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    count > 0 ? setEnable(false) : setEnable(true)
  },[count])

  return (
    <>
      <Header visible={visible} setVisible={setVisible} count={count} setCount={setCount}/>
      <section className="p-10 mt-4 flex justify-evenly w-full gap-8">
        <div className="heroLeft w-max flex flex-col gap-5 p-4">
          <div className="w-max">
            <img
              src="/images/image-product-1.jpg"
              alt="hero-image"
              className="rounded-2xl h-[24rem]"
            />
          </div>
          <div className="flex justify-between">
            {products.map((item) => (
              <div key={item.id} className="rounded-2xl">
                <img
                  src={item.thumbnail}
                  alt="shoe-thumbnail"
                  className="object-cover rounded-xl h-20 hover:opacity-50 "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="heroRight w-[50%] p-8 self-center">
          <h2 className="uppercase mb-4 font-semibold tracking-widest text-Orange ">
            sneaker company
          </h2>
          <h1 className="text-5xl mb-8 font-bold text-Very-dark-blue ">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-Dark-grayish-blue mb-4 leading-relaxed ">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="pricetag flex items-center">
            <h2 className="text-3xl font-bold text-Very-dark-blue">$125.00</h2>
            <span className="text-Orange bg-Pale-orange text-lg font-bold rounded-md px-3 py-1 ml-4 ">
              50%
            </span>
          </div>
          <p className="text-Grayish-blue font-bold line-through ">$250.00 0</p>
          <div className="actionBtn flex mt-8 gap-4">
            <div className="counter flex justify-around items-center w-[50%]  bg-Light-grayish-blue rounded-xl">
              <button
                className="text-Orange text-bold text-3xl"
                onClick={() => count > 0 && setCount(count - 1)}
              >
                -
              </button>
              <p className="font-semibold">{count}</p>
              <button              
                className="text-Orange text-bold text-3xl "
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button onClick={() => setVisible(true)} disabled={enable} className=" orange-button ">
              <BsCart3 /> Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
