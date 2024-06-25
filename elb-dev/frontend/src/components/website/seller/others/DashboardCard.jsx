function DashboardCard() {
  return (
    <div className="row g-4">
      <div className="col-xl col-md-6">
        <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
          <div>
            <h3 className="dashboard-widget-title fw-bold text-dark-300">
              $52
            </h3>
            <p className="text-18 text-dark-200">Total Balance</p>
          </div>
          <div className="dashboard-widget-icon">
            <img
              src="../../../../assets/website/img/dashboard/icon/icon-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-xl col-md-6">
        <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
          <div>
            <h3 className="dashboard-widget-title fw-bold text-dark-300">50</h3>
            <p className="text-18 text-dark-200">Total Job</p>
          </div>
          <div className="dashboard-widget-icon">
            <img src="assets/img/dashboard/icon/icon-2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-xl col-md-6">
        <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
          <div>
            <h3 className="dashboard-widget-title fw-bold text-dark-300">35</h3>
            <p className="text-18 text-dark-200">Complete Order</p>
          </div>
          <div className="dashboard-widget-icon">
            <img src="assets/img/dashboard/icon/icon-3.png" alt="" />
          </div>
        </div>
      </div>
      <div className="col-xl col-md-6">
        <div className="p-4 d-flex align-items-center dashobard-widget justify-content-between bg-white rounded-4">
          <div>
            <h3 className="dashboard-widget-title fw-bold text-dark-300">02</h3>
            <p className="text-18 text-dark-200">Active Order</p>
          </div>
          <div className="dashboard-widget-icon">
            <img src="assets/img/dashboard/icon/icon-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
