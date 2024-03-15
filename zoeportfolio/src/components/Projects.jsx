import React from 'react';

function Projects() {
  
    return (
        <>
        <div class="portfolio section" id="portfolio">
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
        </div>
        </>
    )
    }

export default Projects