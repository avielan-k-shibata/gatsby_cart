import React from "react"
import { Link } from "gatsby"
import Sns from "./sns"
import Menucart from '../MenuCart'

export default function Leftmenu() {
  return (
    <aside>
            <div className="menu">
                <h1><Link to="/">TITLE</Link></h1>
                <Menucart/>
                <div className="product">
                    <p><Link to="/products">商品一覧</Link></p>
                    <p><Link to="/recipes">レシピ</Link></p>
                </div>
                <div className="about">
                    <p><Link to="/about">ABOUT</Link></p>
                    <p><Link to="/tradelaw">個人情報保護法について</Link></p>
                    <p><Link to="/tradelaw">特定商取引法に基づく表示</Link></p>
                    <p><Link to="">利用規約</Link></p>
                    <p><Link to="">お問い合わせ</Link></p>
                    <p><Link to="">ご利用ガイド</Link></p>
                </div>
                <div className="sns">
                  <Sns></Sns>
                </div>
            </div>
    </aside>
  )
}
