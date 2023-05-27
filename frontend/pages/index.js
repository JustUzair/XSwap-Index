import Head from "next/head";
import Link from "next/link";
import { Button } from "@mantine/core";
import heroHome from "../public/images/hero-home.png";
import coneA from "../public/images/iceconea.png";
import coneB from "../public/images/iceconeB.png";
import ice from "../public/images/ice.png";
import token from "../public/images/tokens.png";

export default function Home() {
  return (
    <>
      <main className="main">
        <div
          style={{
            background:
              "radial-gradient(103.12%50%at 50%50%,#21193a 0%,#191326 100%)",
          }}
        >
          <section className="home container" id="home">
            <div className="home__content grid">
              <div className="home__group">
                <img src={heroHome.src} alt="icecream" className="home__img" />
                <div className="home__indicator"></div>
                <div className="home__details-img">
                  <h4 className="home__details-title">
                    Invest in all of blockchain with one token
                  </h4>
                  <span className="home__details-subtitle">
                    Save your time and money
                  </span>
                </div>
              </div>
              <div className="home__data">
                <h3 className="home__subtitle"></h3>
                <h1 className="home__title">
                  Cryptocurrencies unite, <br />
                  create a spooky <br />
                  index in sight!{" "}
                </h1>
                <p className="home__description">
                  Create your perfect portfolio with ease - customize and
                  rebalance your index token with just a few clicks. Take
                  control of your investments like never before.{" "}
                </p>
                <div className="home__buttons">
                  <Link href="/create-index-token">
                    <Button color="dark" radius="md" size="lg">
                      Create Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div
            style={{
              position: "relative",
              marginTop: "2px",
            }}
          >
            <svg
              viewBox="0 0 1660 339"
              className="sc-4ba21b47-0 IIbzK slide-svg-dark"
              width="100%"
              color="text"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                bottom: "0%",
                left: 0,
                right: 0,
                zIndex: "10",
              }}
            >
              <path
                d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
                fill="url(#paint0_linear_dark)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_dark"
                  x1="830"
                  y1="83.5"
                  x2="830"
                  y2="338.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#08060B" stopOpacity="0.2"></stop>
                  <stop
                    offset="0.545554"
                    stopColor="#08060B"
                    stopOpacity="0.5"
                  ></stop>
                  <stop offset="1" stopColor="#08060B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Section Category */}
        {
          <section
            className="section category"
            style={{
              background: "linear-gradient(180deg,#09070c 22%,#201335 100%)",
              position: "relative",
            }}
          >
            <h1
              className="section__title"
              style={{
                color: "#fafafa",
              }}
            >
              Popular{" "}
              <span
                style={{
                  color: "#ffc700",
                }}
              >
                {" "}
                Indexes
              </span>{" "}
              by Sector{" "}
            </h1>
            <div className="category__container container grid">
              {/* 
                
                coneA
                coneB
                ice
                token
*/}
              <div className="category__data">
                <img src={coneA.src} alt="icecream" className="category__img" />
                <h3 className="category__title">Metaverse Index</h3>
                <p className="category__description">
                  Composition: APE, ICP, STX, MANA, THETA, AXS, SAND
                </p>
              </div>
              <div className="category__data">
                <img src={ice.src} alt="icecream" className="category__img" />
                <h3 className="category__title">DeFi Pulse Index</h3>
                <p className="category__description">
                  Composition: UNI, LINK, MKR, FXS, SNX, CAKE, CRV, CVX, DYDX,
                  YFI, COMP
                </p>
              </div>
              <div className="category__data">
                <img src={token.src} alt="icecream" className="category__img" />
                <h3 className="category__title">Liquid Staking Index</h3>
                <p className="category__description">
                  STETH, RETH, FRXETH, MSOL, SAVAX, AKRETH
                </p>
              </div>
            </div>
          </section>
        }

        <section className="section about" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title about__title">
                Integrated with Spookyswap
              </h2>

              <p
                className="about__description"
                style={{
                  color: "#b8add2",
                }}
              >
                Our platform seamlessly integrates with SpookySwap, a leading
                decentralized exchange for trading cryptocurrencies. With
                SpookySwap&apos;s secure and efficient trading infrastructure,
                you can easily buy and sell the underlying tokens that compose
                your custom index, and rebalance your portfolio whenever you
                want.{" "}
              </p>
            </div>
            <img
              //   src="https://assets.codepen.io/7773162/about-img.png"
              src={ice.src}
              alt="icecream"
              className="about__img"
            />
          </div>
        </section>

        <section className="section discount">
          <div
            className="discount__container container grid"
            style={{
              background: "#27262c !important",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "relative",
                flexGrow: 1,
                height: "300px",
                width: "300px",
              }}
            >
              <img
                src={coneA.src}
                alt="icecream"
                className="about__img"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  objectFit: "fill",
                }}
              />
              <img
                src={coneB.src}
                alt="icecream"
                className="about__img"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  objectFit: "fill",
                }}
              />
            </div>
            <div className="discount__data">
              <h2
                className="discount__title"
                style={{
                  color: "#ffc700",
                }}
              >
                Check out our project links! <br />{" "}
              </h2>
              <a href="https://testnet.ftmscan.com/address/0x89d25B5Dd46Faab9D4cF506ae46675B6E6180546">
                FTMScan Explorer
              </a>{" "}
              <br />
              <a href="https://github.com/JoshWeb3/Pumpkin-Protocol">
                Github Repository
              </a>{" "}
              <br />
              <a href="https://pumpkin-protocol-fantom.vercel.app/">
                Deployment Link
              </a>
              {/* <Link href="/create-index-token">
               <Button color="dark" radius="md" size="lg">
                  Create Now
                </Button>
              </Link>*/}
            </div>
          </div>
        </section>
      </main>

      <Link href="#" className="scrollup" id="scroll-up">
        &uarr;
      </Link>
    </>
  );
}
