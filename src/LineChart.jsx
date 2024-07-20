
import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }) {
    return (
        <div className="chart-container">

            <Line
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "mood of cat over the days"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    );
}
export default LineChart;