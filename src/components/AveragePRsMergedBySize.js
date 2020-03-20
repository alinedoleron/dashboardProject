import  React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTime} from '../utils/AverageTime';
import {getPRsMerged} from '../queries/queries';

const AveragePRsMergedBySize = ({repoState}) => {
    console.log('inputs no average => ', repoState);
    const { data } = useQuery(getPRsMerged,
        {
            variables:
                {
                    user: repoState.user,
                    repository: repoState.repository
                }
            });
    let smallPRs = [];
    let mediumPRs = [];
    let largePRs = [];

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

            data.repository.pullRequests.nodes.map((node) => {
                if(node.additions + node.deletions <= 100) {
                    smallPRs.push(node);
                } else if(node.additions + node.deletions <= 1000) {
                    mediumPRs.push(node);
                } else {
                    largePRs.push(node);
                }
            });

            const averageSmallPRsMergeTime = getAverageTime(smallPRs);
            const averageMediumPRsMergeTime = getAverageTime(mediumPRs);
            const averageLargePRsMergeTime = getAverageTime(largePRs);

            return (
                <div>
                    averageSmallPRsMergeTime: {averageSmallPRsMergeTime}
                    <br></br>
                    averageMediumPRsMergeTime: {averageMediumPRsMergeTime}
                    <br></br>
                    averageLargePRsMergeTime: {averageLargePRsMergeTime}
                </div>
            )

        }
}

export default AveragePRsMergedBySize;