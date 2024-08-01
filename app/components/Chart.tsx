import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularChart = () => {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <CircularProgressbar
            value={1000}
            styles={buildStyles({
              pathColor: "#2563EB", 
              textColor: "#2563EB",
              trailColor: "#ffffff",
            })}
          />
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="relative w-36 h-36">
              <CircularProgressbar
                value={14}
                
                styles={buildStyles({
                  pathColor: "#F59E0B", 
                  textColor: "#F59E0B",
                  trailColor: "#ffffff",
                })}
              />
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <CircularProgressbar
                    value={21}
                  
                    styles={buildStyles({
                      pathColor: "#10B981", 
                      textColor: "#10B981",
                      trailColor: "#ffffff",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularChart;
