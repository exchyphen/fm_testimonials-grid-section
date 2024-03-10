import "./App.css";

/* images */
import Daniel from "./assets/images/image-daniel.jpg";
import Jeanette from "./assets/images/image-jeanette.jpg";
import Jonathan from "./assets/images/image-jonathan.jpg";
import Kira from "./assets/images/image-kira.jpg";
import Patrick from "./assets/images/image-patrick.jpg";

function App() {
  return (
    <>
      <main className="grid">
        <article className="testimonial1 testimonial">
          <header className="testimonial-header">
            <img
              className="testimonial-img testimonial1__img"
              src={Daniel}
              alt="daniel profile img"
            ></img>
            <hgroup className="testimonial__hgroup">
              <h2 className="testimonial__profile-name profile-name-light">
                Daniel Clifford
              </h2>
              <p className="testimonial__profile-title text-light">
                Verified Graduate
              </p>
            </hgroup>
          </header>

          <h1 className="header-light">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </h1>
          <p className="text-light">
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </article>

        <article className="testimonial2 testimonial">
          <header className="testimonial-header">
            <img
              className="testimonial-img testimonial2__img"
              src={Jonathan}
              alt="jonathan profile img"
            ></img>
            <hgroup className="testimonial__hgroup">
              <h2 className="testimonial__profile-name profile-name-light">
                Jonathan Walters
              </h2>
              <p className="testimonial__profile-title text-light">
                Verified Graduate
              </p>
            </hgroup>
          </header>

          <h1 className="header-light">
            The team was very supportive and kept me motivated
          </h1>
          <p className="text-light">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </article>

        <article className="testimonial3 testimonial">
          <header className="testimonial-header">
            <img
              className="testimonial-img testimonial3__img"
              src={Jeanette}
              alt="jeanette profile img"
            ></img>
            <hgroup className="testimonial__hgroup">
              <h2 className="testimonial__profile-name profile-name-dark">
                Jeanette Harmon
              </h2>
              <p className="testimonial__profile-title text-light">
                Verified Graduate
              </p>
            </hgroup>
          </header>

          <h1 className="header-dark">
            An overall wonderful and rewarding experience
          </h1>
          <p className="text-dark">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </article>

        <article className="testimonial4 testimonial">
          <header className="testimonial-header">
            <img
              className="testimonial-img testimonial4__img"
              src={Kira}
              alt="kira profile img"
            ></img>
            <hgroup className="testimonial__hgroup">
              <h2 className="testimonial__profile-name profile-name-dark">
                Kira Whittle
              </h2>
              <p className="testimonial__profile-title text-light">
                Verified Graduate
              </p>
            </hgroup>
          </header>

          <h1 className="header-dark">
            Such a life-changing experience. Highly recommended!
          </h1>
          <p className="text-dark">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </article>

        <article className="testimonial5 testimonial">
          <header className="testimonial-header">
            <img
              className="testimonial-img testimonial5__img"
              src={Patrick}
              alt="patrick profile img"
            ></img>
            <hgroup className="testimonial__hgroup">
              <h2 className="testimonial__profile-name profile-name-light">
                Patrick Abrams
              </h2>
              <p className="testimonial__profile-title text-light">
                Verified Graduate
              </p>
            </hgroup>
          </header>

          <h1 className="header-light">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h1>
          <p className="text-light">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </article>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
