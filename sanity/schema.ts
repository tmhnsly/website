import { type SchemaTypeDefinition } from "sanity";
import { BlogPost } from "./schemas/blogPost";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BlogPost],
};
