import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FAQMenu from "./FAQMenu";
import "./General.css"

export default function General() {
  return (
    <div>
      <div className="general">
        <Header />
        <div className="general__wrapper">
          <div className="general__content">
            <FAQMenu />
            <div className="general__column">
              <h2> General FAQ</h2>
              <h3>Where did all of your data come from?</h3>
              <p>
                You! Since starting this project in 2008, we've been lucky
                enough to have users just like you add and edit
                missing/incorrect data. Think of TMDB as a very specialised
                version of Wikipedia where everything is editable but very
                specialised around only movie, TV and actor data. We started
                with an initial data contribution from a project called omdb
                with only 10,000 movies in 2009. Everything added and edited
                since then has been users just like you! In October 2013, we
                finally added TV. Since we didn't want to start with an empty
                database we opted to bring an intial import of data from
                Freebase. Unfortunately, Freebase is no longer online and was
                shut down in 2016.
              </p>
              <h3>How many movies are on TMDB?</h3>
              <p>As of this writing, we currently have 744,752 movies.</p>
              <h3>How many TV shows are on TMDB?</h3>
              <p>As of this writing, we currently have 128,293 tv shows.</p>
              <h3>How many TV episodes are on TMDB?</h3>
              <p>
                {" "}
                As of this writing, we currently have 3,081,240 tv episodes.
              </p>
              <h3>How many people are on TMDB?</h3>
              <p>As of this writing, we currently have 2,417,993 people.</p>
              <h3>Is TMDB on Twitter or Facebook?</h3>
              <p> We sure are! You can check us out on Twitter and Facebook.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
