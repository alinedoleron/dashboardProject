import { gql } from 'apollo-boost';

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

export {getIssuesClosed, getPRsClosed};