import '../styles/CaseStudiesPage.css';

const CaseStudies = () => {
  const caseStudies = [
    { id: 1, image: '/img/cs1.png', rating: '2.6x Customer rates' },
    { id: 2, image: '/img/cs2.png', rating: '2.6x Customer rates' },
    { id: 3, image: '/img/cs3.png', rating: '2.6x Customer rates' },
    { id: 4, image: '/img/cs4.png', rating: '2.6x Customer rates' },
    { id: 5, image: '/img/cs5.png', rating: '2.6x Customer rates' },
    { id: 6, image: '/img/cs6.png', rating: '2.6x Customer rates' }
  ];

  return (
    <div className="case-studies-container">
      <div className="header">
        <span className="back-arrow">&#8592;</span>
        <h1>Case studies</h1>
      </div>
      <h2>Reel Result, Real Stories</h2>
      <div className="case-studies-grid">
        {caseStudies.map((study) => (
          <div key={study.id} className="case-study-card">
            <img src={study.image} alt={`Case study ${study.id}`} style={{ width: '60%', height: 'auto' }}/>
            <p>{study.rating}</p>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <button className="view-more">View More</button>
      </div>
    </div>
  );
};

export default CaseStudies;
