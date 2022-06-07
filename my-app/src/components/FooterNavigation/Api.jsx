import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Guidelines.css";
import FAQMenu from "../FAQMenu/FAQMenu";
export default function Api() {
  return (
    <div>
      <div class="wrapper_bg_white">
        <Header />
        <div class="contact_wrap">
          <div class="contact_content">
            <FAQMenu />
            <div class="FAQ_column">
              <h2> Terms of Use</h2>
              <h2> API Overview</h2>
              <p>
                The API service is for those of you interested in using our
                movie, TV show or actor images and/or data in your application.
                Our API is a system we provide for you and your team to
                programmatically fetch and use our data and/or images.
              </p>
              <p>
                The API provides a fast, consistent and reliable way to get
                third party data.
              </p>
              <h3>
                What is the difference between a commercial API and a developer
                API?
              </h3>
              <p>
                A commercial API is for commercial projects and a developer API
                is for developers. Your project is considered commercial if the
                primary purpose is to create revenue for the benefit of the
                owner.
              </p>
              <h3>How do I apply for an API key?</h3>
              <p>
                You can apply for an API key by clicking the "API" link from the
                left hand sidebar within your account settings page. You need to
                have a legitimate business name, address, phone number and
                description to apply for an API key.
              </p>
              <h3>Does the API key cost anything?</h3>
              <p>
                Our API is free to use as long as you attribute TMDB as the
                source of the data and/or images. However, we reserve the right
                to charge for the commercial API key in the future.
              </p>
              <h3>Is there an SLA?</h3>
              <p>
                We do not currently provide an SLA. However, we make every
                reasonable attempt to keep our service online and accessible.
              </p>
              <h3>Are there any API wrappers or libraries I can use?</h3>
              <p>There sure is! Check them out here.</p>
              <h3>What about SSL?</h3>
              <p>
                It's currently available API wide. This includes both the API
                endpoints and assets served via our CDN. We strongly recommend
                you use SSL.
              </p>
              <h3>
                Does the API ever change? How can learn about new features?
              </h3>
              <p>
                Yes, it can from time to time. We try our best to post these
                relevant updates to the official documentation.
              </p>
              <h3>What are the attribution requirements?</h3>
              <p>
                You shall use the TMDB logo to identify your use of the TMDB
                APIs. You shall place the following notice prominently on your
                application: "This product uses the TMDB API but is not endorsed
                or certified by TMDB." Any use of the TMDB logo in your
                application shall be less prominent than the logo or mark that
                primarily describes the application and your use of the TMDB
                logo shall not imply any endorsement by TMDB. When attributing
                TMDB, the attribution must be within your application's "About"
                or "Credits" type section. When using a TMDB logo, we require
                you to use one of our approved logos.
              </p>
              <h3>Can I make changes to the API?</h3>
              <p>No, you cannot. Our API is closed source.</p>
              <h3>Are there branding requirements?</h3>
              <p>
                Our logo should not be modified in color, aspect ratio, flipped
                or rotated except where otherwise noted. Our logo can be white,
                black or any of the approved colors used throughout our
                branding. For a list of official logos, see our logos and
                attribution page. When referring to TMDB, you should use either
                the acronym "TMDb" or the full name "The Movie Database". Any
                other name is not acceptable. When linking back to our website,
                please point your link to "https://www.themoviedb.org/". If you
                are putting our footer__company name or logo on any merchandise
                or product packaging please consult us beforehand for approval.
              </p>
              <h3>API Legal Notice</h3>
              <p>
                We do not claim ownership of any of the images or data in the
                API. We comply with the Digital Millennium Copyright Act (DMCA)
                and expeditiously remove infringing content when properly
                notified. Any data and/or images you upload you expressly grant
                us a license to use. You are prohibited from using the images
                and/or data in connection with libelous, defamatory, obscene,
                pornographic, abusive or otherwise offensive content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
