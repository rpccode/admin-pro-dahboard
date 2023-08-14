

export const StatsBox = () => {
    return (
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="m-r-20 align-self-center"><img src="./src/assets/images/icon/income.png" alt="Income" /></div>
                            <div className="align-self-center">
                                <h6 className="text-muted m-t-10 m-b-0">Total Income</h6>
                                <h2 className="m-t-0">953,000</h2></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="m-r-20 align-self-center"><img src="./src/assets/images/icon/expense.png" alt="Income" /></div>
                            <div className="align-self-center">
                                <h6 className="text-muted m-t-10 m-b-0">Total Expense</h6>
                                <h2 className="m-t-0">236,000</h2></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="m-r-20 align-self-center"><img src="./src/assets/images/icon/assets.png" alt="Income" /></div>
                            <div className="align-self-center">
                                <h6 className="text-muted m-t-10 m-b-0">Total Assets</h6>
                                <h2 className="m-t-0">987,563</h2></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="m-r-20 align-self-center"><img src="./src/assets/images/icon/staff.png" alt="Income" /></div>
                            <div className="align-self-center">
                                <h6 className="text-muted m-t-10 m-b-0">Total Staff</h6>
                                <h2 className="m-t-0">987,563</h2></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
