const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I worked with Aashik, he was very helpful and fast to respond
                to my inquiry to help with NextJS website app issues and all
                technical problems. "
              </span>
              <span className="person">Shanuka Thushara</span>
              <span className="job">CEO - InventuriX Technologies</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "Aashik has been an incredible asset in managing our outdated website. Every task we entrust to him is completed with remarkable speed and efficiency. "
              </span>
              <span className="person">Rangana Upul</span>
              <span className="job">CEO and Founder - Ranga Technologies</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
