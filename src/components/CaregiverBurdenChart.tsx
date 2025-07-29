import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useState } from 'react';
import SourcesModal from './SourcesModal';

const CaregiverBurdenChart = () => {
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const data = [
    { name: 'Burnout', value: 19, color: '#4B2E00' },       // Darkest bark brown
    { name: 'Emotional Burden', value: 14, color: '#6B4F1D' },
    { name: 'Physical Burden', value: 13, color: '#A1743A' },
    { name: 'Time Mgmt', value: 11, color: '#CDA15B' },
    { name: 'Financial Stress', value: 10, color: '#D4B483' },
    { name: 'Isolation', value: 9, color: '#BCA66A' },
    { name: 'Lack Support', value: 8, color: '#936E27' },
    { name: 'Health Issues', value: 7, color: '#472B00' },
    { name: 'Sleep Disrupt', value: 6, color: '#7D5835' },
    { name: 'Other', value: 3, color: '#C8A66F' }
  ];

  const colorTextMap = {
    '#4B2E00': '#FFF',
    '#6B4F1D': '#FFF',
    '#A1743A': '#FFF',
    '#CDA15B': '#2D1810',
    '#D4B483': '#2D1810',
    '#BCA66A': '#2D1810',
    '#936E27': '#FFF',
    '#472B00': '#FFF',
    '#7D5835': '#FFF',
    '#C8A66F': '#2D1810'
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    // Show all percentages, even small ones

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Pick correct text color using your palette mapping
    const textColor = colorTextMap[data[index].color] || 'black';
    const percentValue = (percent * 100).toFixed(0) + "%";

    return (
      <text
        x={x}
        y={y}
        fill={textColor}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="16"
        fontWeight="700"
        fontFamily="Patrick Hand"
      >
        {percentValue}
      </text>
    );
  };

  return (
    <section className="wobbly-card p-8 bg-accent/20 mb-12">
      <div className="text-center mb-8">
        <h2 className="font-caveat text-4xl md:text-5xl text-primary mb-4">
          Caregiver Burden Breakdown
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <ResponsiveContainer width="100%" height={600}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={160}
              labelLine={false}
              label={renderCustomizedLabel}
              dataKey="value"
              stroke="white"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconType="rect"
              wrapperStyle={{
                fontSize: '16px',
                fontFamily: 'Patrick Hand',
                paddingLeft: '40px',
                lineHeight: '1.8'
              }}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="text-center text-sm text-muted-foreground mt-6">
          <p className="font-patrick">
            Source: National Alliance for Caregiving & AARP (2020) & peer-reviewed research.{' '}
            <button
              onClick={() => setSourcesOpen(true)}
              className="underline text-primary hover:text-primary/80 transition-colors"
            >
              View all sources
            </button>
          </p>
        </div>
      </div>

      <SourcesModal open={sourcesOpen} onOpenChange={setSourcesOpen} />
    </section>
  );
};

export default CaregiverBurdenChart;