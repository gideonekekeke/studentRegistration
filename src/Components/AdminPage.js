import React from "react";
import "./min.css";
import pic from "../Components/img/1.jpg";
import pic1 from "../Components/img/2.jpg";
import pic2 from "../Components/img/3.jpg";

function AdminPage() {
  return (
    <div className="admin_container">
      <div className="admin_card">
        <div className="card_holder">
          <div className="name_img">
            <div className="card_img">
              <img />
            </div>
            <div style={{ marginLeft: "30px" }}>
              name
              <div>date</div>
            </div>
          </div>
          <p>
            {" "}
            Sometimes you need a ittle help from your friends, a little touch of
            love can change a life forever
          </p>
          <center>
            <h5>Scores</h5>
          </center>
          <div className="box_input">
            <div className="box">
              <div className="name_img1">
                <div className="card_img1">
                  <img
                    src={pic2}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50px",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>Ubani</div>
              </div>
              <center>
                <div style={{ fontWight: "bold", fontFamily: "poppins" }}>
                  Logic
                </div>
              </center>
              <div>
                <input style={{ width: "60%" }} placeholder="logic scores" />
                <button>Submit</button>
              </div>
            </div>

            <div className="box">
              <div className="name_img1">
                <div className="card_img1">
                  <img
                    src={pic1}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50px",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>Samuel</div>
              </div>
              <center>
                <div style={{ fontWight: "bold", fontFamily: "poppins" }}>
                  Leadership
                </div>
              </center>
              <div>
                <input
                  style={{ width: "60%" }}
                  placeholder="leadership scores"
                />
                <button>Submit</button>
              </div>
            </div>

            <div className="box">
              <div className="name_img1">
                <div className="card_img1">
                  <img
                    src={pic}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "50px",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>Bukola</div>
              </div>
              <center>
                <div style={{ fontWight: "bold", fontFamily: "poppins" }}>
                  Psychology
                </div>
              </center>
              <div>
                <input
                  style={{ width: "60%" }}
                  placeholder="pyshology scores"
                />
                <button>Submit</button>
              </div>
            </div>
          </div>
          <center>
            <h5>Total : </h5>
          </center>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
