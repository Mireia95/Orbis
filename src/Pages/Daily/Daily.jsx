import { useEffect, useState } from 'react'
import './Daily.css'
import Loading from '../../Components/Loading/Loading'
import ButtonLinkExternal from '../../Components/ButtonLinkExternal/ButtonLinkExternal'
import PlanetBG from '../../Components/PlanetBG/PlanetBG'

const Daily = () => {
  const [daily, setDaily] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=f1OcLdTJsj9cQDrS0tcbhnwLxSTlnrZJnlrqtS0H'
    )
      .then((res) => res.json())
      .then((res) => {
        setDaily(res)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {/*   <PlanetBG opacity={0.4} /> */}
      <section id='daily' className='fadeIn flex'>
        <h3> NASA DAILY PICTURE </h3>
        <div className='dailyPhoto flex'>
          {loading && <Loading />}
          {daily && (
            <>
              <h4> {daily.title}</h4>
              <div className='dailyContent flex'>
                <div>
                  <div className='dailyHover flex'>
                    <ButtonLinkExternal url={daily.url} text='Open URL image' />{' '}
                  </div>
                  <img src={daily.url} alt='daily photo'></img>
                </div>
                <div className='dailyInfo flex'>
                  <p>{daily.explanation}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Daily
