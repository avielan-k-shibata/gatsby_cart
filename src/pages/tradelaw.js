import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout/layout'


export default function Tradelaw({ data }) {
    const tradelaw = data.datoCmsTradelaw

    return (
      <>
        <Layout>
            <div className="title"><h1>特定商取引法に基づく表示</h1></div>
            <div className="pnkz">
                <p><Link to="/">TOP</Link></p>
                <p>特定商取引に関する表記</p>
            </div>
            <div className="contents">
                <div class="contents_about">
                <div class="tradelaw">
                    <p>店舗名</p>
                    <p>{tradelaw.shopName}</p>
                    <p>販売事業者名</p>
                    <p>{tradelaw.shopName}</p>
                    <p>販売責任者名</p>
                    <p>{tradelaw.manager}</p>
                    <p>所在地</p>
                    <p>{tradelaw.address}</p>
                    <p>電話番号</p>
                    <p>{tradelaw.phoneNumber}</p>
                    <p>FAX番号</p>
                    <p>{tradelaw.faxNumber}</p>
                    <p>メールアドレス</p>
                    <p>{tradelaw.mailaddress}</p>
                    <p>ホームページURL</p>
                    <p>{tradelaw.url}</p>
                </div>
                </div>
            </div>
        </Layout>
        
      </>
    )
  }



export const query = graphql`
query {
    datoCmsTradelaw {
        id
        address
        faxNumber
        mailaddress
        manager
        phoneNumber
        productSales
        shopName
        url
    }
}

`