import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to My Portfolio</h1>
      <p>My Name is Zoe Sobowale</p>
      <a href="https://github.com/ZoeSobowale"> My GitHub</a>
      <br />
      <a href="https://www.linkedin.com/in/zoe-sobowale/">LinkedIn</a>
      <br />
      <a href="https://www.youtube.com/channel/UCmBRnQ77aZ2HIAjlY7NTTzQ">My Youtube</a>
      <br />

      <section class="portfolio section" id="portfolio">
        <h2 class="section-title">Portfolio</h2>

        <div class="portfolio__container bd-grid">
            <div class="portfolio__img">
                <img src={work1} alt=""/>

                <div class="portfolio__link">
                    <a href="https://casagrandecare.com/" class="portfolio__link-name">Care Home Website Made using HTML,CSS,Bootstrap,Javascript</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src="assets/images/work2.jpg" alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">Gym Workout Application Made using React Native</a>
                </div>
            </div>
            <div class="portfolio__img">
                <img src="assets/images/work3.jpg" alt=""/>

                <div class="portfolio__link">
                    <a href="#" class="portfolio__link-name">Crochet Application Made using React Native</a>
                </div>
            </div>
        </div>
    </section>

    <div>
      <h2>My <CV></CV></h2>
      <p>Include your up-to-date projects and professional experience here.</p>
      <a href="" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
    </div>
    </>
  )
}

export default App
