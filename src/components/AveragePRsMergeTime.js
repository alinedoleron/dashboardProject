import  React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTime} from '../utils/AverageTime';
import {getPRsMerged} from '../queries/queries';
import Card from './Card';

const AveragePRsMergeTime = () => {
        const { loading, error, data } = useQuery(getPRsMerged);

        let averagePRsMergedTime = '';

        if (loading) {
            averagePRsMergedTime = 'Loading...';
        } else if (error) {
            averagePRsMergedTime = 'Error!';
        } else if (data) {
            averagePRsMergedTime = getAverageTime(data.repository.pullRequests.nodes);
        }

        return (
            <div className='small-cards'>
                <Card content={averagePRsMergedTime}/>
            </div>
        )

}

export default AveragePRsMergeTime;