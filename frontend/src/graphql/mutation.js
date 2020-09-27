import {gql} from '@apollo/client'

export const GET_SESSION = gql`
    mutation GetSession($email: String, $password: String) {
        sessionCreate( input: {
            email: $email,
            password: $password
        }) {
                token
                exp
                errors {
                    field
                    messages
                }
            }
    }
`;

export const CREATE_QUESTIN_BANK = gql`
    mutation CreateQuestionBank(
        $title: String, 
        $user: Int, 
        $description: String,
        $questions: JSON,
        $answers: JSON,
        $examType: String
    ) {
        questionBankCreate(input: {
            title: $title,
            user: $user,
            description: $description,
            questions: $questions,
            answers: $answers,
            examType: $examType
          }) {
            questionBank {
              id
              title
            }
            errors {
                field
                messages
            }
          } 
    }
`;
