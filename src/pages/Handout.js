import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../Api_connection/config";
import AffiliatCard from "../components/AffiliateCard";
import { Bars} from 'react-loader-spinner'
import { MdMoreHoriz } from 'react-icons/md'
import { Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';

const Handout= (props) => {
  const { user, userInfo, oneUsdPrice } = useSelector((state) => state.user.value)
  const email = user?.email
  const [affiliates, setAffiliates] = useState([]);
 
  

  const [level, setLevel] = useState(1)
  const [level1, setLevel1] = useState(true)
  const [level2, setLevel2] = useState(false)
  const [level3, setLevel3] = useState(false)
  const [tab, setTab] = useState([]);
  const [loader, setLoader] = useState(true)
  const [status, setStatus] = useState()
  const [load, setLoad] = useState(false)

  const [items,setItems]=useState([]);

  const getAffiliate = async () => {
    try {
      console.log(email, " user email asjljasf")
      const arr = [];
      const data = await axios.post(`${BASE_URL}/refferalLevelWiseData`, { email: email })
      arr.push(Object.keys(data.data.data))
      arr.push(data.data.data);
      setLoad(true)
      setAffiliates(arr);
    } catch (error) {
      console.log("Error in getting data Affililate :" + error);
    }
  }

  console.log(props, "::PROPS-->>");

  const getAffiliateList = async (level) => {
    const data = await axios.post(`${BASE_URL}/levelWiseList`, { email: email, level: level })
    console.log(data, "::Response from AFFILIATE TABLE API");
    if (data) {
      setTab(data.data.data);
      setStatus(data.data.status)
      setLoader(false)
      setItems(data.data.status)
      console.log(data.data.status,"data.data.status data.data.status data.data.status");
    }

  }

 
  useEffect(() => {
    getAffiliate();
    getAffiliateList(level)
  }, []);

  const handlePageClick=(data)=>{
    console.log(data);
  }


  return (
    <div>
      <div className="nk-app-root">
        <div className="nk-main ">
          <Menu />
          <div className="nk-wrap ">
            <Header />
            {/* Add This Line  */}

            <div className="container-xl tableContainer">
              <div className="nk-content-body" style={{ marginTop: 50, width: "100%", padding: "10px -70%" }}>
                <div className="nk-block-head nk-block-head-sm">
                  <div className="nk-block-between position-relative">
                    <div className="nk-block-head-content ">
                      <h3 className="nk-block-title page-title">
                        Handout
                      </h3>
                      {/* <div className="nk-block-des text-soft">

                        <p>{`Your affiliates.`}</p>
                      </div> */}
                    </div>
                    <div className="nk-block-head-content affiliates">
                      <div className="toggle-wrap nk-block-tools-toggle">
                        <Link
                          to=""
                          className="btn btn-icon btn-trigger toggle-expand me-n1"
                          data-target="pageMenu"
                        >
                          <em className="icon ni ni-menu-alt-r"></em>
                        </Link>
                        <div
                          className="toggle-expand-content"
                          data-content="pageMenu"
                        >
                          {/* <ul className="nk-block-tools g-3">
                            <li
                            >
                              <span className="d-none d-md-block">
                                <button
                                  className="btn btn-dim btn-outline-light"
                                  style={{ padding: "8px 35px" }}
                                >
                                  <em className="icon ni ni-download-cloud"></em>
                                  <span>Export</span>
                                </button>
                              </span>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">

                  {
                    load ? affiliates.length > 0 ?
                      affiliates[0].map((item, index) => {
                        return (
                          <AffiliatCard
                            level={`Level ${index + 1}`}
                            totalUser={affiliates[1][item].totalUsers}
                            totalAnalogBuy={`${affiliates[1][item].totalAna.toFixed(2)} ANA`}
                            totalExpence={userInfo.currency_preference == 'usd'? `${affiliates[1][item].totalExpense.toFixed(2)} USDT` : `${(affiliates[1][item].totalExpense * oneUsdPrice).toFixed(3)} INRX`}
                            totalAffiliates={userInfo.currency_preference == 'usd'?  `${affiliates[1][item].totalInc.toFixed(3)} USDT` : `${(affiliates[1][item].totalInc * oneUsdPrice).toFixed(3)} INRX`}
                            widthdrawl={0}
                            toalRemaining={0}
                          />
                        )
                      }) :
                      <h3>No Record Found</h3>
                      :

                      <div style={{ position: "absolute", zIndex: "99", top: "29%", left: "108%", transform: "translate(-50%, -50%)" }}>
                        <Bars heigth="100" width="100" color="#0b3175" ariaLabel="loading-indicator" />
                      </div>


                  }
                </div>

                <div className="row my-1" >
                  <div className="nk-content-wrap">
                    <div className="nk-block-head">
                      <div className="nk-block-between">
                        <div className="nk-block-head-content">
                          <h3 className="nk-block-title page-title">
                            Handout List
                          </h3>
                          <div className="nk-block-des text-soft">
                            <ul className="nk-block-tools g-3" style={{ paddingLeft: "0px" }}>
                              <li>
                                <Link className={level1 ? 'btn btn-white btn-dim btn-outline-light active' :
                                  "btn btn-white btn-dim btn-outline-light"} onClick={() => {
                                    setLevel1(true)
                                    setLevel2(false)
                                    setLevel3(false)
                                    setTab([])
                                    getAffiliateList(1)
                                  }}>
                                  <span>Level 1</span></Link>
                              </li>
                              <li>
                                <Link className={level2 ? 'btn btn-white btn-dim btn-outline-light active' :
                                  "btn btn-white btn-dim btn-outline-light"} onClick={() => {
                                    setLevel1(false)
                                    setLevel2(true)
                                    setLevel3(false)
                                    setTab([])
                                    getAffiliateList(2)
                                  }}>
                                  <span>Level 2</span></Link>
                              </li>
                              <li>
                                <Link className={level3 ? 'btn btn-white btn-dim btn-outline-light active' :
                                  "btn btn-white btn-dim btn-outline-light"} onClick={() => {
                                    setLevel1(false)
                                    setLevel2(false)
                                    setLevel3(true)
                                    setTab([])
                                    getAffiliateList(3)
                                  }}>
                                  <span>Level 3</span></Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="nk-block-head-content">
                          <div className="toggle-wrap nk-block-tools-toggle">
                            <Link
                              to=""
                              className="btn btn-icon btn-trigger toggle-expand mr-n1"
                              data-target="pageMenu"
                            >
                              <em className="icon ni ni-menu-alt-r"></em>
                            </Link>
                            <div
                              className="toggle-expand-content"
                              data-content="pageMenu">
                               <ul className="nk-block-tools g-3">
                                    <li>
                                      <Link
                                        to={'/Withdrawal'}
                                        className="btn btn-primary btn-outline-light"
                                      >
                                        
                                        <span>Withdrwa</span>
                                      </Link>
                                    </li>
                                    {/* <li className="nk-block-tools-opt">
                                      <div className="drodown">
                                        <Link
                                          to=""
                                          className="dropdown-toggle btn btn-icon btn-primary"
                                          data-toggle="dropdown"
                                        >
                                          <em className="icon ni ni-plus"></em>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <ul className="link-list-opt no-bdr">
                                            <li>
                                              <Link to="">
                                                <span>Add User</span>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="">
                                                <span>Add Team</span>
                                              </Link>
                                            </li>
                                            <li>
                                              <Link to="">
                                                <span>Import User</span>
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li> */}
                                  </ul> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Level 1 */}
                    {level1 == true ?
                      <div className="nk-block">
                        <div className="card card-bordered card-stretch">
                          <div className="card-inner-group">
                            <div className="card-inner">
                              <div className="card-title-group">
                                <div className="card-tools">
                                  <div className="form-inline flex-nowrap gx-3">
                                    <h5>Level 1</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-inner">
                              <div className="nk-tb-list nk-tb-ulist is-compact" >
                                <div className="nk-tb-item nk-tb-head">
                                  <div className="nk-tb-col tb-col-sm">
                                    {/* <span className="sub-text">S. N.</span> */}
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">S. N.</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">Email</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">Total Purchased</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">Total Expense</span>
                                  </div>
                                  {/* <div className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">Affiliate Rcvd (5%)</span>
                                  </div> */}
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">Handout</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="sub-text">View</span>
                                  </div>
                                </div>
                                {
                                  status == 2 ? <h5>Record Not Found</h5> :
                                  tab.length > 0 ?
                                    tab.map((element, index) => {
                                      console.log(index, "::INDEx");
                                      return (
                                        <div className="nk-tb-item ">

                                          <div className="nk-tb-col tb-col-sm">
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span className="">{index + 1}</span>
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span className="">{element.email}</span>
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span style={{ color: "green" }}>{element?.totalBuy?.toFixed(2)} ANA</span>
                                            <img alt="analog" src="./images/Analog.png" style={{ width: "24px" }} />
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span style={{ color: "red" }}>
                                              {
                                                userInfo?.currency_preference == 'usd' ? `${element?.totalExp?.toFixed(2)} USDT` : `${(element?.totalExp * oneUsdPrice)?.toFixed(2)} INRX`

                                              }
                                              {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                            </span>

                                          </div>
                                          {/* <div className="nk-tb-col tb-col-sm">
                                            <span style={{ color: "green" }}>
                                              {
                                                userInfo?.currency_preference == 'usd' ? `${element?.totalAff?.toFixed(2)} USDT` : `${(element?.totalAff * oneUsdPrice).toFixed(2)} INRX`
                                              }
                                              {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                            </span>
                                          </div> */}
                                          <div className="nk-tb-col tb-col-sm">
                                            <span style={{ color: "green" }}>
                                              {
                                                userInfo?.currency_preference == 'usd' ? `${element?.totalHandout?.toFixed(2)} USDT` : `${(element?.totalHandout * oneUsdPrice).toFixed(2)} INRX`
                                              }
                                              {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                            </span>
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span>Action</span>
                                          </div>

                                        </div>
                                      )
                                    }) :
                                    <Bars heigth="20" width="20 " color="#0b3175" ariaLabel="loading-indicator" />
                                }

                                {/* <div className="nk-tb-item">
                                                <div className="nk-tb-col nk-tb-col-check">
                                                  <div className="custom-control custom-control-sm custom-checkbox notext">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      id="uid2"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      for="uid2"
                                                    ></label>
                                                  </div>
                                                </div>
                                                <div className="nk-tb-col">
                                                  <div className="user-card">
                                                    <div className="user-avatar xs bg-warning">
                                                      <span>PN</span>
                                                    </div>
                                                    <div className="user-name">
                                                      <span className="tb-lead">
                                                        Patrick Newman
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="nk-tb-col tb-col-md">
                                                  <span>Investor</span>
                                                </div>
                                                <div className="nk-tb-col tb-col-sm">
                                                  <span>patrick@example.com</span>
                                                </div>
                                                <div className="nk-tb-col tb-col-md">
                                                  <span>+942 238-4474</span>
                                                </div>
                                                <div className="nk-tb-col tb-col-xl">
                                                  <span>United States</span>
                                                </div>
                                                <div className="nk-tb-col tb-col-xl">
                                                  <ul className="list-status">
                                                    <li>
                                                      <em className="icon text-success ni ni-check-circle"></em>{" "}
                                                      <span>Email</span>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div className="nk-tb-col tb-col-xl">
                                                  <span>06 Feb 2020</span>
                                                </div>
                                                <div className="nk-tb-col">
                                                  <span className="tb-status text-success">
                                                    Active
                                                  </span>
                                                </div>
                                                <div className="nk-tb-col nk-tb-col-tools">
                                                  <ul className="nk-tb-actions gx-2">
                                                    <li className="nk-tb-action-hidden">
                                                      <Link
                                                        to=""
                                                        className="btn btn-sm btn-icon btn-trigger"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Wallet"
                                                      >
                                                        <em className="icon ni ni-wallet-fill"></em>
                                                      </Link>
                                                    </li>
                                                    <li className="nk-tb-action-hidden">
                                                      <Link
                                                        to=""
                                                        className="btn btn-sm btn-icon btn-trigger"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Send Email"
                                                      >
                                                        <em className="icon ni ni-mail-fill"></em>
                                                      </Link>
                                                    </li>
                                                    <li className="nk-tb-action-hidden">
                                                      <Link
                                                        to=""
                                                        className="btn btn-sm btn-icon btn-trigger"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Suspend"
                                                      >
                                                        <em className="icon ni ni-user-cross-fill"></em>
                                                      </Link>
                                                    </li>
                                                    <li>
                                                      <div className="drodown">
                                                        <Link
                                                          to=""
                                                          className="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                                          data-toggle="dropdown"
                                                        >
                                                          <em className="icon ni ni-more-h"></em>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                          <ul className="link-list-opt no-bdr">
                                                            <li>
                                                              <Link to="">
                                                                <em className="icon ni ni-eye"></em>
                                                                <span>View Details</span>
                                                              </Link>
                                                            </li>
                                                            <li>
                                                              <Link to="">
                                                                <em className="icon ni ni-repeat"></em>
                                                                <span>Orders</span>
                                                              </Link>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                              <Link to="">
                                                                <em className="icon ni ni-shield-star"></em>
                                                                <span>Reset Pass</span>
                                                              </Link>
                                                            </li>
                                                            <li>
                                                              <Link to="">
                                                                <em className="icon ni ni-shield-off"></em>
                                                                <span>Reset 2FA</span>
                                                              </Link>
                                                            </li>
                                                            <li>
                                                              <Link to="">
                                                                <em className="icon ni ni-na"></em>
                                                                <span>Suspend User</span>
                                                              </Link>
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div> */}

                              </div>
                            </div>
                            <div className="card-inner">
                              <ul className="pagination justify-content-center justify-content-md-center">
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    Prev
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    1
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    2
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <span className="page-link">
                                    <em className="icon ni ni-more-h"></em>
                                  </span>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    6
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    7
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    Next
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      : null}

                    {/* Level 2 */}
                    {level2 == true ?
                      <div className="nk-block">
                        <div className="card card-bordered card-stretch">
                          <div className="card-inner-group">
                            <div className="card-inner">
                              <div className="card-title-group">
                                <div className="card-tools">
                                  <div className="form-inline flex-nowrap gx-3">
                                    <h5>Level 2</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-inner">
                              <div className="nk-tb-list nk-tb-ulist is-compact" >
                                <div className="nk-tb-item nk-tb-head">
                                  <div className="nk-tb-col tb-col-sm">
                                    {/* <span className="sub-text">S. N.</span> */}
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">S. N.</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Email</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Total Purchased</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Total Expense</span>
                                  </div>
                                  {/* <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Affiliate Rcvd (3%)</span>
                                  </div> */}
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Handout</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">View</span>
                                  </div>
                                </div>

                                {
                                  status == 2 ? <h5>Record Not Found</h5> : 
                                  tab.length > 0 ?
                                    tab.map((element, index) => {
                                      console.log(index, "::INDEx");
                                      return (
                                        <div className="nk-tb-item ">

                                          <div className="nk-tb-col tb-col-sm">
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span className="tb-text">{index + 1}</span>
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span className="tb-text">{element.email}</span>
                                          </div>
                                          <div className="nk-tb-col tb-col-sm" style={{color: "green"}}>
                                            <span className="tb-text">{element?.totalBuy?.toFixed(2)} ANA</span>
                                            <img alt="analog" src="./images/Analog.png" style={{ width: "24px" }} />
                                          </div>
                                          <div className="nk-tb-col tb-col-sm" style={{color: "red"}}>
                                            <span className="tb-text">
                                              {
                                                userInfo?.currency_preference == 'usd' ? `${element?.totalExp?.toFixed(2)} USDT` : `${(element?.totalExp * oneUsdPrice)?.toFixed(2)} INRX`
                                              }
                                              {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                            </span>
                                          </div>
                                          {/* <div className="nk-tb-col tb-col-sm" style={{color: "green"}}>
                                            <span className="tb-text">
                                              {
                                                userInfo?.currency_preference == 'usd' ? `${element?.totalAff?.toFixed(2)} USDT` : `${(element?.totalAff * oneUsdPrice).toFixed(2)} INRX`
                                              }
                                              {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                            </span>
                                          </div> */}
                                          <div className="nk-tb-col tb-col-sm" style={{color: "green"}}>
                                            <span style={{ color: "green" }}>
                                              {
                                                userInfo?.currency_preference == 'usd' ? `${element?.totalHandout?.toFixed(2)} USDT` : `${(element?.totalHandout * oneUsdPrice).toFixed(2)} INRX`
                                              }
                                              {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                            </span>
                                          </div>
                                          <div className="nk-tb-col tb-col-sm">
                                            <span className="tb-text">Action</span>
                                          </div>

                                        </div>
                                      )
                                    }) :
                                    <Bars heigth="20" width="20 " color="#0b3175" ariaLabel="loading-indicator" />
                                }

                                {/* <div className="nk-tb-item">
                                            <div className="nk-tb-col nk-tb-col-check">
                                              <div className="custom-control custom-control-sm custom-checkbox notext">
                                                <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="uid2"
                                                />
                                                <label
                                                  className="custom-control-label"
                                                  for="uid2"
                                                ></label>
                                              </div>
                                            </div>
                                            <div className="nk-tb-col">
                                              <div className="user-card">
                                                <div className="user-avatar xs bg-warning">
                                                  <span>PN</span>
                                                </div>
                                                <div className="user-name">
                                                  <span className="tb-lead">
                                                    Patrick Newman
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                              <span>Investor</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                              <span>patrick@example.com</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                              <span>+942 238-4474</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-xl">
                                              <span>United States</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-xl">
                                              <ul className="list-status">
                                                <li>
                                                  <em className="icon text-success ni ni-check-circle"></em>{" "}
                                                  <span>Email</span>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="nk-tb-col tb-col-xl">
                                              <span>06 Feb 2020</span>
                                            </div>
                                            <div className="nk-tb-col">
                                              <span className="tb-status text-success">
                                                Active
                                              </span>
                                            </div>
                                            <div className="nk-tb-col nk-tb-col-tools">
                                              <ul className="nk-tb-actions gx-2">
                                                <li className="nk-tb-action-hidden">
                                                  <Link
                                                    to=""
                                                    className="btn btn-sm btn-icon btn-trigger"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Wallet"
                                                  >
                                                    <em className="icon ni ni-wallet-fill"></em>
                                                  </Link>
                                                </li>
                                                <li className="nk-tb-action-hidden">
                                                  <Link
                                                    to=""
                                                    className="btn btn-sm btn-icon btn-trigger"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Send Email"
                                                  >
                                                    <em className="icon ni ni-mail-fill"></em>
                                                  </Link>
                                                </li>
                                                <li className="nk-tb-action-hidden">
                                                  <Link
                                                    to=""
                                                    className="btn btn-sm btn-icon btn-trigger"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Suspend"
                                                  >
                                                    <em className="icon ni ni-user-cross-fill"></em>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <div className="drodown">
                                                    <Link
                                                      to=""
                                                      className="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                                      data-toggle="dropdown"
                                                    >
                                                      <em className="icon ni ni-more-h"></em>
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                      <ul className="link-list-opt no-bdr">
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-eye"></em>
                                                            <span>View Details</span>
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-repeat"></em>
                                                            <span>Orders</span>
                                                          </Link>
                                                        </li>
                                                        <li className="divider"></li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-shield-star"></em>
                                                            <span>Reset Pass</span>
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-shield-off"></em>
                                                            <span>Reset 2FA</span>
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-na"></em>
                                                            <span>Suspend User</span>
                                                          </Link>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div> */}

                              </div>
                            </div>
                            <div className="card-inner">
                              <ul className="pagination justify-content-center justify-content-md-center">
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    Prev
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    1
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    2
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <span className="page-link">
                                    <em className="icon ni ni-more-h"></em>
                                  </span>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    6
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    7
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    Next
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      : null}

                    {/* Level 3 */}
                    {level3 == true ?
                      <div className="nk-block">
                        <div className="card card-bordered card-stretch">
                          <div className="card-inner-group">
                            <div className="card-inner">
                              <div className="card-title-group">
                                <div className="card-tools">
                                  <div className="form-inline flex-nowrap gx-3">
                                    <h5>Level 3</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-inner">
                              <div className="nk-tb-list nk-tb-ulist is-compact" >
                                <div className="nk-tb-item nk-tb-head">
                                  <div className="nk-tb-col tb-col-sm">
                                    {/* <span className="sub-text">S. N.</span> */}
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">S. N.</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Email</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Sponsor</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Total Purchased</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Total Expense</span>
                                  </div>
                                  {/* <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Affiliate Rcvd (2%)</span>
                                  </div> */}
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">Handout</span>
                                  </div>
                                  <div className="nk-tb-col tb-col-sm">
                                    <span className="tb-lead">View</span>
                                  </div>
                                </div>
                                
                                {
                                  status == 2 ? <h5>Record Not Found</h5> :
                                  tab.length > 0 ?
                                    tab.map((element, index) => {
                                      console.log(index, "::INDEx");
                                      return (
                                        <>
                                          <div className="nk-tb-item ">

                                            <div className="nk-tb-col tb-col-sm">
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                              <span className="tb-text">{index + 1}</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                              <span className="tb-text">{element.email}</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                              <span className="tb-text">{element.sponsor}</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm" style={{color: "green"}}>
                                              <span className="tb-text">{element?.totalBuy?.toFixed(2)} ANA</span>
                                              <img alt="analog" src="./images/Analog.png" style={{ width: "24px" }} />
                                            </div>
                                            <div className="nk-tb-col tb-col-sm" style={{color: "red"}}>
                                              <span className="tb-text">
                                                {
                                                  userInfo?.currency_preference == 'usd' ? `${element?.totalExp?.toFixed(2)} USDT` : `${(element?.totalExp * oneUsdPrice)?.toFixed(2)} INRX`
                                                }
                                                {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                              </span>
                                            </div>
                                            {/* <div className="nk-tb-col tb-col-sm" style={{color: "green"}}>
                                              <span className="tb-text">
                                                {
                                                  userInfo?.currency_preference == 'usd' ? `${element?.totalAff?.toFixed(2)} USDT` : `${(element?.totalAff * oneUsdPrice).toFixed(2)} INRX`
                                                }
                                                {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                              </span>
                                            </div> */}
                                            <div className="nk-tb-col tb-col-sm" style={{color: "green"}}>
                                              <span className="tb-text">
                                                <span className="tb-text">
                                                  {
                                                    userInfo?.currency_preference == 'usd' ? `${element?.totalHandout?.toFixed(2)} USDT` : `${(element?.totalHandout * oneUsdPrice).toFixed(2)} INRX`
                                                  }
                                                  {userInfo?.currency_preference == "usd" ? (
                                              <img
                                                src="./images/usdt_icon.png"
                                                style={{ width: "17px", paddingLeft: "1px" }}
                                                alt="usdt"

                                              />) : (
                                              <img
                                                src="./images/Inrx_black.png"
                                                style={{ width: "17px", marginLeft: "5px" }}
                                                alt="inrx"
                                              />)}
                                                </span>
                                              </span>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                              <span className="tb-text">
                                                < MdMoreHoriz />
                                              </span>
                                            </div>

                                          </div>
                                        </>
                                      )
                                    }) :  
                                    <Bars heigth="20" width="20 " color="#0b3175" ariaLabel="loading-indicator" />  
                                }

                                {/* <div className="nk-tb-item">
                                            <div className="nk-tb-col nk-tb-col-check">
                                              <div className="custom-control custom-control-sm custom-checkbox notext">
                                                <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="uid2"
                                                />
                                                <label
                                                  className="custom-control-label"
                                                  for="uid2"
                                                ></label>
                                              </div>
                                            </div>
                                            <div className="nk-tb-col">
                                              <div className="user-card">
                                                <div className="user-avatar xs bg-warning">
                                                  <span>PN</span>
                                                </div>
                                                <div className="user-name">
                                                  <span className="tb-lead">
                                                    Patrick Newman
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                              <span>Investor</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-sm">
                                              <span>patrick@example.com</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-md">
                                              <span>+942 238-4474</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-xl">
                                              <span>United States</span>
                                            </div>
                                            <div className="nk-tb-col tb-col-xl">
                                              <ul className="list-status">
                                                <li>
                                                  <em className="icon text-success ni ni-check-circle"></em>{" "}
                                                  <span>Email</span>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="nk-tb-col tb-col-xl">
                                              <span>06 Feb 2020</span>
                                            </div>
                                            <div className="nk-tb-col">
                                              <span className="tb-status text-success">
                                                Active
                                              </span>
                                            </div>
                                            <div className="nk-tb-col nk-tb-col-tools">
                                              <ul className="nk-tb-actions gx-2">
                                                <li className="nk-tb-action-hidden">
                                                  <Link
                                                    to=""
                                                    className="btn btn-sm btn-icon btn-trigger"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Wallet"
                                                  >
                                                    <em className="icon ni ni-wallet-fill"></em>
                                                  </Link>
                                                </li>
                                                <li className="nk-tb-action-hidden">
                                                  <Link
                                                    to=""
                                                    className="btn btn-sm btn-icon btn-trigger"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Send Email"
                                                  >
                                                    <em className="icon ni ni-mail-fill"></em>
                                                  </Link>
                                                </li>
                                                <li className="nk-tb-action-hidden">
                                                  <Link
                                                    to=""
                                                    className="btn btn-sm btn-icon btn-trigger"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Suspend"
                                                  >
                                                    <em className="icon ni ni-user-cross-fill"></em>
                                                  </Link>
                                                </li>
                                                <li>
                                                  <div className="drodown">
                                                    <Link
                                                      to=""
                                                      className="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                                      data-toggle="dropdown"
                                                    >
                                                      <em className="icon ni ni-more-h"></em>
                                                    </Link>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                      <ul className="link-list-opt no-bdr">
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-eye"></em>
                                                            <span>View Details</span>
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-repeat"></em>
                                                            <span>Orders</span>
                                                          </Link>
                                                        </li>
                                                        <li className="divider"></li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-shield-star"></em>
                                                            <span>Reset Pass</span>
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-shield-off"></em>
                                                            <span>Reset 2FA</span>
                                                          </Link>
                                                        </li>
                                                        <li>
                                                          <Link to="">
                                                            <em className="icon ni ni-na"></em>
                                                            <span>Suspend User</span>
                                                          </Link>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div> */}
                              </div>
                            </div>
                           {/* <Paginate 
                           data={tab.length}

                           /> */}
                             <ReactPaginate
                              previousLabel={'Prev'}
                              nextLabel={'Next'}
                              breakLabel={"..."}
                              pageCount={10}
                              marginPagesDisplayed={2}
                              pageRangeDisplayed={2}
                              onPageChange={handlePageClick}
                              containerClassName={'pagination justify-content-center'}
                              pageClassName={'page-item'}
                              pageLinkClassName={'page-link'}
                              previousClassName={'page-item'}
                              previousLinkClassName={'page-link'}
                              nextClassName={'page-item'}
                              nextLinkClassName={'page-link'}
                              breakClassName={'page-item'}
                              breakLinkClassName={'page-link'}
                              activeClassName={"active"}
                             />

                             {/* <div className="card-inner">
                              <ul className="pagination justify-content-center justify-content-md-center">
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    Prev
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    1
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    2
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <span className="page-link">
                                    <em className="icon ni ni-more-h"></em>
                                  </span>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    6
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    7
                                  </Link>
                                </li>
                                <li className="page-item">
                                  <Link className="page-link" to="">
                                    Next
                                  </Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      : null}

                  </div>

                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Handout;
