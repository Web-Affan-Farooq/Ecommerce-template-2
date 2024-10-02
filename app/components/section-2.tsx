import React from 'react';
import Link from 'next/link';

function Section_2() {
    return (
        <div>
            <section className="section-2" id="section-2">
                <h3>You dont have to go.</h3>
                <br />
                <p>A collective market place for both sellers and customers.</p>
                <br /><br />
                <Link href={'/market'}>
                <button className="btn-2" type="button">Explore</button>
                </Link>
            </section>
        </div>
    )
}

export default Section_2;