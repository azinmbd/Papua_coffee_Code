import React, { Component } from "react";
class Linkdin extends Component {
  state = {};
  render() {
    return (
      <a href="https://www.linkedin.com/in/azin-moubed/" className="social">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          // style="enable-background:new 0 0 512 512;"
          space="preserve"
          fill="#F8F5E4"
        >
          <path
            className="st0"
            d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M181.6,387h-62.3V199.4h62.3
	V387z M150.4,173.8H150c-20.9,0-34.5-14.4-34.5-32.4c0-18.4,13.9-32.4,35.3-32.4s34.5,14,34.9,32.4
	C185.7,159.4,172.2,173.8,150.4,173.8z M406.4,387h-62.3V286.7c0-25.2-9-42.4-31.6-42.4c-17.2,0-27.5,11.6-32,22.8
	c-1.6,4-2.1,9.6-2.1,15.2V387h-62.3c0,0,0.8-170,0-187.6h62.3V226c8.3-12.8,23.1-31,56.2-31c41,0,71.8,26.8,71.8,84.4V387z"
          />
        </svg>
      </a>
    );
  }
}

export default Linkdin;
