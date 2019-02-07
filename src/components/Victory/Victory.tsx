import * as React from 'react';

import BarChart from './BarChart';
import PieChart from './PieChart';


class Victory extends React.Component<{}> {
    render() {
        return (
            <div className="victory">
                {/* <PieChart /> */}
                <BarChart />
            </div>
        )
    }
}

export default Victory;
