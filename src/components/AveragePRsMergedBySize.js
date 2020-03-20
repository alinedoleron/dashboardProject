import  React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getAverageTimeInHours} from '../utils/AverageTime';
import {getPRsMerged} from '../queries/queries';
import bb from 'billboard.js';
import '../style/billboard.css';
import Card from './Card';

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

    const name= 'Average Merge Time By Pull Request Size';

    let averageSmallPRsMergeTime = 0;
    let averageMediumPRsMergeTime = 0;
    let averageLargePRsMergeTime = 0;

        if (data) {

            data.repository.pullRequests.nodes.map((node) => {
                if(node.additions + node.deletions <= 100) {
                    smallPRs.push(node);
                } else if(node.additions + node.deletions <= 1000) {
                    mediumPRs.push(node);
                } else {
                    largePRs.push(node);
                }
            });
        }

        averageSmallPRsMergeTime = getAverageTimeInHours(smallPRs);
        averageMediumPRsMergeTime = getAverageTimeInHours(mediumPRs);
        averageLargePRsMergeTime = getAverageTimeInHours(largePRs);

        useEffect(() => {
            // generate the chart

            bb.generate({
                axis: {
                    x: {
                    type: 'category',
                    categories: [
                        'Small',
                        'Medium',
                        'Large'
                    ]
                    },
                    y: {
                        max: 48,
                        tick: {
                            count: 5,
                            format: d => (d != 0) ? d + 'h' : d,
                            // format: x => ({0: 0, 20: 24, 40: 32, 60: 40, 80: 48}[x]),
                            values: [0, 24, 32, 40, 48]
                        }
                    }
                },
                bindto: "#average-prs-merged-chart",
                data: {
                    type: "bar",
                    columns: [
                        ['x', averageSmallPRsMergeTime , averageMediumPRsMergeTime, averageLargePRsMergeTime]
                    ]
                },
                grid: {
                    x: {
                        show: false
                    },
                    y: {
                        show: true
                    }
                },
                legend: {
                    show: false
                }
            });
        });

        let chart = <div id='average-prs-merged-chart'></div>;

        return (
            <div className='big-card'>
                <Card content={chart} cardName={name}></Card>
            </div>
        );

}

export default AveragePRsMergedBySize;