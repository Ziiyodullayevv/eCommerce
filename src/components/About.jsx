import React from 'react';
import './Contact.css';

const About = () => {
  return (
    <div>
      <main>
        <div className='main-head'>
          <img src='/img2.png' alt='' />
          <h2>Contact</h2>
          <div className='min'>
            <p>Home </p>
            <p>Contact</p>
          </div>
        </div>

        <div className='main-parent'>
          <div className='main-text'>
            <h2>Get In Touch With Us</h2>
            <p>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us <br /> An Email. Our Staff Always Be There To Help
              You Out. Do Not Hesitate!
            </p>
          </div>

          <div className='main-b'>
            <div className='main-left'>
              <div className='card'>
                <h6>Address</h6>
                <p>
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{' '}
                  States
                </p>
              </div>
              <br />
              <div className='card'>
                <h6>Address</h6>
                <p>
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{' '}
                  States
                </p>
              </div>
              <br />
              <div className='card'>
                <h6>Address</h6>
                <p>
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{' '}
                  States
                </p>
              </div>
            </div>

            <div className='main-right'>
              <div className='card'>
                <h4>Your name</h4>
                <input placeholder='Abc' type='text' />
              </div>
              <br />
              <div className='card'>
                <h4>Email address</h4>
                <input placeholder='Abc@def.com' type='text' />
              </div>{' '}
              <br />
              <div className='card'>
                <h4>Subject</h4>
                <input placeholder='This is an optional' type='text' />
              </div>
              <div className='card'>
                <h4>Message</h4>
                <textarea placeholder='Hi! i’d like to ask about' type='text' />
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>

        <div className='main-foot'>
          <div className='main-f'>
            <div className='car'>
              <div className='min2'>
                <img src='/img3.png' alt='' />
              </div>
              <div className='min2'>
                <h5>High Quality</h5>
                <p>crafted from top materials</p>
              </div>
            </div>
            <div className='car'>
              <div className='min2'>
                <img src='/img3.png' alt='' />
              </div>
              <div className='min2'>
                <h5>Warranty Protection</h5>
                <p>Over 2 years</p>
              </div>
            </div>{' '}
            <div className='car'>
              <div className='min2'>
                <img src='/img3.png' alt='' />
              </div>
              <div className='min2'>
                <h5>Free Shipping</h5>
                <p>Order over 150 $</p>
              </div>
            </div>{' '}
            <div className='car'>
              <div className='min2'>
                <img src='/img3.png' alt='' />
              </div>
              <div className='min2'>
                <h5>24 / 7 Support</h5>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
