import * as React from "react"

import CartOverview from '../components/CartOverview'
import Swiper from "react-id-swiper"
import '../styles/swiper.css'
import Layout from '../components/layout/layout'

const sliderParams = {
  slidesPerView: "auto",
  centeredSlides: true,
  effect: 'fade',
  autoplay: true,
}


const IndexPage = () => {
  return (
    <Layout>

      <CartOverview />


      <Swiper {...sliderParams}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>

    </Layout>
  )
}

export default IndexPage
