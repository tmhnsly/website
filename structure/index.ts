import type { StructureResolver } from "sanity/structure";
export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.documentTypeListItem("blogPost")
        .title("Blog Posts")
        .icon(() => "📝"),
    ]);
