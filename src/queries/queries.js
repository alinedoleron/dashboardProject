import { gql } from 'apollo-boost';

const getIssuesClosed = gql `
query ($user: String!, $repository: String!) {
    repository(owner: $user, name: $repository) {
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
query ($user: String!, $repository: String!){
        repository(owner: $user, name: $repository) {
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

const getOrganization = gql `
query ($user: String!) {
    organization(login: $user) {
        id
        repositories(last: 100) {
        edges {
            node {
            id
            name
            }
        }
        }
    }
    }
`;

const getUser = gql `
query ($user: String!) {
    user(login: $user) {
        id
        repositories(last: 100) {
        edges {
            node {
            id
            name
            }
        }
        }
    }
    }
`;

export {getIssuesClosed, getPRsMerged, getOrganization, getUser};