import * as React from 'react';
import { 
    VictoryPie, 
    VictoryBar, 
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryStack
} from "victory";

const data2012 = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];
  
  const data2013 = [
    {quarter: 1, earnings: 15000},
    {quarter: 2, earnings: 12500},
    {quarter: 3, earnings: 19500},
    {quarter: 4, earnings: 13000}
  ];
  
  const data2014 = [
    {quarter: 1, earnings: 11500},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 20000},
    {quarter: 4, earnings: 15500}
  ];
  
  const data2015 = [
    {quarter: 1, earnings: 18000},
    {quarter: 2, earnings: 13250},
    {quarter: 3, earnings: 15000},
    {quarter: 4, earnings: 12000}
  ];

  const dataSets = [data2012, data2013, data2014, data2015];
  

class Victory extends React.Component<{}> {
    render() {
        return (
            <div className="victory">
                {/* <VictoryPie /> */}
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}
                >
                    <VictoryAxis 
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryStack
                        colorScale="blue"
                    >
                        {dataSets.map(set => (
                            <VictoryBar 
                                data={set}
                                x="quarter"
                                y="earnings"
                            />
                        ))}
                    </VictoryStack>
                </VictoryChart>
            </div>
        )
    }
}

export default Victory;