import React from "react"
import Layout from '../components/layout/layout'
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <div className="title"><h1>ABOUT</h1></div>
      <div className="pnkz">
                <p><Link to="/">TOP</Link></p>
                <p>ABOUT</p>
      </div>
      <div className="contents">
        <div class="contents_about">
          <div class="tradelaw">
            <p>販売業者</p>
            <p>marumaru店</p>
            <p>販売業者</p>
            <p>marumaru店</p>
            <p>販売業者</p>
            <p>marumaru店</p>
            <p>販売業者</p>
            <p>marumaru店</p>
            <p>販売業者</p>
            <p>marumaru店</p>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About