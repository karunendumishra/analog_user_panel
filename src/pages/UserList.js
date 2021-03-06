import React, { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserList = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div class="nk-app-root">
        <div class="nk-main ">
          <Menu />

          <div class="nk-wrap ">
            <Header />
           
            {/* Add This Line  */}

            <div class="container-xl tableContainer">
              <div
                class="nk-content-body"
                style={{ marginTop: 50, width: "100%", padding: "10px -70%" }}
              >
                <div class="nk-block-head nk-block-head-sm">
                  <div class="nk-block-between position-relative">
                    <div class="nk-block-head-content ">
                      <h3 class="nk-block-title page-title">
                        Affiliates Lists
                      </h3>
                      <div class="nk-block-des text-soft">
                        <p>You have total 2,595 users.</p>
                      </div>
                    </div>
                    <div class="nk-block-head-content affiliates">
                      <div class="toggle-wrap nk-block-tools-toggle">
                        <a
                          href="#"
                          class="btn btn-icon btn-trigger toggle-expand me-n1"
                          data-target="pageMenu"
                        >
                          <em class="icon ni ni-menu-alt-r"></em>
                        </a>
                        <div
                          class="toggle-expand-content"
                          data-content="pageMenu"
                        >
                          <ul class="nk-block-tools g-3">
                            <li
                            >
                              <span class="d-none d-md-block">
                                <button
                                  class="btn btn-dim btn-outline-light"
                                  style={{ padding: "8px 35px" }}
                                >
                                  <em class="icon ni ni-download-cloud"></em>
                                  <span>Export</span>
                                </button>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nk-block">
                  <div class="card card-bordered card-stretch">
                    <div class="card-inner-group">
                      <div
                        class="card-inner position-relative card-tools-toggle"
                        style={{ padding: "25px 30px" }}
                      >
                        <div class="card-title-group">
                          <div class="card-tools">
                            <div class="form-inline flex-nowrap gx-3">
                              <div class="form-wrap w-150px">
                                <select
                                  className="select2-selection__rendered "
                                  class="btn btn-dim btn-outline-grey text-muted"
                                  data-search="off"
                                  data-placeholder="Level"
                                  data-select2-id="1"
                                  tabindex="-1"
                                  aria-hidden="true"
                                  style={{ border: "0.1px solid grey" }}
                                >
                                  {/* <option value="" data-select2-id="3">
                                   Level
                                  </option> */}
                                  <option value="email">level 1</option>
                                  <option value="group">Level 2</option>
                                  <option value="suspend">Level 3</option>
                                </select>
                              </div>
                              <div class="btn-wrap pl-10">
                                <span
                                  class="d-none d-md-block"
                                  style={{ marginLeft: -20 }}
                                >
                                  <button class="btn btn-dim btn-outline-light">
                                    Apply
                                  </button>
                                </span>
                                <span class="d-md-none">
                                  <button class="btn btn-dim btn-outline-light btn-icon ">
                                    <em class="icon ni ni-arrow-right"></em>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="card-tools me-n1">
                            {/* <ul class="btn-toolbar gx-1">
                              <li>
                                <a
                                  href="#"
                                  class="btn btn-icon search-toggle toggle-search"
                                  data-target="search"
                                >
                                  <em class="icon ni ni-search"></em>
                                </a>
                              </li>
                              <li class="btn-toolbar-sep"></li>

                              {/* <div class="col-md-6 mb-4"> 
                              
                            </ul> */}

                            <div 
                            class="input-group md-form form-sm form-2 pl-0"
                            >
                              <input class="form-control my-0 py-1 amber-border"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                              />
                              <div class="input-group-append">
                                <span class="input-group-text amber lighten-3"
                                  id="basic-text1"
                                ><i class="fas fa-search text-grey"
                                  aria-hidden="true"
                                  onClick={()=>console.log("Search Clickd")}
                                  >
                                  </i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card-search search-wrap" data-search="search">
                        <div class="card-body">
                          <div class="search-content">
                            <a
                              href="#"
                              class="search-back btn btn-icon toggle-search"
                              data-target="search"
                            >
                              <em class="icon ni ni-arrow-left"></em>
                            </a>
                            <input
                              type="text"
                              class="form-control border-transparent form-focus-none"
                              placeholder="Search by user or email"
                            />
                            <button class="search-submit btn btn-icon">
                              <em class="icon ni ni-search"></em>
                            </button>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div class="card-inner p-0">
                      <div class="nk-tb-list nk-tb-ulist is-compact">
                        <div class="nk-tb-item nk-tb-head">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid"
                              />
                              <label
                                class="custom-control-label"
                                for="uid"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <span class="sub-text">User</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="sub-text">Level</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span class="sub-text">Email</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span class="sub-text">Phone</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="sub-text">Analog</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg text-center" >
                            <span class="sub-text">Affiliate</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span class="sub-text">Total Fund</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="sub-text">Status</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools text-end">

                            {/* Plus Icon Remove Part  */}

                            
                            <div class="dropdown dropMenu">
                              <a
                                href="#"
                                class="btn btn-xs btn-outline-dark btn-icon dropdown-toggle"
                                data-bs-toggle="dropdown "
                                data-offset="0,5"
                                style={{ padding: " 3px 8px" }}
                               
                              >
                                <em class="icon ni ni-plus"></em>
                              </a>
                              <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                <ul class="link-tidy sm no-bdr">
                                  <li>
                                    <div class="custom-control custom-control-sm custom-checkbox checked">
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        checked=""
                                        id="bl"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="bl"
                                      >
                                        Balance
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="custom-control custom-control-sm custom-checkbox checked">
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        checked=""
                                        id="ph"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="ph"
                                      >
                                        Phone
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="custom-control custom-control-sm custom-checkbox">
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="vri"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="vri"
                                      >
                                        Verified
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="custom-control custom-control-sm custom-checkbox">
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        id="st"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="st"
                                      >
                                        Status
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid1"
                              />
                              <label
                                class="custom-control-label"
                                for="uid1"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-primary">
                                <span>AB</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Abu Bin Ishtiyak</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>info@softnio.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 847-4958</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Bangladesh</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>10 Feb 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid2"
                              />
                              <label
                                class="custom-control-label"
                                for="uid2"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-warning">
                                <span>PN</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Patrick Newman</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Investor</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>patrick@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+942 238-4474</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>United States</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>06 Feb 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid3"
                              />
                              <label
                                class="custom-control-label"
                                for="uid3"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-success">
                                <span>HK</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Howard Kennedy</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>howard@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+447 595-6725</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>England</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-info ni ni-alarm-alt"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>01 Feb 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-warning">Pending</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid4"
                              />
                              <label
                                class="custom-control-label"
                                for="uid4"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-purple">
                                <span>AB</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Albert Brown</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Subscriber</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>howard@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+408 595-6725</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>United States</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon ni ni-alert-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>31 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid5"
                              />
                              <label
                                class="custom-control-label"
                                for="uid5"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-danger">
                                <span>BH</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Brian Hunter</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Manager</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>brian@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+811 521-6695</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Bangladesh</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>28 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-info">Inactive</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid6"
                              />
                              <label
                                class="custom-control-label"
                                for="uid6"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-dark">
                                <span>TS</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Timothy Silva</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Investor</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>timothy@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+91 411-5392</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>India</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>26 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-info">Inactive</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid7"
                              />
                              <label
                                class="custom-control-label"
                                for="uid7"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-success">
                                <span>JC</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Janice Cooper</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Investor</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>janice@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+91 483-6614</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>India</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-warning ni ni-alarm-alt"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>21 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-danger">Suspend</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid8"
                              />
                              <label
                                class="custom-control-label"
                                for="uid8"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-dark">
                                <span>EC</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Elizabeth Carter</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>elizabeth93@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+862 507-4068</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>China</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-info ni ni-alarm-alt"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>21 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid9"
                              />
                              <label
                                class="custom-control-label"
                                for="uid9"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-warning">
                                <span>LN</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Lori Newman</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Investor</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>newman@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+123 287-2360</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>United States</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-info ni ni-alarm-alt"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>18 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid10"
                              />
                              <label
                                class="custom-control-label"
                                for="uid10"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-success">
                                <span>AC</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Alice Contreras</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Manager</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>alice92@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+123 751-5981</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>United States</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>11 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid11"
                              />
                              <label
                                class="custom-control-label"
                                for="uid11"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-primary">
                                <span>JG</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Jesse Guzman</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>guzman@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+842 842-2621</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Vietnam</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>10 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid12"
                              />
                              <label
                                class="custom-control-label"
                                for="uid12"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-danger">
                                <span>GB</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Gary Bishop</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>bishop@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+651 979-7962</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Singapore</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>10 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-warning">Pending</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid13"
                              />
                              <label
                                class="custom-control-label"
                                for="uid13"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-dark">
                                <span>WL</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Wayne Lewis</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>waynelewis@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+632 979-7962</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Philippines</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>05 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-warning">Pending</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid14"
                              />
                              <label
                                class="custom-control-label"
                                for="uid14"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-warning">
                                <span>FP</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Frank Phillips</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>frank97@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+632 577-9342</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Philippines</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-success ni ni-check-circle"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>01 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                     
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nk-tb-item">
                          <div class="nk-tb-col nk-tb-col-check">
                            <div class="custom-control custom-control-sm custom-checkbox notext">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="uid15"
                              />
                              <label
                                class="custom-control-label"
                                for="uid15"
                              ></label>
                            </div>
                          </div>
                          <div class="nk-tb-col">
                            <div class="user-card">
                              <div class="user-avatar xs bg-success">
                                <span>MB</span>
                              </div>
                              <div class="user-name">
                                <span class="tb-lead">Marilyn Bradley</span>
                              </div>
                            </div>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>Customer</span>
                          </div>
                          <div class="nk-tb-col tb-col-sm">
                            <span>marilyn84@example.com</span>
                          </div>
                          <div class="nk-tb-col tb-col-md">
                            <span>+601 890-3578</span>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>Malaysia</span>
                          </div>
                          <div class="nk-tb-col tb-col-lg">
                            <ul class="list-status">
                              <li>
                                <em class="icon text-warning/ ni ni-alarm-alt"></em>
                                <span>Email</span>
                              </li>
                            </ul>
                          </div>
                          <div class="nk-tb-col tb-col-xxl">
                            <span>01 Jan 2020</span>
                          </div>
                          <div class="nk-tb-col">
                            <span class="tb-status text-success">Active</span>
                          </div>
                          <div class="nk-tb-col nk-tb-col-tools">
                            <ul class="nk-tb-actions gx-2">
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Wallet"
                                  aria-label="Wallet"
                                >
                                  <em class="icon ni ni-wallet-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Send Email"
                                  aria-label="Send Email"
                                >
                                  <em class="icon ni ni-mail-fill"></em>
                                </a>
                              </li>
                              <li class="nk-tb-action-hidden">
                                <a
                                  href="#"
                                  class="btn btn-sm btn-icon btn-trigger"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Suspend"
                                  aria-label="Suspend"
                                >
                                  <em class="icon ni ni-user-cross-fill"></em>
                                </a>
                              </li>
                              <li>
                                <div class="drodown">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-icon btn-trigger dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    <em class="icon ni ni-more-h"></em>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <ul class="link-list-opt no-bdr">
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-eye"></em>
                                          <span>View Details</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-chat"></em>
                                          <span>Chat</span>
                                        </a>
                                      </li>
                                      {/* <li class="divider"></li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-shield-star"></em>
                                          <span>Reset Pass</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-shield-off"></em>
                                          <span>Reset 2FA</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <em class="icon ni ni-na"></em>
                                          <span>Suspend User</span>
                                        </a>
                                      </li> */}
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-inner">
                      <ul class="pagination justify-content-center justify-content-md-start">
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Prev
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <span class="page-link">
                            <em class="icon ni ni-more-h"></em>
                          </span>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            6
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            7
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default UserList;
