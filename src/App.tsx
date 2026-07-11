import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import LatestJobs from "./components/LatestJobs";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <LatestJobs />
      <Footer />
    </>
  );

}

export default App;