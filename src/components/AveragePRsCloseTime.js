import  React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTime} from '../utils/AverageTime';
import {getPRsClosed} from '../queries/queries';

const AveragePRsCloseTime = () => {
        const { loading, error, data } = useQuery(getPRsClosed);

        let averagePRsCloseTime = '';

        if (loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else if (error) {
            return (
                <div>
                    ERROR!
                </div>
            )
        } else if (data) {
            averagePRsCloseTime = getAverageTime(data.repository.pullRequests.nodes);

            return (
                <div>
                    {averagePRsCloseTime}
                </div>
            )

        }

}

export default AveragePRsCloseTime;