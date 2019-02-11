import * as React from 'react';
import { 
    VictoryPie
} from "victory";

import { dataSets } from './data';


class PieChart extends React.Component<{}> {
    render() {
        return (
            <div className="pie-chart">
                <VictoryPie />
            </div>
        )
    }
}

export default PieChart;
