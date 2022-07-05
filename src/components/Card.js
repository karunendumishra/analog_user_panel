import React, {useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactTooltip from 'react-tooltip';


const Card1 = (props) => {
  const {oneUsdPrice, userInfo} = useSelector((state) => state.user.value)
  // const [unit, setUnit] = useState('')
  // setUnit(currency_prefrence == 'inr' ? currency_prefrence == 'INR' : currency_prefrence == "USD")
  const walletInfo = props.wallet;
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   setUnit(userInfo?.currency_preference == 'inr' ? 'INR' : "USD")
  // }, [])

  const addString = props.address;
  const first = addString?.substring(0, 20);
  const second = addString?.substring(35, addString.length);
  const address = first + "...." + second;

  return (
    <>
      <ReactTooltip />
      <div className="my-3" onClick={props.onClick} style={{zIndex:100}} >
        <div className="row" style={{ padding: "0px" }}>
          <div className="">
            <div className="card bg-light shadow horizontal hover_on_card">
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
                            alt="Coin"
                            src={props.logo}
                            style={{ width: "30px" }}
                          />
                          {/* <em className="icon ni ni-sign-kobo"></em> */}
                        </div>
                        <h5 className="nk-wgw-title title ml-2" onClick={()=>{
                          navigate("/cryptoTransaction", { state: {logo: props.logo, lable: props.lable, price: props.price}})
                        }}>{props.title}</h5>
                      </b>
                      <div className="nk-wgw-balance">
                        <div className="amount">
                          <span className="text-teal">{props.price}</span>
                          <span className="currency currency-nio" style={{fontSize: "10px"}}>{props.lable}</span>
                          <span style={{fontSize: "10px"}}> &nbsp;/&nbsp;{props.priceInUsd}</span>
                             
                          <span className="currency currency-nio" style={{fontSize: "10px"}}> {props.cp}</span>
                           
                        </div>
                        <div className="amount-sm">
                          { props ? (props.priceInUsd * props.price).toFixed(3) : null}
                          <span className="currency currency-usd">{props.cp}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4" data-tip={userInfo?.currency_preference == 'inr'? "Minimum Deposit 5000 INRX" : `Minimum Deposit ${(5000 / oneUsdPrice).toFixed(3)} USDT`}>
                      <img
                        src={`https://image-charts.com/chart?chs=177x177&cht=qr&chl=${walletInfo?.walletAddr}&choe=UTF-8&icqrb=0b3175&icqrf=FFFFFF`}
                        alt="qr"
                        style={{ height: "100px" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex align-items-around">
                    <div className="col-10 d-flex ">
                      <span
                        className="amount-sm text-gray"
                        style={{
                          
                          marginTop: "5px",
                          marginBottom: "0px",
                          fontSize: "14px",
                        }}
                      >
                        {address}

                      </span>
                    </div>
                    <div className="col-2">
                      <div className="text-gray">

                        <CopyToClipboard text={props.address}
                          onCopy={() => {
                            setCopied(true)
                            setTimeout(() => {
                              setCopied(false);
                            }, 800);
                          }}>
                          <div>
                            <MdOutlineContentCopy />
                            {copied ?
                              <p className="text-teal position-absolute" style={{ fontSize: "14px", top: "3px", left: "25px", padding: "0px 5px", backgroundColor: "transparent" }}>Copied</p> : null}
                          </div>
                        </CopyToClipboard>

                      </div>
                    </div>
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
