import React from "react";

export default function ObjectSelling() {
  return (
    <section className="section dashboard">
      <div className="col-12">
        <div className="card top-selling overflow-auto">

          <div className="card-body pb-0" style={{backgroundColor:"rgba(234, 231, 231, 0.776)"}}>
            <h5 className="card-title text-start">Top Object Selling</h5>

            <table className="table table-borderless" 
            style={{ '--bs-table-accent-bg': '"rgba(0, 0, 0, 0.075)"'}}
            >
              <thead>
                <tr>
                  <th scope="col">Preview</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Sold</th>
                  <th scope="col">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="assets/img/product-1.jpg" alt="this is image" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Ut inventore ipsa voluptas nulla
                    </a>
                  </td>
                  <td>$64</td>
                  <td className="fw-bold">124</td>
                  <td>10 x 23</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="assets/img/product-2.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Exercitationem similique doloremque
                    </a>
                  </td>
                  <td>$46</td>
                  <td className="fw-bold">98</td>
                  <td>12 x 20</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="assets/img/product-3.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Doloribus nisi exercitationem
                    </a>
                  </td>
                  <td>$59</td>
                  <td className="fw-bold">74</td>
                  <td>24 x 20</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="assets/img/product-4.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Officiis quaerat sint rerum error
                    </a>
                  </td>
                  <td>$32</td>
                  <td className="fw-bold">63</td>
                  <td>10 x 15</td>
                </tr>
                <tr>
                  <th scope="row">
                    <a href="#">
                      <img src="assets/img/product-5.jpg" alt="" />
                    </a>
                  </th>
                  <td>
                    <a href="#" className="text-primary fw-bold">
                      Sit unde debitis delectus repellendus
                    </a>
                  </td>
                  <td>$79</td>
                  <td className="fw-bold">41</td>
                  <td>23 x 13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
