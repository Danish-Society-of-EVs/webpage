import { defineConfig as e } from "tinacms";
const o = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main", i = e({
  branch: o,
  clientId: "andersaskeland",
  token: "a4f11460296a7320546a493a77c8d94cfb41d1f4",
  build: {
    outputFolder: "admin",
    publicFolder: "_site"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "_site"
    }
  },
  schema: {
    collections: [
      {
        label: "News",
        name: "news",
        path: "src/posts",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: !0
          }
        ]
      },
      {
        label: "Featured articles",
        name: "featured_articles",
        path: "src/articles",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: !0
          }
        ]
      },
      {
        label: "EV groups in Denmark",
        name: "ev_groups_in_denmark",
        path: "src/groups",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: !0
          }
        ]
      }
    ]
  }
});
export {
  i as default
};
