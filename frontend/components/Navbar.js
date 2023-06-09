import React, { useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const Navbar = () => {
  useEffect(() => {}, []);
  return (
    <header className="header" id="header">
      <nav
        className="nav container"
        style={{
          width: "80%",
          margin: "0 auto !important",
        }}
      >
        <Link href="/" className="nav__logo" passHref>
          <p
            style={{
              cursor: "pointer",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={"/images/xdc-icon_white.png"}
              className="pumpkin_icon"
              alt="xswap-index"
            />
            XSwap-Index
          </p>
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {/* <li className="nav__item">
              <Link href="/view-tokens" className="nav__link">
                Explore
              </Link>
            </li> */}
            <li className="nav__item">
              <Link href="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/mint-underlying" className="nav__link">
                Utility Faucet
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/tokens" className="nav__link">
                My Tokens
              </Link>
            </li>

            {/* <a href="#" className="button button--ghost">
              Support
            </a> */}
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://assets.codepen.io/7773162/nav-img.png"
            alt="close"
            className="nav__img"
          />
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
