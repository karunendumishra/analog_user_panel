import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card1 = (props) => {
  const { currency_prefrence } = useSelector((state) => state.currency.value)
  const [unit, setUnit] = useState('')
  // setUnit(currency_prefrence == 'inr' ? currency_prefrence == 'INR' : currency_prefrence == "USD")
  const walletInfo = props.wallet;
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setUnit(currency_prefrence == 'inr' ? 'INR' : "USD")
  }, [])

  const addString = props.address;
  const first = addString?.substring(0, 20);
  const second = addString?.substring(35, addString.length);
  const address = first + "...." + second;


  const cards = document.querySelectorAll(".cards");
// const onDocumentMouseMoveHandler = (evt) => {
//   evt.preventDefault();

//   requestAnimationFrame(() => {
//     if (!evt.target.closest('.card')) {
//       card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
//     }
//   });
// };
// document.addEventListener('mousemove', onDocumentMouseMoveHandler)


cards.forEach((card) => {
  const height = card.clientHeight;
  const width = card.clientWidth;

  const mouseMoveHandler = (evt) => {
    evt.preventDefault();

    requestAnimationFrame(() => {
      const xRotation = -30 * ((evt.layerY - height / 2) / height);
      const yRotation = 20 * ((evt.layerX - width / 2) / width);

      card.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
  };

  card.addEventListener("mousemove", mouseMoveHandler);

  card.addEventListener("mouseenter", (evt) => {
    evt.preventDefault();
    card.addEventListener("mousemove", mouseMoveHandler);
  });

  card.addEventListener("mouseout", (evt) => {
    evt.preventDefault();
    card.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
    card.removeEventListener("mousemove", mouseMoveHandler);
  });
  
  card.addEventListener("click", (evt) => {
    evt.preventDefault();
    card.style.animation = "spin 1s ease-in-out";
    setTimeout(() => {      
      card.style.animation = '';
    }, 1000);
  });
}
);

  return (
    <>
      <div className="my-3" onClick={props.onClick} style={{zIndex:100}}>          
        <div className="card bg-lighter shadow-sm horizontal">
          <div className="nk-wgw">
            <div className="nk-wgw-inner">
              <div className="row">
                <div className="col-8">
                  <b
                    className="nk-wgw-name"
                    // onClick={() => { 
                    //   navigate("/cryptoTransaction", { state: props.lable }) 
                    // }}
                    style={{cursor:"pointer"}}
                  >
                    <div className="nk-wgw-icon is-default">
                      <img
                        className=""
                        src={props.logo}
                        style={{ width: "30px" }}
                      />
                      {/* <em className="icon ni ni-sign-kobo"></em> */}
                    </div>
                    <h5 className="nk-wgw-title title" onClick={()=>{
                      navigate("/cryptoTransaction", { state: {logo: props.logo, lable: props.lable, price: props.price}})
                    }}>{props.title}</h5>
                  </b>
                  <div className="nk-wgw-balance">
                    <div className="amount text-teal">
                      {props.price}
                      <span className="currency currency-nio" style={{fontSize: "10px"}}>{props.lable}</span>&nbsp;/&nbsp;
                          {props.priceInUsd}
                      <span className="currency currency-nio" style={{fontSize: "10px"}}>{props.cp}</span>
                        
                    </div>
                    <div className="amount-sm">
                      {(props.priceInUsd * props.price).toFixed(3)}
                      <span className="currency currency-usd">{props.cp}</span>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <img
                    src={`https://image-charts.com/chart?chs=177x177&cht=qr&chl=${walletInfo?.walletAddr}&choe=UTF-8&icqrb=0b3175&icqrf=FFFFFF`}
                    style={{ height: "100px" }}
                  />
                </div>
              </div>
              <div className="row d-flex align-items-around">
                <div className="col-10 d-flex ">
                  <span
                    className="amount-sm text-muted small">
                    {address}
                  </span>
                </div>
                <div className="col-2">
                  <div className="">

                    <CopyToClipboard text={props.address}
                      onCopy={() => {
                        setCopied(true)
                        setTimeout(() => {
                          setCopied(false);
                        }, 800);
                      }}>
                      <div>
                        <MdOutlineContentCopy color="" />
                        {copied ?
                          <p className="text-teal position-absolute" style={{ fontSize: "13px", top: "3px", left: "25px", padding: "1px 5px", backgroundColor: "transparent" }}>Copied</p> : null}
                      </div>
                    </CopyToClipboard>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>       
      </div>
    </>
  );
};

export default Card1;
