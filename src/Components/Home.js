import React from 'react';
import "./Home.css";
import { GiProgression, GiProfit } from "react-icons/gi";
import { BsFillCartCheckFill} from "react-icons/bs"
import { HiUsers } from "react-icons/hi";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DoughnutChart from "../Charts/DoughnutChart";

const Home = () => {
  return (
    <div>
      <div className="home-container">

        <div className="box">

          <div className="box-icon">
            <GiProgression />
          </div>
          <div className="box-data">
            <span>Sales</span>
            <h1>+28%</h1>
          </div>

        </div>

        <div className="box">

          <div className="box-icon">
            <HiUsers />
          </div>
          <div className="box-data">
            <span>New Customers</span>
            <h1>+24</h1>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <GiProfit />
          </div>
          <div className="box-data">
            <span>Profit</span>
            <h1>+56%</h1>
          </div>

        </div>
        <div className="box">

          <div className="box-icon">
            <BsFillCartCheckFill />
          </div>
          <div className="box-data">
            <span>New Orders</span>
            <h1>+26</h1>
          </div>

        </div>
      </div>

      <div className="home-container-2">
        <div className="card">
          <div style={{ width: 250, height: 250 }}>
            <CircularProgressbar value={66} circleRatio={0.75} maxValue={100} text={`75%`}
              styles={{
                trail: {
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'center center',
                  strokeWidth: 3,
                },

                path: {
                  transform: 'rotate(-135deg)',
                  transformOrigin: 'center center',
                  stroke: "#34ccfc",
                  strokeWidth: 4.5,
                }
              }}
            />

            <h1>Progress</h1>
          </div>
        </div>
        <div className="card">
          <DoughnutChart />
        </div>
      </div>
    </div>
  )
}

export default Home 