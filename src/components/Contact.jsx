import React from 'react';
import './Contact.css';

export default function Blog() {
  return (
    <div>
      <div className='header-parent1'>
        <div className='header-center'>
          <img src='./header.png' alt='' />
          <div className='Blog'>
            <img src='logo2.svg' alt='' />
            <h1>Blog</h1>
            <div className='h4'>
              <h4>Home</h4>
              <img src='w.svg' alt='' />
              <h4>Blog</h4>
            </div>
          </div>
        </div>
        <div className='blog-parent'>
          <div className='blog-l'>
            <div className='card'>
              <img src='blog.svg' alt='' />
              <div className='card-p'>
                <p>Admin</p>
                <p>14 Oct 2022</p>
                <p>Wood</p>
              </div>
              <h2>Going all-in with millennial design</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore brmagna
                aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet. Libero
                enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit <br /> ullamcorper dignissim cras
                tincidunt. Pharetra et ultrices neque ornare aenean euismod
                elementum.
              </h4>
              <button>Read more</button>
            </div>
            <div className='card'>
              <img src='s.svg' alt='' />
              <div className='card-p'>
                <p>Admin</p>
                <p>14 Oct 2022</p>
                <p>Wood</p>
              </div>
              <h2>Going all-in with millennial design</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore brmagna
                aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet. Libero
                enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit <br /> ullamcorper dignissim cras
                tincidunt. Pharetra et ultrices neque ornare aenean euismod
                elementum.
              </h4>
              <button>Read more</button>
            </div>
            <div className='card'>
              <img src='s1.svg' alt='' />
              <div className='card-p'>
                <p>Admin</p>
                <p>14 Oct 2022</p>
                <p>Wood</p>
              </div>
              <h2>Going all-in with millennial design</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <br /> dolore brmagna
                aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi
                blandit cursus risus at ultrices mi tempus imperdiet. Libero
                enim sed faucibus turpis <br /> in. Cursus mattis molestie a
                iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit <br /> ullamcorper dignissim cras
                tincidunt. Pharetra et ultrices neque ornare aenean euismod
                elementum.
              </h4>
              <button>Read more</button>
            </div>
          </div>
          <div className='blog-r'>
            <div className='card1'>
              <div className='categoria'>
                <input type='text' placeholder='serch' />
                <div className='text'>
                  <h3>Categories</h3>

                  <h4>Crafts (2)</h4>
                  <h4>Design (8)</h4>
                  <h4>Handmade (7)</h4>
                  <h4>Interior (1)</h4>
                  <h4>Wood (6)</h4>
                </div>
              </div>
              <div className='resnt'>
                <h3>Recent Posts</h3>
                <div className='copy'>
                  <div className='text1'>
                    <img src='resnt.svg' alt='' />
                  </div>
                  <div className='text2'>
                    <h4>
                      Going all-in with <br /> millennial design
                    </h4>
                    <h5>03 Aug 2022</h5>
                  </div>
                </div>
                <div className='copy'>
                  <div className='text1'>
                    <img src='img.png' alt='' />
                  </div>
                  <div className='text2'>
                    <h4>
                      Going all-in with <br /> millennial design
                    </h4>
                    <h5>03 Aug 2022</h5>
                  </div>
                </div>{' '}
                <div className='copy'>
                  <div className='text1'>
                    <img src='img1.png' alt='' />
                  </div>
                  <div className='text2'>
                    <h4>
                      Going all-in with <br /> millennial design
                    </h4>
                    <h5>03 Aug 2022</h5>
                  </div>
                </div>{' '}
                <div className='copy'>
                  <div className='text1'>
                    <img src='img2.png' alt='' />
                  </div>
                  <div className='text2'>
                    <h4>
                      Going all-in with <br /> millennial design
                    </h4>
                    <h5>03 Aug 2022</h5>
                  </div>
                </div>{' '}
                <div className='copy'>
                  <div className='text1'>
                    <img src='img4.png' alt='' />
                  </div>
                  <div className='text2'>
                    <h4>
                      Going all-in with <br /> millennial design
                    </h4>
                    <h5>03 Aug 2022</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
