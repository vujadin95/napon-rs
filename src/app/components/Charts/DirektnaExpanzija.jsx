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

const DirektnaExpanzija = () => {
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
    ["Minusna", "ekspediciona", "komora", "200t-1000m3"],
    ["Minusna lager", "komora", "500t-2400m3"],
    ["Minusna lager", "komora", "680t-3200m3"],
    ["Tri Minusne", "lager komore", "1800m3"],
    ["Tunel za", "zamrzavanje", "7t/12h"],
    ["Plusno-Minusna", "komora", "150t-750m3"],
    ["Tunel za", "zamrzavanje", "10t/12h"],
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Potrošnja pre",
        data: [61080, 101650, 125820, 117300, 122400, 54300, 147100],
        backgroundColor: "#C00000",
      },
      {
        label: "Potrošnja posle",
        data: [41100, 81900, 101200, 77700, 110800, 35400, 133880],
        backgroundColor: "#0070C0",
      },
      {
        label: "Ušteda [kW]",
        data: [19980, 19750, 24620, 39600, 11600, 18900, 13300],
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
export default DirektnaExpanzija;
