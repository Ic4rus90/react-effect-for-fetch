import { useEffect, useState } from 'react'

function ArtsSection() {
  const [artwork, setArtwork] = useState([])


  const standardQuery = 'https://boolean-uk-api-server.fly.dev';

  useEffect(() => {
    fetch(`${standardQuery}/art`)
    .then(res => res.json())
    .then(data => setArtwork(data))
  }, [])
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artwork.map((piece) => 
          (
            <li key={piece.id}>
              <div className="frame">
                <img src={`${standardQuery}${piece.imageURL}`}/>
              </div>
              <h3>{piece.title}</h3>
              <p>{`Artist: ${piece.artist}`}</p>
              <h4>Publication History:</h4>
              <ul>
                {piece.publicationHistory.map((publication, key) => (
                  <li key={key}>
                    {publication}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection
