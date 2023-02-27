export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export function getSdk(requester) {
  return {};
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
