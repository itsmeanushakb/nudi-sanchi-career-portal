import { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import LatestJobs from "../components/LatestJobs";
import Footer from "../components/Footer";
import FeaturedJobs from "../components/FeaturedJobs";

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

      <FeaturedJobs />

      <LatestJobs
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

      <Footer />
    </>
  );
}

export default Home;