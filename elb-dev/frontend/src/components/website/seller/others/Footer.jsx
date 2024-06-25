import React from "react";

function Footer() {
  return (
    <div>
      <h3 className="text-24 fw-bold text-dark-300 mb-2">Latest Jobs</h3>

      <div className="overflow-x-auto">
        <div className="w-100">
          <table className="w-100 dashboard-table">
            <thead className="pb-3">
              <tr>
                <th scope="col" className="ps-4">
                  Project Name
                </th>
                <th scope="col">Amount</th>
                <th scope="col">Expected Delivery Date</th>
                <th scope="col" className="text-start">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-1.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        Brote - Cleanin Service Elementor Template Kit
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">Waiting for requirements</td>
                <td className="text-start">
                  <span className="status-badge pending">Pending payment</span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-2.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        Nas Best Digital Agency Website Design
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">January 18, 2024 02:51 PM</td>
                <td className="text-start">
                  <span className="status-badge in-progress">
                    Pending payment
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-3.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        File Manager Cloud Storage App Mobile Design
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">-</td>
                <td className="text-start">
                  <span className="status-badge canceled"> Canceled </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-4.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        Hiring Platform Dashboard Designe for Filtering
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">January 25, 2024 10:23 AM</td>
                <td className="text-start">
                  <span className="status-badge canceled"> Canceled </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-5.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        I will do Amazing Website Creative Design Figma
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">Waiting for requirements</td>
                <td className="text-start">
                  <span className="status-badge in-progress">
                    In the progress
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-6.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        Brote - Cleanin Service Elementor Template Kit
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">January 28, 2024 10:23 AM</td>
                <td className="text-start">
                  <span className="status-badge in-progress">
                    In the progress
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-3.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        File Manager Cloud Storage App Mobile Design
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">-</td>
                <td className="text-start">
                  <span className="status-badge canceled"> Canceled </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex gap-3 align-items-center project-name">
                    <div className="order-img">
                      <img src="assets/img/dashboard/orders/o-4.png" alt="" />
                    </div>
                    <div>
                      <a href="service-details.html" className="project-link">
                        Hiring Platform Dashboard Designe for Filtering
                      </a>
                      <ul className="d-flex gap-1 order-category">
                        <li className="text-dark-200">WordPress</li>
                        <li className="text-dark-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="10"
                            viewBox="0 0 5 10"
                            fill="none"
                          >
                            <path
                              d="M1 9L4 5L1 1"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </li>
                        <li className="text-dark-200">Creative</li>
                      </ul>
                    </div>
                  </div>
                </td>
                <td className="text-dark-200">$15</td>
                <td className="text-dark-200">Waiting for requirements</td>
                <td className="text-start">
                  <span className="status-badge pending">Pending payment</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Footer;
