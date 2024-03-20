import { Handle, Position } from "reactflow";
import { defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

defaults.responsive = true;
defaults.maintainAspectRatio = false;

const nodeView = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ backgroundColor: data.bgColor, color: data.txtColor }}
      className="relative w-36 h-11 rounded-md grid place-items-center text-base"
    >
      {data.label}
      {hover && (
        <div className="absolute bottom-11">
          <div className="w-[350px] h-52 bg-white shadow-md rounded-xl p-2.5">
            <Bar
              data={{
                labels: ["Positive", "Negative", "Comments"],
                datasets: [
                  {
                    label: "Reviews",
                    data: [
                      data.chartData.positive,
                      data.chartData.negative,
                      data.chartData.comments,
                    ],
                    borderRadius: 7,
                    backgroundColor: "rgb(34, 211, 238, 0.5)",
                    indexAxis: "y",
                  },
                ],
              }}
            />
          </div>
          <div className="absolute -bottom-[11px] left-[calc(175px-12px)] border-t-[12px] border-t-cyan-100 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent" />
        </div>
      )}
      <Handle type="target" position={Position.Left} />
      <Handle
        type="source"
        position={Position.Right}
        className={`${data.source ? "visible" : "invisible"}`}
      />
    </div>
  );
};

export default nodeView;