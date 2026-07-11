import { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import LatestJobs from "../components/LatestJobs";
import Footer from "../components/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Categories />

      <LatestJobs searchTerm={searchTerm} />

      <Footer />
    </>
  );
}

export default Home;