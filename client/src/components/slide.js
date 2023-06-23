//Don't touch this code if you you don't know what it does
import React from 'react'
import '../components/css/slide.css'
import img1 from '../assets/pic/1.jpg'
import img2 from '../assets/pic/2.jpg'
import img3 from '../assets/pic/3.jpg'
import img4 from '../assets/pic/4.jpg'
import img5 from '../assets/pic/5.jpg'
import img6 from '../assets/pic/6.jpg'
import img7 from '../assets/pic/7.jpg'
import img8 from '../assets/pic/8.jpg'
import img9 from '../assets/pic/9.jpg'
import img10 from '../assets/pic/10.jpg'
import img11 from '../assets/pic/11.jpg'
import img12 from '../assets/pic/12.jpg'
import img13 from '../assets/pic/13.jpg'
import img14 from '../assets/pic/14.jpg'
import img15 from '../assets/pic/15.jpg'
import img16 from '../assets/pic/16.jpg'
import img17 from '../assets/pic/17.jpg'
import img18 from '../assets/pic/18.jpg'
import img19 from '../assets/pic/19.jpg'
import img20 from '../assets/pic/20.jpg'
//Don't touch this code if you you don't know what it does



function Slide() {
    //Slide function begins here

    var slides = document.querySelector('.slide')
    var btns = document.querySelector('.btn')
    let currentSlide = 1;
    //JavaScript for image slider
    var manualNav = function (manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active')

            btns.forEach((btn, i) => {
                btns.classList.remove('active')
            });
        });

        slides[manual].classList.add('active')
        btns[manual].classList.add('active')
    }
    //JavaScript for image slider
    btns.forEach((btns, i) => {
        btns.addEventListener('click', () => {
            manualNav(i)
            currentSlide = i
        })
    });
    //Javascript autoplay
    var repeat = function (activeClass) {
        let active = document.getElementsByClassName('active')
        let i = 1;

        var repeater = () => {
            setTimeout(function () {

                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active')
                });

                slides[i].classList.add(active)
                btns[i].classList.add(active)
                i++;
                if (slides.length == i) {
                    i = 0;
                }
                if (i >= slides.length) {
                    return;
                }
                repeater()
            }, 10000);
        }
        repeater()
    }
    repeat();

    //Slide function ends here
    return (
        <div className='img-slider'>
            {/* Starting of Slide */}
            <div className='slide active'>
                <img src={img1} alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and release and our mission is to get one saved,keep one saved and get another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img2}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img3}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img4}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img5}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img6}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img7}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img8}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img9}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img10}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img11}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img12}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img13}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img14}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img15}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img16}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img17}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img18}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img19}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* Starting of Slide */}
            <div className='slide'>
                <img src={img20}
                    alt='Ark Youth Church' />
                <div className='info'>
                    <h2>ARK YOUTH CHURCH</h2>
                    <p>Vision is to compel,raise and
                        release and our mission is to get
                        one saved,keep one saved and get
                        another saved.</p>
                </div>
            </div>
            {/* The End of the slide  */}
            <div className='navigation'>
                <div className='btn active'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
                <div className='btn'></div>
            </div>
        </div>
    )

}
export default Slide