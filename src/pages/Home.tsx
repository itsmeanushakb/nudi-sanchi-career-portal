import { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import LatestJobs from "../components/LatestJobs";
import Footer from "../components/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <LatestJobs
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

      <Footer />
    </>
  );
}

export default Home;