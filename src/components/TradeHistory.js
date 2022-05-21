import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Api_connection/config";
import "./tradehistory.css";

export default function TradeHistory() {
  const email = localStorage.getItem("email");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (email) {
      axios
        .get(`${BASE_URL}/getAllOrder`, { email: "" })
        .then((res) => {
          console.log(res.data, "All Order trandHistory");
          setHistory(res.data.order);
          console.log(history, "history");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);
  return (
    <div class="card mt-2">
      <div class="card-header justify-content-between align-items-center">
        <h6 class="card-title"> TRADE HISTORY</h6>
      </div>

      <div class="card-body   p-0">
        <table class="table  mb-0">
          <div style={{ display: "contents" }}>
            <thead >
              <tr>
                <th style={{width:"18%"}}>Total Anolog</th>
                <th style={{width:"18%"}}>Total Amount Pay</th>
                <th style={{width:"18%"}}>Buying Price</th>
                <th style={{width:"20%"}}>Pool</th>
                <th style={{width:"26%"}}>Time</th>
              </tr>
            </thead>
        <div style={{ height: "450px",overflow:"auto",display: "table-caption"}}>
            <tbody>
              {history.map((h) => {
                return (
                  <>
                    <tr class="zoom ">
                      <td style={{width:"18%"}}> {h.cVolume.toFixed(2)}</td>
                      <td class="text-danger" style={{width:"18%"}}>
                        {h.preferred_currency_amount?.toFixed(2)}{" "}
                        {h.compair_currency == "usd" ? (
                          <img
                            src="./images/Usdt.png"
                            style={{ width: "17px" }}
                            alt="usdt"
                          />
                        ) : (
                          <img
                            src="./images/Inrx_black.png"
                            style={{ width: "17px" }}
                            alt="inrx"
                          />
                        )}
                        <i class="ion ion-arrow-graph-up-right"></i>
                      </td>
                      <td class="text-success" style={{width:"18%"}}>
                        {/* {h.pref_raw_price.toFixed(8)} */}
                        {h.compair_currency == "usd"
                          ? h.pref_raw_price.toFixed(8)
                          : h.pref_raw_price}
                        <i class="ion ion-arrow-graph-down-right"></i>
                      </td>
                      <td style={{width:"20%"}}>{h.presalelevel}</td>
                      <td style={{width:"26%"}}>{h.date}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            </div>
          </div>
        </table>
      </div>
    </div>

    // <div>
    //   <div class="overflow-hidden" style={{marginTop:"5px"}}>
    //     <div
    //       class="coinsfather-theme-color mt-2 mt-md-0 mt-lg-0"
    //       //   style={{overflow: "hidden"}}
    //     >
    //       <div style={{ height: "58px", width: "100%" }}>
    //         <div
    //           class="tab-header  d-flex align-items-center h-50 p-0 px-2"
    //           style={{ background: "rgba(0, 0, 0, 0.1)",color:"black" }}
    //         >
    //           TRADE HISTORY
    //         </div>
    //         <div class="row m-0 py-1 pair-border mt-1"
    //         style={{color:"black"}}
    //         >

    //           <div class="col-3 text-center" style={{ fontSize: "12px", color:"black",fontWeight:"bold" }}>
    //            Total Anolog
    //           </div>
    //           <div class="col-2 text-center" style={{ fontSize: "12px", color:"black",fontWeight:"bold" }}>
    //            Total Amount Pay
    //           </div>
    //           <div class="col-3 text-center" style={{ fontSize: "12px", color:"black",fontWeight:"bold" }}>
    //             Buying Price
    //           </div>
    //           <div class="col-2 text-center" style={{ fontSize: "12px", color:"black",fontWeight:"bold" }}>
    //              Pool
    //           </div>
    //           <div class="col-2 text-center" style={{ fontSize: "12px", color:"black",fontWeight:"bold" }}>
    //             Time
    //           </div>
    //         </div>
    //       </div>
    //   <div  style={{ height: "400px", overflow: "scroll" }}>
    //   {history.map((h) => (
    //     <div className="zoom">
    //       <div
    //         class="row  m-0"
    //         style={{
    //           // background: "rgba(241, 67, 47, 0.1)",
    //           color: "rgb(240, 0, 0)",
    //           padding: " 7.79px 0px",
    //           fontSize: "14px",
    //           border:"1px solid gray"
    //         }}
    //       >
    //         <div
    //           class="col-3 text-center text-dark"
    //           style={{ fontSize: "13px",color:"black" }}
    //         >
    //           {h.cVolume}
    //         </div>
    //         <div
    //           class="col-2 text-center text-secondary"
    //           style={{ fontSize: "13px",color:"black" }}
    //         >
    //           {h.currency_type}
    //         </div>
    //         <div
    //           class="col-3 text-center text-secondary timeZone"
    //           style={{ fontSize: "13px",color:"black" }}
    //         >
    //           14:54:12
    //         </div>
    //         <div
    //           class="col-2 text-center text-secondary timeZone"
    //           style={{ fontSize: "13px",color:"black" }}
    //         >
    //           14:54:12
    //         </div>
    //         <div
    //           class="col-2 text-center text-secondary timeZone"
    //           style={{ fontSize: "13px",color:"black" }}
    //         >
    //           14:54:12
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    // </div>
    //   </div>
    // </div>
  );
}
