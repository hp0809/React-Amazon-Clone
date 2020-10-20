import React from 'react';
import './Home.css';
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Prime Banner"></img>
            </div>
            <div className="home__row">
                <Product 
                    key="12321341"
                    id="12321341"
                    title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses (Paperback)'
                    price={29.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={5}
                    />
                <Product 
                    key='49538094'
                    id='49538094'
                    title="Kenwood kMix Stand Mixer for Baking, 
                            Stylish Kitchen Mixer with K-beater, 
                            Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"/>
            </div>
            <div className="home__row">
                <Product 
                    key="12321345"
                    id="12321345"
                    title='FitBit 2 (Black)'
                    price={89.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                    rating={4}
                />
                <Product 
                    key="12321342"
                    id="12321342"
                    title='Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric'
                    price={99.99}
                    image='https://www.thesource.ca/medias/20190926144729-108085276-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaDFlLzkxODM0Njg0ODY2ODYuanBnfDkxNTNmNTk2YjdmOTY1ZTNmYWQ0OWU1NGY1MGVmMzk3NTBmOWZjMjVkZGY5NTQ5MmNhY2I3YmZiOWIzNzlmYWI'
                    rating={4}
                />
                <Product 
                    key="12321343"
                    id="12321343"
                    title='12.9-inch iPad Pro Wi-Fi 256 GB | Space Black'
                    price={1099.99}
                    image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1583553704156'
                    rating={4}
               />
            </div>
            <div className="home__row">
                <Product 
                    key="12321344"
                    id="12321344"
                    title='Samsung 49" Curved LED Gaming Monitor - SUper Ultra Wide Dual WQHD 5120 x 1440'
                    price={1094.98}
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
