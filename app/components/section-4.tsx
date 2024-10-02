import React from 'react';
import Link from 'next/link';

function Section_4() {
    return (
        <div>
            <section className="section-5" id="section-5">
                <h1>Getting started</h1>
                <br />
                <p>Signup for the best selling products and comprehensive market place</p>
                <br /><br />
                <div className="s-5-container">
                    <input type="text" name="email" placeholder="Enter email" />
                    <button type="button">Signup</button>
                </div>
                <br /><br />
                <Link href={'/open-shop'}>Or open a shop instead</Link>
            </section>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Section_4;