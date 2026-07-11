type HeroProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

function Hero({ searchTerm, setSearchTerm }: HeroProps) {
  return (
    <section
      className="text-center text-white py-5"
      style={{
        background: "linear-gradient(135deg,#1565c0,#42a5f5)",
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold">
          Government Jobs & Career Updates
        </h1>

        <p className="lead mt-3">
          Find Official Notifications, Apply Links and YouTube Career Guides
        </p>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search Jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;