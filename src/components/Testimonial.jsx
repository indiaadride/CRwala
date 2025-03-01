import "../styles/testimonial.css";

const testimonials = [
  {
    name: "Kyle Roberts DVM",
    role: "Customer Web Consultant",
    text: "Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
    image: "/img/kyle.png",
  },
  {
    name: "Sophia Anderson",
    role: "International Expansion Officer",
    text: "I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone.",
    image: "/img/sophia.png",
  },
  {
    name: "Stephen Bwekke",
    role: "Legacy Integration Producer",
    text: "If you want real marketing that works and effective implementation - mobile app’s got you covered.",
    image: "/img/stiphen.png",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
              <div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-rating">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
