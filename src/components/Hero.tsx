function Hero() {
    return (
        <section
            className="text-center text-white py-5"
            style={{
                background: "linear-gradient(135deg,#1565c0,#42a5f5)",
                minHeight: "400px"
            }}
        >
            <div className="container">

                <h1 className="display-3 fw-bold">
                    Government Jobs & Career Updates
                </h1>

                <p className="lead mt-3">
                    Find Official Notifications, Apply Links,
                    and YouTube Career Guides in One Place.
                </p>

                <div className="row justify-content-center mt-5">

                    <div className="col-md-6">

                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Search Jobs..."
                        />

                    </div>

                    <div className="col-md-2 mt-3 mt-md-0">

                        <button className="btn btn-warning btn-lg w-100">
                            Search
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;