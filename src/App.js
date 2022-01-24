import Navbar from "./components/Navbar";
import Data from "./Data";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
