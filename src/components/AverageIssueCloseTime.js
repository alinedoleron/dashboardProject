import  React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTime} from '../utils/AverageTime';
import {getIssuesClosed} from '../queries/queries';
import Card from './Card';

const AverageIssueCloseTime = ({repoState}) => {
        const { loading, error, data } = useQuery(getIssuesClosed,
            {
                variables:
                    {
                        user: repoState.user,
                        repository: repoState.repository
                    }
                });

        const name= 'Average Issue Close Time';

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
                <Card content = {averageIssueCloseTime} cardName={name}/>
            </div>
        )

}

export default AverageIssueCloseTime;