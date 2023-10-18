import React from "react";
import "./HomeSectionThree.css";
import coinImg from "../../../Asset/coin_img.webp";
import coin_img_two from "../../../Asset/coin_img_two.webp";
import coin_img_three from "../../../Asset/coin_img_three.webp";

const HomeSectionThree = () => {
  return (
    <section className="homeSectionThree">
      <div className="homeSectionThreeContainer">
        <div className="homeSectionThreeFirst">
          <article>
            <p className="payOne">Pay anyone, instantly</p>
            <p className="anytime">
              Send and receive money anytime, anywhere.</p> <p> It’s fast, free, and
              seamless.
            </p>
          </article>
          <article>
            <img src={coinImg} alt="coinImg" />
          </article>
        </div>

        <div>
          <article>
            <img src={coin_img_two} alt="coinImg" />
          </article>
          <article>
            <p>Pay anyone, instantly</p>
            <p>
              Send and receive money anytime, anywhere. It’s fast, free, and
              seamless.
            </p>
          </article>
        </div>

        <div>
          <article>
            <p>Pay anyone, instantly</p>
            <p>
              Send and receive money anytime, anywhere. It’s fast, free, and
              seamless.
            </p>
          </article>
          <article>
            <img src={coin_img_three} alt="coinImg" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
