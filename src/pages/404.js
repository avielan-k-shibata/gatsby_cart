import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout/layout'

const NotFoundPage = () => {
  return (
        <Layout>
        <div className="title"><h1>NOT FOUND</h1></div>
        <div className="pnkz">
                  <p><Link to="/">TOP</Link></p>
                  <p>NOT FOUND</p>
        </div>
        <div className="contents">
          <div class="contents_about">
            <p>こちらのページは存在しません。</p>
  
          </div>
        </div>
      </Layout>
  )
}

export default NotFoundPage
