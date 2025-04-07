import React from 'react';

function WhyUs() {
  const stats = [
    {
      icon: '/images/icons/ribbon.png',
      number: '500+',
      title: 'Clients Satisfaits',
      description: 'Plus de 500 clients ont déjà fait confiance à Oryon pour leur EVG. Nos activités sur mesure et notre service client vous garantissent un moment inoubliable !',
    },
    {
      icon: '/images/icons/tank.png',
      number: '30+',
      title: 'Activités',
      description: 'Nous proposons un large catalogue de 30+ activités fun et originales, pour un EVG qui correspond à vos envies et à celles de votre groupe.',
    },
    {
      icon: '/images/icons/localisation.png',
      number: '6',
      title: 'Destinations',
      description: 'Découvrez nos 6 destinations phares en Europe et en Amérique latine, sélectionnées pour leur ambiance festive et leurs activités uniques.',
    },
    {
      icon: '/images/icons/casque.png',
      number: '10',
      title: 'Experts à Votre Écoute',
      description: 'Notre équipe de 10 experts basés à Paris est là pour organiser votre EVG de A à Z, et répondre à toutes vos questions pour un séjour parfait.',
    },
  ];

  return (
    <section className="why-us">
      <h2>Pourquoi Partir avec Oryon ?</h2>
      <div className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <img src={stat.icon} alt={stat.title} className="stat-icon" />
            <span>{stat.number}</span>
            <h3>{stat.title}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;