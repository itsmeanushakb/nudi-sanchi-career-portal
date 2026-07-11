function Categories() {

    const categories = [
        "SSC",
        "UPSC",
        "KPSC",
        "Banking",
        "Railway",
        "Defence",
        "Police",
        "Teaching"
    ];

    return (

        <div className="container my-5">

            <h2 className="text-center mb-4">
                Browse Categories
            </h2>

            <div className="row">

                {categories.map((item) => (

                    <div className="col-md-3 col-sm-6 mb-4" key={item}>

                        <div className="card shadow text-center p-4">

                            <h5>{item}</h5>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Categories;