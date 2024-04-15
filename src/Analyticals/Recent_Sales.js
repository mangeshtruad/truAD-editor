import React from "react";

export default function RecentSales() {
  return (
    <section className="section dashboard">
      <div className="col-12">
        <div className="card recent-sales overflow-auto">
          <div className="card-body"  style={{backgroundColor:"rgba(234, 231, 231, 0.776)"}}>
            <h5 className="card-title text-start">Recent Sales</h5>

            <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
              <div
                className="datatable-top"
                style={{display:"flex", justifyContent:'space-between'}}
              >
                <div className="datatable-dropdown">
                  <label>
                    <select className="datatable-selector">
                      <option value="5">5</option>
                      <option value="10" selected="">
                        10
                      </option>
                      <option value="15">15</option>
                      <option value="-1">All</option>
                    </select>
                    entries per page
                  </label>
                </div>
                <div className="datatable-search">
                  <input
                    className="datatable-input"
                    placeholder="Search..."
                    type="search"
                    title="Search within table"
                  />
                </div>
              </div>
              <div className="datatable-container">
                <table className="table table-borderless datatable datatable-table">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{width: "10.71012805587893%"}}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{fontWeight:700}}
                        >
                          #
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{width: "23.39930151338766%"}}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{fontWeight:700}}
                        >
                          Customer
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{width: "39.34807916181606%"}}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{fontWeight:700}}
                        >
                          Blend Video
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        style={{width: "11.757857974388825%"}}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{fontWeight:700}}
                        >
                          Price
                        </button>
                      </th>
                      <th
                        scope="col"
                        data-sortable="true"
                        className="red"
                        style={{width: "14.78463329452852%"}}
                      >
                        <button
                          className="btn datatable-sorter"
                          style={{fontWeight:700}}
                        >
                          Status
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-index="0">
                      <td scope="row">
                        <a href="#">#2457</a>
                      </td>
                      <td>Brandon Jacob</td>
                      <td>
                        <a href="#" className="text-primary">
                          /Video
                        </a>
                      </td>
                      <td>$64</td>
                      <td className="green">
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                    <tr data-index="1">
                      <td scope="row">
                        <a href="#">#2147</a>
                      </td>
                      <td>Bridie Kessler</td>
                      <td>
                        <a href="#" className="text-primary">
                          /Video
                        </a>
                      </td>
                      <td>$47</td>
                      <td className="green">
                        <span className="badge bg-warning">Pending</span>
                      </td>
                    </tr>
                    <tr data-index="2">
                      <td scope="row">
                        <a href="#">#2049</a>
                      </td>
                      <td>Ashleigh Langosh</td>
                      <td>
                        <a href="#" className="text-primary">
                          /Video
                        </a>
                      </td>
                      <td>$147</td>
                      <td className="green">
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                    <tr data-index="3">
                      <td scope="row">
                        <a href="#">#2644</a>
                      </td>
                      <td>Angus Grady</td>
                      <td>
                        <a href="#" className="text-primar">
                          /Video
                        </a>
                      </td>
                      <td>$67</td>
                      <td className="green">
                        <span className="badge bg-danger">Rejected</span>
                      </td>
                    </tr>
                    <tr data-index="4">
                      <td scope="row">
                        <a href="#">#2644</a>
                      </td>
                      <td>Raheem Lehner</td>
                      <td>
                        <a href="#" className="text-primary">
                          /Video
                        </a>
                      </td>
                      <td>$165</td>
                      <td className="green">
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="datatable-bottom">
                <div className="datatable-info text-end">Showing 1 to 5 of 5 entries</div>
                <nav className="datatable-pagination">
                  <ul className="datatable-pagination-list"></ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
