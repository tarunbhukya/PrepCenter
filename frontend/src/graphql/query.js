import {gql} from '@apollo/client'

export const GET_USER = gql`
    query GetUser{
        user {
            id
            email
            role
        }
    }
`;

export const GET_QUESTIONS = gql`
    query GetQuestionBanks {
        questionBanks {
            id
            title
            description
            examType
            user {
                username
            }
        }
    }
`;

export const GET_QUESTIONBANK = gql`
    query GetQuestionBank($id: ID!) {
        questionBank(id: $id) {
            id
            title
            description
            questions
            answers
            examType
            user {
                username
            }
        }
    }
`;
