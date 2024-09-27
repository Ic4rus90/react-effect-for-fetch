import { useState, useEffect } from "react"

function AdviceSection() {

  const initialAdvice = {
    "slip": {
      "id": 80, 
      "advice": "Opinions are like arseholes, everyone has one."
    }
  }

  const initialFavourites = [
    {
      "slip": {
        "id": 80, 
        "advice": "Opinions are like arseholes, everyone has one."
      }
    }
  ]

  const [advice, setAdvice] = useState(initialAdvice)
  const [favouriteAdviceSlips, setFavouriteAdviceSlips] = useState(initialFavourites)
  const [buttonClicks, setButtonClicks] = useState(0);

  const query = 'https://api.adviceslip.com/advice'
  
  useEffect(() =>  {
    fetch (query)
    .then(res => res.json())
    .then(data => setAdvice(data))
  }, [buttonClicks])

  const save = (slip) => {
    setFavouriteAdviceSlips([...favouriteAdviceSlips, slip]);
  }

  const iterateButtonClicks = () => {
    setButtonClicks((buttonClicks) => buttonClicks += 1);
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some advice</h3>
        <p>{advice.slip.advice}</p>
        <button onClick={() => iterateButtonClicks()}>Get More Advice</button>
        <button onClick={() => save(advice)}>Save to Favourites</button>
      </section>
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favouriteAdviceSlips.map((slip, index) => (
            <li key={index}> {`${slip.slip.advice}`} </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
