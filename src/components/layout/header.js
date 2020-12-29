import React from "react"
// import { Link } from "gatsby"
import Swiper from "react-id-swiper"
import '../../styles/swiper.css'

const sliderParams = {
  slidesPerView: "auto",
  centeredSlides: true,
  effect: 'fade',
  autoplay: true,
}


export default function Header() {
  
  return (
    <header>
      <Swiper {...sliderParams}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    </header>
  )
}
