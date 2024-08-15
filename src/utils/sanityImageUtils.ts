import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = client.config();

export function urlFor(source: SanityImageSource) {
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : "";
}
