import React, { useEffect, useState } from "react";
import axios from "axios";

const About = ({ valueMen, valueWoMen, valueChildern }) => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/rohan31");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Ensure the data is an array before setting state
        if (Array.isArray(data)) {
          if (valueWoMen === "WoMen") {
            setCards(data.filter((item) => item.gender === valueWoMen));
          } else if (valueMen === "Men") {
            setCards(data.filter((item) => item.gender === valueMen));
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

    fetchData();
  }, [valueMen, valueWoMen]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  const addtocart = async (id) => {
    try {
      const response = await axios.post("http://localhost:5001/cart", { id });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div
      className="overflow-auto scrollbar-hide"
      style={{ maxHeight: "620px" }}
    >
      <div className="flex flex-wrap" id="scrollable">
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card) => (
            <div className="flex-shrink-0 mr-2" key={card._id}>
              <div className="h-70 w-80 border-slate-800 border-2">
                <div className="border-slate-800 border-2">
                  <img src={card.imageUrl} alt="xyz" />
                  <button
                    className="px-6 py-2 transition ease-in duration-200 justify-centre item-centre uppercase rounded-full bg-yellow hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                    onClick={() => addtocart(card._id)}
                  >
                    Add to cart
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
