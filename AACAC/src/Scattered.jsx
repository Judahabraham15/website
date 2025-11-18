// Make sure you have installed recharts:
// npm install recharts
// ...and have Tailwind CSS configured.

import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label
} from 'recharts';

// Data from Table 6.3
const scoreData = [
  { ncee: 168, average: 58 },
  { ncee: 101, average: 52 },
  { ncee: 194, average: 76 },
  { ncee: 141, average: 64 },
  { ncee: 190, average: 74 },
  { ncee: 160, average: 52 },
  { ncee: 150, average: 53 },
  { ncee: 65, average: 65 }, // This is an interesting outlier
  { ncee: 95, average: 43 },
  { ncee: 150, average: 47 },
];

const ScoreScatterChart = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        NCEE Score vs. End of Year Average
      </h2>
      {/* Container needs a defined height for Recharts */}
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 40, // Increased bottom margin for label
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
            
            <XAxis 
              type="number" 
              dataKey="ncee" 
              name="NCEE Score" 
              domain={['dataMin - 10', 'dataMax + 10']}
              stroke="#374151"
            >
              <Label value="NCEE Score (out of 200)" offset={-25} position="insideBottom" fill="#374151" />
            </XAxis>
            
            <YAxis 
              type="number" 
              dataKey="average" 
              name="Average Score" 
              unit="%" 
              stroke="#374151"
            >
              <Label value="End of Year Average (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="#374151" />
            </YAxis>

            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }} 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb', 
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: '#1f2937', fontWeight: 'bold' }}
            />
            
            <Scatter 
              name="Pupil Scores" 
              data={scoreData} 
              fill="#3b82f6" // A nice blue color
              shape="circle" 
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScoreScatterChart;