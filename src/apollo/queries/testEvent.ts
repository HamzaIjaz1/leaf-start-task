import { gql } from "@apollo/client";

// Query to Fetch Test Event
export const GET_TEST_EVENT = gql`
  query GetTestEvent {
    getTestEvent {
      id
      name
      description
      dateRange {
        allDay
        end
        start
      }
    }
  }
`;
