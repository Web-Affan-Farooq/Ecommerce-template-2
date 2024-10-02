import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Copyright from '../components/copyright';
import "../styles/openshop/open-shop-home.css";
import "../styles/openshop/form.css";

function page() {
  return (
    <div>
      <Header/>
    <div className='open-shop-home-container'>
      <br /><br /><br /><br /><br /><br /><br />
      <div className="open-shop-home">
        <h1>Open shop</h1>
        <br /><br />
        <p>Join our market place with active community of marketers and make the best ever leads</p>
        <br /><br /><br />
        <input type="text" name='username' id="username" required placeholder='Enter your name'/>
        <input type="number" name='age' id="age" required placeholder='Enter your age'/>
        <input type="text" name='shopname' id="shopname" required placeholder='Enter shop name'/>
        {/* <div>
        <label htmlFor="Do your business have any physical presence">Do your business have any physical presence</label><input type="radio" name='shoppresence' value="yes" />Yes<input type="radio" name='shoppresence' value="no" />No
        </div> */}
        <label htmlFor="Enter phonenumber (for help line)">Enter phonenumber (for help line)</label>
        <input type="tel" name='phoneForHelpline' placeholder='Enter phonenumber' required id='phonenumber-for-helpline'/>
        <label htmlFor="Enter phonenumber (for business)">Enter phonenumber (for business)</label>
        <input type="tel" name='phoneForBusiness' placeholder='Enter phonenumber' required id='phonenumber-for-business'/>
        <label htmlFor="Country">Enter country</label>
        <input type="text" name='country' id="country" required  placeholder='Enter country name'/>
        <label htmlFor="city">Enter city</label>
        <input type="text" name='city' id="city" required  placeholder='Enter city name'/>
        <label htmlFor="Select location">Select location</label>
        <iframe src="http://localhost:3000/open-shop"></iframe>
        <label htmlFor="Email (for customers)">Email for customers</label>
        <input type="email" name='emailCustomers' id='email-for-customers' required placeholder='Enter email' />
        <label htmlFor="Email (for business)">Email for business</label>
        <input type="email" name='emailBusiness' id='email-for-business' required placeholder='Enter email' />
      </div>
    </div>
    <br /><br />
    <Footer />
    <Copyright/>
    </div>
  )
}

export default page