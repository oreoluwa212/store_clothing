import '../styles/PageStyles.scss';
import NavBar from './NavBar';
import Owner from '../assets/images/owner.png';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-wrapper">
      <NavBar />

      <div className="about-section">
        <img src={Owner} alt="" />

        <div className="apparel">
          <h1>PARTICIPLE+ WEARABLE HISTORY</h1>

          <div>
            <p>
              Participle+ was founded by our designer and creator Lily Chen in
              the fictional city of Riverside in 2018. The Obsidian in our
              product line inherits its deep black color from being woven from
              fine, dark threads. Our stunning fabric draws upon its rich
              history in a contemporary way. Our unique product line presents
              the dedicated individually handcrafted precision of artistry and
              design.
            </p>
            <p>
              While developing a new piece, Lily is not focused on the
              historical or aesthetic value - she is dedicatedly working on it,
              focusing on the end result and trying to technically realize the
              very vision of the piece in her mind.
            </p>
            <p>
              While we cater to various market needs, our goal is to design and
              create bespoke, authentically handcrafted pieces of clothing that
              will be cherished and worn with a personalized touch for many
              generations to come.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
