type Props = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

function Categories({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const categories = [
    "All",
    "SSC",
    "UPSC",
    "KPSC",
    "Banking",
    "Railway",
    "Defence",
    "Police",
    "Teaching",
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Browse Categories
      </h2>

      <div className="row">
        {categories.map((category) => (
          <div
            className="col-md-3 col-sm-6 mb-3"
            key={category}
          >
            <button
              className={
                selectedCategory === category
                  ? "btn btn-primary w-100"
                  : "btn btn-outline-primary w-100"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;