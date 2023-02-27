import { defineConfig as e } from "tinacms";
const t = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main", o = e({
  branch: t,
  clientId: "1488a942-c9dc-4a28-89c7-ab352a9f7ce7",
  token: "8f58bdd0bae77b557109fae63ccf63f5c8b5827d",
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
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: !0,
            required: !0
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: !0
          }
        ]
      }
    ]
  }
});
export {
  o as default
};
