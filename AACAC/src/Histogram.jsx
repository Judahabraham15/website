import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { age: "0-4", value: 3.5 },
  { age: "5-14", value: 7.6 },
  { age: "15-29", value: 11.9 },
  { age: "30-59", value: 17.7 },
  { age: "60+", value: 5.3 },
];

const Histogram = () => {
  return (
    <div className="items-center justify-center flex flex-col min-h-screen bg-white">
      <div className="w-[90%] p-6 bg-white rounded-xl">
        <header className="mb-4">
          <h2 className="text-2xl font-semibold mb-1">
            MATH 161: DESCRIPTIVE STATISTICS
          </h2>
          <h2 className="text-sm text-black mb-1">
            NAME: <input type="text" className="border rounded-md"/>
          </h2>
          <h2 className="text-sm text-black">
            MATRIC NO:  <input type="text" className="border rounded-md"/>
          </h2>
        </header>

        
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Age Group (years)</th>
                <th className="border border-gray-300 px-4 py-2">Population (millions)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{row.age}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-80"
          aria-label="Nigeria population histogram"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 24, left: 12, bottom: 40 }}
              barCategoryGap={0} 
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" tick={{ fontSize: 14 }}>
                <Label value="Age group (years)" position="bottom" offset={18} />
              </XAxis>
              <YAxis
                tick={{ fontSize: 13 }}
                label={{
                  value: "Population (millions)",
                  angle: -90,
                  position: "centerLeft",
                  offset: 8,
                }}
                domain={[0, "dataMax + 5"]}
              />
              <Tooltip formatter={(value) => `${value} million`} />
              <Bar
                dataKey="value"
                fill="#2563EB"
                radius={[2, 2, 0, 0]}
                animationDuration={800}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Histogram;
