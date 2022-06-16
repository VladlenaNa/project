import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Terms.css";
import FAQMenu from "../FAQMenu/FAQMenu";
import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <div>
      <div className="terms">
        <Header />
        <Helmet>
          <title>Terms of use</title>
        </Helmet>
        <div className="terms__wrapper">
          <div className="terms__content">
            <FAQMenu />
            <div className="terms__column">
              <h2> Terms of Use</h2>
              <h3>Things you should do...</h3>
              <p>
                Welcome to our website located at http://www.themoviedb.org
                (this "Site")! This Site is operated by TiVo Platform
                Technologies, LLC and/or its corporate affiliates ("we," "us"
                and "our") and allows you to: (a) participate in interactive
                features that we may make available from time to time through
                the Site; or (b) simply view this Site (collectively, the
                "Services"). We prepared this Terms of Use Agreement (this
                "Agreement") to help explain the terms that apply to your use of
                this Site and Services. Provisions in these terms that apply to
                the Site shall also apply to the Services, and provisions in
                these terms that apply to the Services shall also apply to this
                Site. In order to use the interactive features on this Site, you
                must first register with us through our on-line registration
                process on this Site. Regardless of how you decide to use this
                Site, your conduct on this Site and use of the Services is
                governed by this Agreement. YOU ACCEPT THIS AGREEMENT BY USING
                THIS SITE AND/OR THE SERVICES IN ANY MANNER. IF YOU DO NOT AGREE
                TO ALL THESE TERMS THEN DO NOT USE THIS WEBSITE.
              </p>
              <h3>1. Membership</h3>
              <p>
                When you use this Site, you represent that: (a) the information
                you submit is truthful and accurate; (b) you will update your
                contact information if it changes so that we can contact you;
                (c) your use of this Site and your use of services available on
                this Site do not violate any applicable law or regulation; (d)
                you are 13 years of age or older; and (e) you will comply with
                the footer__rules for on-line conduct and making Contributions
                (as defined in Section 2 below) to this Site, as discussed in
                Section 2 below. You further represent and warrant that you will
                comply with all local footer__rules regarding on-line conduct
                and acceptable Contributions.
              </p>
              <h3>2. User conduct</h3>
              <p>
                {" "}
                This Site may provide fora and other features for communication.
                Please read our Privacy Policy, available to understand your
                privacy protections. You are entirely responsible for the
                content of, and any harm resulting from, any of your postings or
                submissions to this Site (collectively, "Contributions"). You
                understand that we may also make the Contributions you submit
                available to other websites and businesses (such other websites
                and businesses, the "Network") where they may be used. Any
                licenses or other rights grants, and promises, representations
                and warranties you make about the Contributions with respect to
                this Site or the Services, you are also hereby making with
                respect to the use of such Contributions through and by the
                Network (i.e., wherever you are granting a license or other
                rights grant, or making a promise, representation or warranty,
                with respect to this Site or the Services, that grant, promise,
                representation or warranty shall be deemed and construed to also
                apply to the Network). When you create or make available a
                Contribution, you represent and warrant that you:
              </p>
              <h3>3. Grant of License to Us for Contributions</h3>
              <p>
                We do not claim any ownership right in the Contributions that
                you post on or through this Site. After posting your
                Contributions on this Site, you continue to retain any rights
                you may have in your Contributions, including any intellectual
                property rights or other proprietary rights associated with your
                Contributions, subject to the license you grant to us below. By
                making a Contribution to this Site, you grant us a perpetual,
                non-exclusive (meaning you are free to license your Contribution
                to anyone else in addition to us), fully-paid, royalty-free
                (meaning that neither we nor anyone who directly or indirectly
                receives the Contribution from us are required to pay you to use
                your Contribution), sublicensable (so that we can distribute the
                Contributions to third parties, regardless of whether through
                this Site, through our other products, or through other sites or
                products offered by our affiliates)) and worldwide (because the
                Internet and this Site are global in reach) license to use,
                modify, create derivative works of, publicly perform, publicly
                display, reproduce and distribute the Contribution in connection
                with this Site and other websites and businesses, or the
                promotion thereof in any media formats and through any media
                channels now known or hereafter devised. If you provides us with
                any feedback (e.g. suggested improvements, corrections etc.)
                about the Site or Services ("Feedback"), you assign all right,
                title and interest in and to such Feedback to us and acknowledge
                that we will be entitled to use, including without limitation,
                implement and exploit, any such Feedback in any manner without
                any restriction or obligation. You further acknowledge and agree
                that we are not obligated to act on such Feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
