import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Prince"}
          feedback={"The integration of interactive elements adds a dynamic touch to the website. "}
        />

        <TestimonialCard
          name={"Prince"}
          feedback={
            "Great job on the responsive design! The site looks fantastic  on both desktop and mobile devices."
          }
        />

        <TestimonialCard
          name={"Prince"}
          feedback={"Impressed with well-organized and easy to follow, making future updates and maintenance a breeze"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
