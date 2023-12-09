import { useState } from "react";
import Cards from "./components/Cards";
// import Count from "./components/Count";
import dummyData from "./Data/Carddata";

const App = () => {
  const [displayedCards, setDisplayedCards] = useState(dummyData.slice(0, 6));
  const [isLoading, setIsLoading] = useState(false);

  const showMoreCards = () => {
    setIsLoading(true);
    setTimeout(() => {
      const nextBatch = dummyData.slice(
        displayedCards.length,
        displayedCards.length + 6
      );
      setDisplayedCards([...displayedCards, ...nextBatch]);
      setIsLoading(false);
    }, 2000); // Simulating a delay for loading, replace with actual data fetching logic
  };

  return (
    <>
      {/* <Count /> */}
      {/* <div className="m-5 flex flex-wrap px-8">
        {dummyData.map((item, index) => (
          <Cards key={index} title={item.name} desc={item.title} url={item.url} />
        ))}
      </div> */}

      <div>
      <div className="flex flex-wrap justify-around">
        {displayedCards.map((card, index) => (
          <Cards key={index} title={card.title} desc={card.desc} url={card.url} />
        ))}
      </div>
      {isLoading && (
        <div className="text-center mt-2">
        <span className="loading loading-dots loading-lg"></span>
          {/* <p>Loading...</p> */}
        </div>
      )}
      {!isLoading && displayedCards.length < dummyData.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={showMoreCards}>
            Show More
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default App;
