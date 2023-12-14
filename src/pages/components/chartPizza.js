import React from 'react';
import { View, Text } from 'react-native';
//import { PieChart,Legend } from 'react-native-svg-charts';
//import { PieChart, Legend } from 'react-native-svg-charts';
import { PieChart } from 'react-native-svg-charts';

const ChartPizza = ({ atraso, concluido, andamento }) => {
  const data = [
    {
      key: 1,
      value: atraso,
      svg: { fill: '#FF5733' },
      arc: { outerRadius: '100%', padAngle: 0.02, labels: 40 },

    },
    {
      key: 2,
      value: concluido,
      svg: { fill: '#33FF57' },
    },
    {
      key: 3,
      value: andamento,
      svg: { fill: 'blue' },
    }
  ];
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PieChart style={{ height: 200, width: 130 }} data={data} labels={20} />
  
    </View>

  );
};
export default ChartPizza;
