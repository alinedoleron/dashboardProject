import  React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTime} from '../utils/AverageTime';
import {getPRsMerged} from '../queries/queries';
import Card from './Card';

const AveragePRsMergeTime = ({repoState}) => {
        const { loading, error, data } = useQuery(getPRsMerged,
            {
                variables:
                    {
                        user: repoState.user,
                        repository: repoState.repository
                    }
                });

        const name= 'Average Pull Request Merge Time';

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
                <Card content={averagePRsMergedTime} cardName={name}/>
            </div>
        )

}

export default AveragePRsMergeTime;