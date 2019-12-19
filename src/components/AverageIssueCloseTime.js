import  React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getIssuesClosed = gql `
query {
    repository(owner: "zenorocha", name: "clipboard.js") {
        issues(last:100, states: CLOSED) {
            nodes {
            id
            ... on Issue {
                closedAt
                createdAt
            }
            }
        }
        }
    }
`;

const getPRsClosed = gql `
query {
        repository(owner: "zenorocha", name: "clipboard.js") {
            pullRequests(last: 100, states: MERGED) {
                nodes {
                closedAt
                createdAt
                }
            }
        }
    }
`;

const getDays = (datesDiff) => {
    return datesDiff/86400000;
}

const getHours = (daysDiff) => {
    return daysDiff * 24;
}

const getMinutes = (hoursDiff) => {
    return hoursDiff * 60;
}

const getAverageTime = (nodes) => {
    let totalDays = 0;
    let totalHours = 0;
    let totalMinutes = 0;

    nodes.map((node) =>
            {
                let created = new Date(node.createdAt);
                let closed = new Date(node.closedAt);
                totalDays += getDays(closed - created);
                totalHours += getHours(totalDays - Math.floor(totalDays));
                totalMinutes += getMinutes(totalHours - Math.floor(totalHours));
            }
            );

            let totalNodes = nodes.length;

            return Math.floor(totalDays/totalNodes) + 'days '
                + Math.floor(totalHours/totalNodes)+'h'
                + Math.floor(totalMinutes/totalNodes)+'m';

}

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