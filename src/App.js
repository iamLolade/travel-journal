import Navbar from "./components/Navbar";
import Data from "./Data";
import Journal from "./components/Journal";

function App() {

  const journal = Data.map(val => {
    return <Journal 
              key={val.id}
              {...val}
          />
  })

  return (
    <div className="">
      <Navbar />
      <section>
        {journal}
      </section>
    </div>
  );
}

export default App;
