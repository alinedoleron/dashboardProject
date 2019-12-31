import { gql } from 'apollo-boost';

const getIssuesClosed = gql `
query {
    repository(owner: "diegonvs", name: "gatsby-boilerplate") {
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

const getPRsMerged = gql `
query {
        repository(owner: "diegonvs", name: "gatsby-boilerplate") {
            pullRequests(last: 100, states: MERGED) {
                nodes {
                closedAt
                createdAt
                deletions
                additions
                }
            }
        }
    }
`;

export {getIssuesClosed, getPRsMerged};