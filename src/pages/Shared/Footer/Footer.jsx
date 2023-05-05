import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div>
    
      {
           <section id="contact-section">
         <div className="row">
         <div className="col-lg-8">
             <iframe className="map"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.945448178661!2d91.90112830144764!3d24.89984233395701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054aeedc809bb%3A0x60b5f614c843a3bf!2sTilagor%2C%20Sylhet%2C%20Bangladesh!5e0!3m2!1sen!2sfi!4v1603751552543!5m2!1sen!2sfi"
                 frameborder="0" style={{border:"0" }} allowfullscreen="" aria-hidden="false"
                 tabindex="0"></iframe>
         </div>
         <div className="col-lg-4">
             <div className="contact-details">
                 <h3>Contact Details</h3> <br/>

                 <div>
                     <h5>Ranna Ghor Hotel & Restaurant</h5>
                     <address>
                         192 London Avenue,
                         Manor park,
                         London
                     </address> <br/>
                 </div>

                 <div>
                     <h5>Phone : </h5>
                     <p>+8801710444700</p><br/>
                 </div>
                 <div>
                     <h5>Opening hours :</h5>
                     <p>
                         Tue-Sun: 5PM to 11PM <br/>
                         Inc. Bank Holidays
                     </p>
                 </div>
             </div>
         </div>
     </div>
     </section>
      }
    </div>
  );
};

export default Footer;
