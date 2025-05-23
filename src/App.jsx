/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { data } from "./data";

// Navbar component is basically the list of things to navigate like the different sections (menubar, RiWomenFill, etc)
function NavbarComp() {
  const [click, setClick] = useState(false);
  const [change, setChange] = useState(true);

  const handleNav = () => {
    setClick(!click);
    setChange(!change);
  };
  return (
    <>
      {/* Mobile View */}
      <div className="sm:hidden z-10 flex items-center justify-center">
        {change ? (
          <img
            src="icons/icon-menu.svg"
            alt="menu"
            onClick={handleNav}
            className="h-4 w-5"
          />
        ) : (
          <img
            src="icons/icon-close.svg"
            alt="close"
            className="h-4"
            onClick={handleNav}
            loading="lazy"
          />
        )}
      </div>
      {click && (
        <div className="sm:hidden fixed -right-5 top-0 p-9 w-[75%] h-screen rounded-l-3xl backdrop-blur-xl z-30 border-l-Grayish-blue/20 border-l-4  ">
          <ul className="flex flex-col gap-10 my-16 text-xl ">
            <NavListComp />
          </ul>
        </div>
      )}
    </>
  );
}

const NavListComp = () => {
  return (
    <>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </>
  );
};

//Header Contains Navbar Component insisde it and is the main navbar
function Header({ visible, setVisible, count, setCount, profile, setProfile }) {
  return (
    <div className="relative">
      <header className="flex gap-3 border-b border-Grayish-blue sm:p-2 p-6 items-center justify-between max-w-6xl mx-auto sm:h-28 h-16 relative ">
        <div className="flex sm:gap-8 justify-start items-center">
          <NavbarComp />
          <img
            src="icons/logo.svg"
            alt="logo"
            className="scale-75 sm:scale-100"
          />

          {/*Desktop View */}
          <nav className="hidden sm:block">
            <ul className="flex gap-8 text-Dark-grayish-blue justify-center items-center text-sm ">
              <NavListComp />
            </ul>
          </nav>
        </div>

        <div>
          <div className="flex justify-center items-center gap-2 sm:gap-8 relative">
            {count > 0 && (
              <div className="cartCount z-10 bg-Orange text-White rounded-2xl text-[9px] px-2 font-bold absolute top-1 left-5">
                {count}
              </div>
            )}
            <button
              onClick={() => setVisible(!visible)}
              className="w-full h-max p-2 cursor-pointer"
            >
              <svg
                width="22"
                height="20"
                className="sm:scale-110 scale-75"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  className="sm:fill-Dark-grayish-blue fill-Black hover:fill-Black smooth-transition "
                />
              </svg>
            </button>
            <img
              src="images/new.png"
              alt="avatar_image"
              className="w-9 brightness-125 sm:w-10 hover:border-[3px] border-Orange/80 rounded-full scale-75 sm:scale-100"
              onClick={() => setProfile(!profile)}
            />
          </div>
        </div>
        {profile && <ProfileModal setProfile={setProfile} />}
      </header>
      {/* cart component will be visible only when one or more product is added */}
      {visible && <CartComp count={count} setCount={setCount} />}
    </div>
  );
}
//displays my image and profile as a modal
const ProfileModal = ({ setProfile }) => {
  return (
    <div className="modal bg-Black/50 backdrop-blur-sm h-[100vh] w-full  fixed z-50 top-0 left-0 flex items-center justify-center ">
      <div
        className="profile relative w-[80vw] sm:w-[50vw] h-[300px] sm:h-[50vh] bg-White/50
    backdrop-blur-xl backdrop-brightness-125 
    rounded-xl flex items-center justify-center flex-col
    border-Grayish-blue/30 border-l-[6px] border-b-[6px] 
    "
      >
        <img
          src="images/new.png"
          alt="avatar_image"
          className="rounded-full shadow-2xl border-8 border-Black/30 "
        />
        <h1 className="mt-2 text-xl font-semibold">Girish Ch. Banua</h1>
        <p>Learner / Web developer / Educator</p>
        <img
          src="icons/icon-close.svg"
          alt="svg"
          onClick={() => setProfile(false)}
          className="z-30 sm:size-10 size-7 brightness-50 absolute -top-[12%] sm:-top-[18%] right-5 invert"
        />
      </div>
    </div>
  );
};

//Cart Component: displays the cart on top with contents or message
function CartComp({ count, setCount }) {
  return (
    <div className="cart z-20 absolute sm:h-[35vh] w-[96vw] sm:w-[25vw] top-[10vh] sm:top-[12vh] right-2 sm:right-0 shadow-2xl rounded-lg flex flex-col bg-White border-Grayish-blue/20 border-2 border-b-4 border-l-4 ">
      <div className="up border-b-Grayish-blue border-b p-2 ">
        <h2 className="p-3 font-semibold text-Very-dark-blue ">Cart</h2>
      </div>
      <div className="down flex items-center justify-center h-full py-6 sm:p-2 ">
        {count > 0 ? (
          <ProductComp count={count} setCount={setCount} />
        ) : (
          <p className="text-Grayish-blue font-semibold ">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
}

//Product Component: Contains The product details to be shown
//inside the Cart when add to cart or the cart button is clicked
function ProductComp({ count, setCount }) {
  return (
    <div className="product ">
      <div className="flex gap-6 justify-between items-center">
        <img
          src="images/image-product-1-thumbnail.jpg"
          alt="Shoes"
          className="h-16 rounded-lg"
        />
        <div>
          <p className="text-Dark-grayish-blue sm:text-normal text-[0.9rem]">
            Fall Limited Edition Sneakers
          </p>
          <p className="text-Dark-grayish-blue">
            $125.00 <span> x {count}</span>{" "}
            <b className="text-Very-dark-blue">${count * 125}.00</b>
          </p>
        </div>
        {/* delete button that clears all the entries in the cart */}
        <button onClick={() => setCount(0)}>
          <img src="icons/icon-delete.svg" alt="delete" className="h-7 " />
        </button>
      </div>
      <button className="orange-button mt-5">Checkout</button>
    </div>
  );
}

const ShoeModal = ({shoeId, products, ImgChangeRight, ImgChangeLeft, setI, setshoeModalVis }) => {
  return (
    <div className="Shoemodal hidden sm:flex items-center justify-center fixed z-30 bg-Black/50 backdrop-blur-sm w-full h-full left-0 ">      
      <div className="modalContent relative">
      <img
          src="icons/icon-close.svg"
          alt="svg"
          onClick={() => setshoeModalVis(false)}
          className="z-40 sm:size-10 size-7 brightness-50 absolute right-5 -top-8 invert"
        />
        <HeroLeft         
          shoeId={shoeId}
          products={products}
          ImgChangeLeft={ImgChangeLeft}
          ImgChangeRight={ImgChangeRight}
          setI={setI}
        />
      </div>
    </div>
  );
};

const HeroLeft = ({ImgChangeLeft, ImgChangeRight,shoeId, products, setI }) => {
  return (
    <div className="heroLeft sm:w-max sm:flex flex-col gap-5 sm:p-4">
      <div className="sm:w-max h-[18rem] w-full sm:h-auto relative">        
        
      <div className="slidebuttons absolute flex justify-between w-[120%] p-4 top-[50%] -left-10 ">
              <button onClick={ImgChangeLeft}>
                <img
                  src="icons/icon-previous.svg"
                  alt="previous"
                  className=" bg-White/90 w-10 h-10 p-[0.85rem] rounded-full "
                />
              </button>
              <button onClick={ImgChangeRight}>
                <img
                  src="icons/icon-next.svg"
                  alt="next"
                  className=" bg-White/90 w-10 h-10 p-[0.85rem] rounded-full "
                />
              </button>
            </div>
        <img
          src={`images/image-product-${shoeId}.jpg`}
          alt="hero-image"
          className="sm:rounded-2xl sm:h-[24rem] object-[25%_10%] object-cover h-full w-full "
        />
      </div>
      <div className="hidden sm:flex justify-between">
        {products.map((item, id) => (
          <div key={item.id} className="rounded-2xl">
            <img
              src={item.thumbnail}
              alt="shoe-thumbnail"
              className="object-cover rounded-xl h-20 hover:border-[3px] border-Orange hover:opacity-70  "
              onClick={() => setI(id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App
export default function App() {
  const [products] = useState(data);
  const [count, setCount] = useState(0);
  const [enable, setEnable] = useState(true);
  const [visible, setVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const shoedata = data;
  const [shoeModalVis, setshoeModalVis] = useState(false);

  const [changeI, setI] = useState(0);
  let shoeId = shoedata[changeI].id;

  useEffect(() => {
    count > 0 ? setEnable(false) : setEnable(true);
  }, [count]);

  //functionality of Left and right buttons on the mobile devices for changing the images
  function ImgChangeRight() {
    changeI > 2 ? setI(0) : setI(changeI + 1);
    // console.log("clicked right", changeI);
  }
  function ImgChangeLeft() {
    changeI < 1 ? setI(3) : setI(changeI - 1);
    // console.log("clicked left", changeI);
  }

  return (
    <>
    {shoeModalVis && <ShoeModal shoeId={shoeId} products={products} ImgChangeRight={ImgChangeRight} ImgChangeLeft={ImgChangeLeft} setI={setI} setshoeModalVis={setshoeModalVis} />}
      <Header
        visible={visible}
        setVisible={setVisible}
        count={count}
        setCount={setCount}
        profile={profileVisible}
        setProfile={setProfileVisible}
      />
      
      <section className="sm:p-10 sm:mt-4 mb-10 sm:mb-0 flex flex-col sm:flex-row justify-evenly w-full sm:gap-8 gap-3">
        <div className="heroLeft sm:w-max sm:flex flex-col gap-5 sm:p-4">
          <div className="sm:w-max h-[18rem] w-full sm:h-auto relative">
            {/* Image Slide Buttons which are visible only in mobile version */}

            <div className="sm:hidden slidebuttons absolute flex justify-between w-full p-4 top-28 ">
              <button onClick={ImgChangeLeft}>
                <img
                  src="icons/icon-previous.svg"
                  alt="previous"
                  className=" bg-White/90 w-10 h-10 p-[0.85rem] rounded-full "
                />
              </button>
              <button onClick={ImgChangeRight}>
                <img
                  src="icons/icon-next.svg"
                  alt="next"
                  className=" bg-White/90 w-10 h-10 p-[0.85rem] rounded-full "
                />
              </button>
            </div>
            <img
              src={`images/image-product-${shoeId}.jpg`}
              alt="hero-image"
              className="sm:rounded-2xl sm:h-[24rem] object-[25%_10%] object-cover h-full w-full "
              onClick={() => setshoeModalVis(true)}
            />
          </div>
          <div className="hidden sm:flex justify-between">
            {products.map((item,id) => ( //item is for iterating all the images and id is for iterating through the ids
              <div key={item.id} className="rounded-2xl">
                <img
                  src={item.thumbnail}
                  alt="shoe-thumbnail"
                  className="object-cover rounded-xl h-20 hover:opacity-50 "
                  onClick={() => setI(id)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="heroRight sm:w-[50%] sm:p-8 px-6 py-2 sm:self-center">
          <h2 className="text-xs uppercase sm:mb-4 mb-2 font-semibold tracking-widest text-Orange ">
            sneaker company
          </h2>
          <h1 className="text-[1.6rem] w-[300px] sm:w-auto sm:text-5xl mb-4 sm:mb-8 font-bold text-Very-dark-blue leading-tight ">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-Dark-grayish-blue mb-4 leading-relaxed text-[0.85rem] sm:text-lg w-[300px] sm:w-auto  ">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="pricetag flex sm:flex-col sm:items-start items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-Very-dark-blue">
                $125.00
              </h2>
              <span className="text-Orange bg-Pale-orange text-lg font-bold rounded-md px-3 py-1 ml-4 ">
                50%
              </span>
            </div>
            <p className="text-Grayish-blue font-bold line-through ">
              $250.00 0
            </p>
          </div>

          <div className="actionBtn flex flex-col sm:flex-row mt-8 gap-4">
            <div className="counter sm:p-0 p-2 flex justify-around items-center sm:w-[50%] bg-Light-grayish-blue rounded-xl">
              <button
                className="text-Orange text-bold text-4xl"
                onClick={() => count > 0 && setCount(count - 1)}
              >
                -
              </button>
              <p className="font-semibold">{count}</p>
              <button
                className="text-Orange text-bold text-4xl "
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => setVisible(true)}
              disabled={enable}
              className=" orange-button "
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#ffffff"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
