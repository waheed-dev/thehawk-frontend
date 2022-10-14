/* eslint-disable react/no-unescaped-entities */
import Layout from '@/layout/index'
import React from 'react'

export default function ContactUsPage() {
  return (
    <>
      <Layout>
        <div class="main-content container">

          <div class="col-md-12 blog-single">
            <div class="bs-meta">
              <span class="bs-cat">Contact Us</span>
            </div>
            <div class="space30"></div>

            <div class="map">
              <div class="gmap">
                <div id="map"></div>
              </div>
            </div>
            <h3>Duis Autem Veleum Iriure Dolor in Hendrerit</h3>

            <div class="c-info">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
              <div class="space30"></div>
              <div class="row">
                <div class="col-md-6">
                  <h6>Head Office :</h6>
                  <p><span>Location</span> <em>The Hawk E-63, Industrial Area, Bahadrabad Haridwar (Uttarakhand) 249 402

                  </em></p>
                  <p><span>Phone No</span> <em>+91-01334-233131,233232</em></p>
                  <p><span>Fax</span> <em>+91-01334-233434, 231414</em></p>
                  <p><span>Email</span> <em>mail @thehawk.in </em></p>

                  <p> <em>Main Office (Saharanpur) </em></p>
                  <p> <em>The Hawk / Dainik Hawk </em></p>
                  <p> <em>Dehradun Road, Gagalheri

                  </em></p>
                  <p> <em>Post Box 8, Saharanpur

                  </em></p>
                  <p> <em>(UP) 247 669



                  </em></p>
                  <p><span>Mob</span> <em>9997775577 / 9412070007 </em></p>
                </div>
                <div class="col-md-6">
                  <h6>City Office

                    :</h6>
                  <p><span>The Hawk / Dainik Hawk

                  </span></p>
                  <p><span>Prakash City Heart, Vishwakarma Chowk

                  </span> </p>
                  <p><span>Brijesh Nagar, Sadar Thana Road

                  </span>
                  </p>
                  <p><span>Saharanpur (U P) 247 001

                  </span></p>
                  <p><span>Mob: 9897206206 </span></p>
                </div>
                <div class="col-md-6">
                  <h6>Delhi Office: :</h6>
                  <p><span>The Hawk / Dainik Hawk</span> </p>
                  <p><span>Incharge Soumitra Bose

                  </span> </p>
                  <p><span>C-528, Flat 7, First Floor

                  </span> </p>
                  <p><span>Lane 1, Said-ul-Ajaib

                  </span> </p>
                  <p><span>Behind Saket Metro Station



                  </span> </p>
                  <p><span>New Delh 110 030



                  </span> </p>
                  <p><span>Mob: 9540547894



                  </span> </p>
                </div>

                <div class="col-md-12">
                  <h6>Owner & Publisher: Pushkar Raj Kapoor Editor: Pushkar Raj Kapoor</h6>
                  <p><span>Editor In Chief

                  </span> </p>
                  <p><span>Pushkar Raj Kapoor Phone: +91-9997775577,9412070007

                  </span> </p>
                  <p><span>Assistant Editor

                  </span>
                  </p>
                  <p><span>Rishabh Kapoor Phone: +91-9897206206

                  </span>
                  </p>
                  <p><span>Registered Office



                  </span>
                  </p>
                  <p><span>The Hawk Mauni Ashram, Bhimgoda Road Post Box 3, Haridwar (Uttarakhand) 249 401



                  </span>
                  </p>
                  <p><span>Phone No: +91-9412070007, 9997775577



                  </span>
                  </p>
                  <p><span>https://thehawk.in/contact-us

                  </span>
                  </p>




                </div>
              </div>
            </div>

            <div id="tabwrap" class="c-tabs">
              <ul id="tabs">
                <li class="current"><a href="#contact">Send Message</a></li>
              </ul>

              <div id="content">
                <div id="contact" class="current">
                  <form class="c-form" id="contactForm" action="php/contact.php" method="post">
                    <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                    <label>Name <span>*</span></label>
                    <input type="text" name="senderName" id="senderName" Required />
                    <label>Email <span>*</span></label>
                    <input type="email" name="senderEmail" id="senderEmail" Required />
                    <label>Subject <span>*</span></label>
                    <input type="text" name="subject" id="subject" Required />
                    <label>Message</label>
                    <textarea name="message" id="message"></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                  <div id="successMessage" class="successmessage">
                    <p><span class="success-ico"></span> Thanks for sending your message! We'll get back to you shortly.</p>
                  </div>
                  <div id="failureMessage" class="errormessage">
                    <p><span class="error-ico"></span> There was a problem sending your message. Please try again.</p>
                  </div>
                  <div id="incompleteMessage" class="statusMessage">
                    <p>Please complete all the fields in the form before sending.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Layout>
    </>
  )
}
