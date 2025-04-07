import React from 'react';
import Slider from 'react-slick';

function Activities() {
  const activities = [
    { name: 'Chute Libre', img: '/images/10092022-G0142427-scaled.jpg' },
    { name: 'Car Smash', img: '/images/Carsmash.jpg' },
    { name: 'Party Bus & Strip', img: '/images/PartyBus.jpg' },
    { name: 'Saut en Parachute', img: '/images/saut.jpg' },
    { name: 'Crazy Night', img: '/images/crazy.jpg' },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: dots => (
      <div style={{ padding: '10px' }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="activities" id="activities">
      <h2>Top Activités EVG</h2>
      <p className="activities-intro">
        Avec un catalogue de 30+ activités, Oryon vous propose les expériences les plus adaptées pour un EVG inoubliable.
      </p>
      <Slider {...settings}>
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.img} alt={activity.name} />
            <div className="card-overlay">
              <h3>{activity.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Activities;