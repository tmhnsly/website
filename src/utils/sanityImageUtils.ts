import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "sanity";

const { projectId, dataset } = client.config();
const placeholderImageUrl = "https://via.placeholder.com/150";

export function urlFor(source: SanityImageSource | null): string {
  if (!source) {
    return placeholderImageUrl;
  }
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source).url()
    : placeholderImageUrl;
}
