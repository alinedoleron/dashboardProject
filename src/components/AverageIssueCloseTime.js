import  React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTime} from '../utils/AverageTime';
import {getIssuesClosed} from '../queries/queries';
import Card from './Card';

const AverageIssueCloseTime = () => {
        const { loading, error, data } = useQuery(getIssuesClosed);

        let averageIssueCloseTime = '';

        if (loading) {
            averageIssueCloseTime = 'Loading...';
        } else if (error) {
            averageIssueCloseTime = 'Error!';
        }else if (data) {
            averageIssueCloseTime = getAverageTime(data.repository.issues.nodes);

        }

        return (
            <div className='small-cards'>
                <Card content = {averageIssueCloseTime}/>
            </div>
        )

}

export default AverageIssueCloseTime;