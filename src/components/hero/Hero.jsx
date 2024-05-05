import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Welcome to your Books-Stand!</h1>
      <h3>Feel free to let you get expired</h3>
      <img src="./images/book.png" alt="hero-img" max-width="300px" />
    </div>
  );
};

export default Hero;
