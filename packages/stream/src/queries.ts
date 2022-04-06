import { request, gql } from 'graphql-request';
import 'dotenv/config';

const streamQuery = (id: string): string => {
  const q = gql`
  {
    Stream(${id}) {
    }
  }
`;
  return q;
};

const streamAccountQuery = (account: string): string => {
  const q = gql`
    {
        StreamAccount(${account}) {

        }
    }`;
  return q;
};

const graphEndpoint = process.env.GRAPHQL_ENDPOINT;

export const getStream = async (streamId: string): Promise<any> => {
  return await request(graphEndpoint, streamQuery(streamId));
};
export const getStreamAccount = async (account: string): Promise<any> => {
  return await request(graphEndpoint, streamAccountQuery(account));
};
