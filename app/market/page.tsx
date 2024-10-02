"use client";

import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/header';
import Footer from '../components/footer';
import Copyright from '../components/copyright';
import { counterContext } from "../counter"; // Assuming counterContext provides counter and setCounter

function Page() {
    // Get both counter and the setter function from context
    // const { counter, setCounter } = useContext(counterContext);

    // Function to handle adding to cart
    // const showDetails = (event: any) => {
    //     if (event.target.innerText === "Add to cart") {
    //         setCounter(counter + 1); // Use the setter function to update the counter
    //         console.log(counter); // Log the current counter
    //     }
    // };

    return (
        <div>
            <Header />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <section className="search-section" id="search-section">
                <h1>Sell and purchase the products.</h1>
                <br />
                <br />
                <p>Don't know how and where to start? Just open a shop and you're on the go. We are the family of
                    marketers having the best quality products across various categories.</p>
                <br />
                <br />
                <div className="search-container">
                    <input type="text" name="searchQuery" id="search-query" placeholder="Search products" required data-search />
                </div>

                <div className="search-results">
                    <ProductCard 
                        imageSrc="https://i.pinimg.com/564x/39/f0/bb/39f0bb0664cdf534463580ecd4c6a0d9.jpg" 
                        price="$1000" 
                        title="Tshirt" 
                         // Use onClick with capital "C"
                    />
                    {/* Additional ProductCard components can go here */}
                </div>
            </section>
            <br /><br /><br /><br /><br />
            <Footer />
            <Copyright />
        </div>
    );
}

export default Page;
