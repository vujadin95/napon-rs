"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chiller = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pregled ostvarenih ušteda kWh/god",
        color: "#333333",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#333333",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
      x: {
        ticks: {
          color: "#333333",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
    },
  };
  const labels = [
    ["Čiler 500kW", "procesno hlađenje"],
    ["Ugradnja free", "coolera 250kW", "procesno hlađenje"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Potrošnja pre",
        data: [673500, 570600],
        backgroundColor: "#C00000",
      },
      {
        label: "Potrošnja posle",
        data: [570600, 519500],
        backgroundColor: "#0070C0",
      },
      {
        label: "Ušteda [kW]",
        data: [102900, 51100],
        backgroundColor: "#92D050",
      },
    ],
  };
  return (
    <div className="w-full shadow-2xl md:h-[70vh] h-[50vh] border border-solid border-zinc-100/40 dark:border-zinc-600 rounded-sm bg-zinc-200 hover:bg-zinc-100 transition-colors cursor-pointer">
      <Bar options={options} data={data} />
    </div>
  );
};
export default Chiller;
