import React from 'react';
import Link from 'next/link';

function Section_3() {
    return (
        <div>
            <section className="section-3" id="section-3">
                <h1>Popular categories</h1>
                <div className="s-3-container">
                    <Link href={'/market'}>                    <div className="s-3-child">
                        <h2>Men</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? Quae, atque
                            ad. Esse quaerat mollitia expedita provident </p>
                    </div></Link>

                    <Link href={'/market'}>
                        <div className="s-3-child">
                            <h2>Women</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? Quae, atque
                                ad. Esse quaerat mollitia expedita provident </p>
                        </div></Link>

                    <Link href={'/market'}>
                        <div className="s-3-child">
                            <h2>Assessories</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? Quae, atque
                                ad. Esse quaerat mollitia expedita provident </p>
                        </div></Link>

                    <Link href={'/market'}>
                        <div className="s-3-child">
                            <h2>Cosmetics</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? Quae, atque
                                ad. Esse quaerat mollitia expedita provident </p>
                        </div></Link>

                    <Link href={'/market'}>                    <div className="s-3-child">
                        <h2>Digital products</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? Quae, atque
                            ad. Esse quaerat mollitia expedita provident </p>
                    </div></Link>
                    <Link href={'/market'}>
                        <div className="s-3-child">
                            <h2>Men</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? Quae, atque
                                ad. Esse quaerat mollitia expedita provident </p>
                        </div></Link>
                </div>
            </section>
        </div>
    )
}

export default Section_3;
