import Cookies from "js-cookie"

import "./index.css"

const CookiesData = Cookies.get("footer_data")
const myCookiesData = JSON.parse(CookiesData)
const {footerAboutContent,footerFirstList,footerSecondList,footerThirdList} = myCookiesData

const Footer = ()=>(
<div className="footer-container">
    <div className="three-containers">
    <div className="first-footer-container">
        <h2 className="first-container-heading">ONLINE SHOPPING</h2>
        <ul className="each-footer-list-item">
            {footerFirstList.map(eachItem=>(<li className="each-footer-sub-item">{eachItem}</li>))}
           
        </ul>
    </div>
    <div className="first-footer-container">
        <h2 className="first-container-heading">QUICK LINKS</h2>
        <ul className="each-footer-list-item">
            {footerSecondList.map(eachItem=>(<li className="each-footer-sub-item">{eachItem}</li>))}
          
        </ul>
    </div>
    <div className="first-footer-container">
        <h2 className="first-container-heading">ONLINE SHOPPING</h2>
        <ul className="each-footer-list-item">
            {footerThirdList.map(eachItem=>(<li className="each-footer-sub-item">{eachItem}</li>))}
        </ul>
    </div>
    <div className="first-footer-container second-extra-width">
    <h2 className="first-container-heading">DOWNLOAD HUFT APP</h2>
    <div className="download-images-container">
        <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/play_store.png?v=1683527854" alt="playStore" className="download-image"/>
        <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/app_store.png?v=1683527854" alt="appStore" className="download-image"/>
    </div>
    <div className="email-container">
        <h3 className="email-heading">LEAVE YOUR EMAIL AND GET OFFERS</h3>
        <div className="email-cont">
        <input type="email" placeholder="Enter Your Email Address" className="email-ele"/>
        
        </div>
        <br/>
        <p className="email-para">Pets are at the heart of everything we do here, they make our lives whole. With each collection, we do our best to honour them. Subscribe to our Newsletter and receive special promotions and insider information about upcoming collections.</p>
    </div>
    </div>
  </div>
   <hr className="hori"/>
   <hr/>
   <ul className="last-unordered-list">
    {footerAboutContent.map(eachItem=>(<li className="each-footer-last-item">
     <img src={eachItem.imgUrl} alt={eachItem.content} className="last-footer-image"/>
     <div className="text-container">
        <h3 className="last-footer-heading">{eachItem.content}</h3>
        <p  className="last-footer-para">{eachItem.para}</p>
     </div>
    </li>))}
   </ul>
   <hr className="hori"/>
   <div className="footer-text-address">
   <h2 className="footer-last-address">POPULAR SEARCHES  <span className="special-footer-address">  Collars, Leashes & Harnesses | Dog Food | Treats, Biscuits and Chews | Royal Canin | Name Tags | Harnesses | Beds | Toys | HUFT Offers | Dog Clothes | Royal Canin Dog Food | Dog Accessories | Dry Dog Food | Collars and Leashes | Cat Products | Dog Grooming | Dog Bedding | Dog Bowls | Dog T-shirts & Shirts | Personalised Collars | Dog Collars | Chew Toys | Dog Bandanas | Dog Products | Pedigree | Farmina | Dog Party Wear | Cat Food | Cat Litter & Accessories | Puppy Food | Dog Shoes & Socks | Dog Brushes & Combs | Interactive Toys | Furniture & Scratchers | Cat Toys | Shampoos & Conditioners | Bow Ties | Crates & Carriers | Pet Mats</span></h2>
   <h2 className="footer-last-address">HEAD OFFICE ADDRESS  <span className="special-footer-address">Earth Paws Private Limited, First Floor, Plot No. 34, Institutional Area, Sector-32, Gurugram, Haryana-122001 </span></h2>
   </div>
  
   <hr className="hori"/>
   <div className="copy-icons-container">
    <p className="copy-rights-para">© 2023, Earth Paws Private Limited. All Rights Reserved</p>
  
   </div>
</div>
)
 


export default Footer
