import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Contact.css";
import FAQMenu from "../FAQMenu/FAQMenu";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <div className="wrapper_contact">
        <div className="contact_wrap">
          <div className="contact_content">
            <FAQMenu />
            <div className="FAQ_column">
              <h2> Website FAQ</h2>
              <h3>How I can contact TMDB?</h3>
              <p>You can find our contact links here</p>
              <h3>Do I have to have an account?</h3>
              <p>
                No, you do not. You will need an account if you would like to
                access certain account features like rating movies and
                maintaining your favorites and/or watchlist. You will also need
                an account to edit data.
              </p>
              <h3>Does it cost to use the site?</h3>
              <p>No, it is free to use our website.</p>
              <h3>Can I help out with the website translations?</h3>Can I help
              out with the website translations?
              <p>
                Yes, you can! We use a service called Locale for this. Our
                project page can be found here and everyone can contribiute!
              </p>
              <h3>How can I use the data?</h3>
              <p>
                Our data can be used in many different ways. A good showcase can
                be found on our apps page. You are strictly prohibited from
                scraping data from the website.
              </p>
              <h3>How do I add a title?</h3>
              <p>
                Click the "Add New Movie" link in the top right corner of the
                website once you are signed up and logged in.
              </p>
              <h3>How do I add or correct information?</h3>
              <p>
                A series of "Edit" links will appear throughout the website once
                you are signed up and logged in. Click on any one of these links
                to help us build our database.
              </p>
              <h3>How do I correct a title?</h3>
              <p>
                A series of "Edit" links will appear throughout the website once
                you are signed up and logged in. Click on the "Edit" link next
                to the "Movie Facts" or "TV Show Facts" and you'll be taken to
                the "Primary Facts" edits page. From here, you will see fields
                to edit the original and translated titles.
              </p>
              <h3>How do I add a title in pre-production?</h3>
              <p>
                Following the same steps above to get to the "Primary Facts"
                edit page, you will see a dropdown for the "Movie" or "TV Show"
                status and then set the field to "Planned".
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
