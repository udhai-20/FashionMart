import React from "react"
import "./ShopWomen.css"
import { useNavigate } from "react-router-dom"
import WomenHome from "./WomenHome"

let shopWarr = [
    {
        img: "https://cdn.modesens.com/banner/20220919-W-Sale.jpg",
        title: "SALE",
        onClick:"/home"
    },
    {
        img: "https://cdn.modesens.com/banner/20220919-W-New.jpg",
        title: "NEW ARRIVALS",
        onClick:"/"
    },
    {
        img: "https://cdn.modesens.com/banner/20220919-W-Jackets.jpg",
        title: "JACKETS",
        onClick:"/"
    },
    {
        img: "https://cdn.modesens.com/banner/20220919-W-Dresses.jpg",
        title: "DRESSES",
        onClick:"/"
    },
    {
        img: "https://cdn.modesens.com/banner/20220919-W-Tops.jpg",
        title: "TOPS",
        onClick:"/"
    },
    {
        img: "https://cdn.modesens.com/banner/20220919-W-Pants.jpg",
        title: "PANTS",
        onClick:"/"
    },
    {
        img: "https://cdn.modesens.com/banner/20220919-W-Shoes.jpg",
        title: "SHOES",
        onClick:"/"
    },
    {
        img: "https://cdn.modesens.com/banner/20220919-W-Bags.jpg",
        title: "BAGS",
        onClick:"/"
    },
    {
        img: "https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg",
        title: "PRE OWNED",
        onClick:"/"
    }
]
export default function ShopWomen() {
     const navigate=useNavigate()
    return (
        <>
        <div className="shopW">
            <div>
                <p className="feature">Shop Women</p>
            </div>
            <div  className="categories">
                {shopWarr.map((el) => (
                    <div key={el.title}>
                    {/* <div> */}
                    <img onClick={() => navigate(`${el.onClick}`)} style={{borderRadius:"100%"}} src={el.img} alt="prod-img" />
                    {/* </div> */}
                    {/* <div> */}
                    <h3>{el.title}</h3>
                    {/* </div> */}
                    </div>
                ))}

            </div>
        </div>
        <div>
           <WomenHome />
          </div>
          </>
    )
}