import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Guidelines.css";
import FAQMenu from "../FAQMenu/FAQMenu";
export default function Guidelines() {
  return (
    <div>
      <div class="wrapper_bg_white">
        <Header />
        <div class="contact_wrap">
          <div class="contact_content">
            <FAQMenu />
            <div class="FAQ_column">
              <h2> Community Guidelines on TMDB</h2>
              <h3>Things you should do...</h3>
              <p>
                Respect everyone, we're all here because we have something in
                common. Be polite and welcoming to new users. We were all new
                once. Ask for help and provide assistance to others when
                possible. Offer constructive criticism or voice a dissenting
                opinion, but don't be mean or disrespectful. Feel free to use
                use Emoji (Emoticons) to convey the tone of your message. :wink:
                Lead by example. Treat others even better than you expect to be
                treated yourself and the discussions become a better place for
                everyone.
              </p>
              <h3>Things you should not do...</h3>
              <p>
                Do not share or ask for links to copyrighted, non-fair use
                material. Do not share any NSFW* content (e.g. links, images,
                text etc.) on your profile or in forum discussions. Trolling,
                abuse, flaming and/or harassment (e.g. personal attacks,
                name-calling and/or insulting/ridiculing another user) are
                uncalled for and will not be tolerated. Have discussions based
                on well-formulated arguments. Do not post spam** or
                advertisements on TMDB. Double posting is frowned upon. Please
                edit your first post unless a second post is absolutely
                necessary. Impersonating another user of TMDB by copying their
                name and/or avatar is not allowed. Just be your charming self.
              </p>
              <h3>General site community rules</h3>
              <p>
                Offensive or distasteful usernames are unnecessary and will
                either be changed or banned. One account per person is enough.
                Multiples are unnecessary and will be banned and/or removed. But
                most importantly; "Be nice or go home!"
              </p>
              <p>
                [*] Content that might be considered offensive or too sexually
                explicit for the wide range of age groups within the TMDB user
                base. This includes, but is not limited to: erotic (e.g. nudity,
                implied sexual acts), excessively violent (e.g. gore, torture),
                bigoted (irrationally hateful content aimed at, or relating to,
                a group or individual) and harmful (e.g. those flashing seizure
                images) content.
              </p>
              <p>
                [**] Content lacking any purpose or relevance whatsoever;
                off-topic posts that derail a thread from its original topic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
