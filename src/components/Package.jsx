import "../styles/package.css";

const packages = [
  {
    title: "Monthly Packages",
    price: "$20/Month",
    benefits: [
      "8 hours usage of our coworking space",
      "Access to All our rooms",
    ],
  },
  {
    title: "Personal Branding",
    price: "$20/day",
    benefits: [
      "8 hours usage of our coworking space",
      "Access to All our rooms",
    ],
    isHighlighted: true, // This one will be styled differently
  },
  {
    title: "Bundles Packages",
    price: "$20",
    benefits: [
      "8 hours usage of our coworking space",
      "Access to All our rooms",
    ],
  },
];

const Packages = () => {
  return (
    <section className="packages">
      <h2>Packages</h2>
      <p>Tailored PR Packages according to your needs</p>
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`package-card ${pkg.isHighlighted ? "highlighted" : ""}`}
          >
            <h3>{pkg.title}</h3>
            <p className="package-subtitle">What You’ll Get</p>
            <ul>
              {pkg.benefits.map((benefit, i) => (
                <li key={i}>✔ {benefit}</li>
              ))}
            </ul>
            <p className="price">{pkg.price}</p>
            <button className="choose-btn">Choose</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
