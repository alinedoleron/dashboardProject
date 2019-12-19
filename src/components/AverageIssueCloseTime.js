import  React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTime} from '../utils/AverageTime';
import {getIssuesClosed} from '../queries/queries';

const AverageIssueCloseTime = () => {
        const { loading, error, data } = useQuery(getIssuesClosed);

        let averageIssueCloseTime = '';

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
            averageIssueCloseTime = getAverageTime(data.repository.issues.nodes);

            return (
                <div>
                    {averageIssueCloseTime}
                </div>
            )

        }

}

export default AverageIssueCloseTime;