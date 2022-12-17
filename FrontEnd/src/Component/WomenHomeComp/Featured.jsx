
import "./Featured.css"

export default function Featured() {

    let brandsArr = [
        "https://cdn.modesens.com/banner/20220708-SSENSE-logo.png",
        "https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png",
        "https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png",
        "https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png",
        "https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png",
        "https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png",
        "https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png",
        "https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png",
        "https://cdn.modesens.com/banner/20220708-ITALIST-logo.png",
        "https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png",
        "https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png",
        "https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png"
    ]

    return (
        <div className="feature_mian_div">
            <div className="feature_title">
                <div><p className="feature">Featured Partners</p></div>
                <div><p className="feature_desc">Compare across our 500+ partner stores to find the products you want at the best price.</p></div>
            </div>
            <div className="brands_div">
                {brandsArr.map((el) => (
                    <div key={el}>
                        <img src={el} alt="brands-logo" />
                    </div>
                ))}
            </div>
        </div>
    )
}