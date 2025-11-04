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
      {" "}
      <div className=" w-[90%] p-6 bg-white rounded-xl">
        {" "}
        <header className="mb-4">
          {" "}
          <h2 className="text-2xl font-semibold mb-1">
            MATH 161: DESCRIPTIVE STATISTICS
          </h2>{" "}
          <h2 className="text-sm text-black mb-1">
            NAME: <span className="bg-black">Abraham Judah Oluwaseun</span>
          </h2>{" "}
          <h2 className="text-sm text-black ">
            MATRIC NO: <span className="bg-black">250910010</span>
          </h2>{" "}
        </header>
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
              barCategoryGap={0} // ✅ Ensures bars touch (true histogram look)
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="age" tick={{ fontSize: 14 }}>
                <Label
                  value="Age group (years)"
                  position="bottom"
                  offset={18}
                />
              </XAxis>

              <YAxis
                tick={{ fontSize: 13 }}
                label={{
                  value: "Population (millions)",
                  angle: -90,
                  position: "insideLeft",
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
