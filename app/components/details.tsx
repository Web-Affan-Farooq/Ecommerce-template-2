import React from 'react';


function Details() {
  return (
    <div className='details'>
    <div className="content">
        <h1 className="name">Tshirt</h1>
        <br />
        <h1>Description</h1>
        <br />
        <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, quod. Quia nobis repellat at non ipsa soluta? Deleniti veritatis ullam itaque provident esse architecto inventore quas, distinctio, repellat magni fugit.
        </p>
    </div>
    <div className="product-img">
        <img src="https://i.pinimg.com/564x/39/f0/bb/39f0bb0664cdf534463580ecd4c6a0d9.jpg" alt="" />
    </div>
    </div>
  )
}

export default Details;