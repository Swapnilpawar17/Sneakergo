import React, { useEffect, useState } from "react";
import axios from "axios";

const About = ({ valueMen, valueWoMen, valueChildern }) => {
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:5001/cartid");
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/rohan31");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (Array.isArray(data)) {
          if (cartItems.length > 0) {
            const cartItemIds = cartItems.map((item) => item.cartid);
            const filteredCards = data.filter((card) =>
              cartItemIds.includes(card._id)
            );
            setCards(filteredCards);
          } else {
            setCards(data);
          }
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (cartItems.length > 0) {
      fetchData();
    }
  }, [valueMen, valueWoMen, cartItems]);

  const removeFromCart = async (id) => {
    console.log(id);
    try {
      const response = await axios.post("http://localhost:5001/removecart", {
        id,
      });
      console.log("Response:", response.data);
      window.location.reload();

      // Optionally, update UI or state after removing from cart
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <div
        className="flex flex-wrap overflow-auto scrollbar-hide"
        id="scrollable"
      >
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card) => (
            <div className="flex-shrink-0 mr-2" key={card._id}>
              <div className="h-70 w-80 border-slate-800 border-2">
                <div className="border-slate-800 border-2">
                  <img src={card.imageUrl} alt="xyz" />
                  <button
                    className="px-6 py-2 transition ease-in duration-200 justify-centre item-centre uppercase rounded-full bg-yellow hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                    onClick={() => removeFromCart(card._id)}
                  >
                    Remove to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No cards available</div>
        )}
      </div>
    </div>
  );
};

export default About;
