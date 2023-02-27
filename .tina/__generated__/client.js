import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a4f11460296a7320546a493a77c8d94cfb41d1f4', queries });
export default client;
  