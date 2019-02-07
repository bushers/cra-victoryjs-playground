import * as React from 'react';
import {
    VictoryChart,
    VictoryAxis,
    VictoryStack,
    VictoryBar,
    VictoryTheme
} from 'victory';

import { dataSets } from './data';

class BarChart extends React.Component<{}> {
    render() {
        return (
            <div className="bar-chart">
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
                        {dataSets.map((set, i) => (
                            <VictoryBar 
                                key={`bar_${i}`}
                                data={set}
                                x="quarter"
                                y="earnings"
                                animate={{ 
                                    duration: 2000,
                                    onLoad: { duration: 1000 }
                                }}
                            />
                        ))}
                    </VictoryStack>
                </VictoryChart>
            </div>
        )
    }
}

export default BarChart;
