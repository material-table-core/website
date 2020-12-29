# General Info

- Your demo should be placed in a folder under `~/demos`. 
  - For example, `~/demos/override/row`
- You have the ability to use React inside of markdown
  - Make sure your file ends in `.mdx`
  - Refer to an existing demo file for a better understanding
- Each `.mdx` or `.md` file has to have a header
  - See [here](example-header.md) for an example
  - The `id` is required and needs to be unique ***per folder***
  - **Highly recommend reading [more on markdown features here](https://v2.docusaurus.io/docs/markdown-features/)**

# Sidebar

- To show your demo in the sidebar you need to edit `~/sidebar.demos.js`
  - If I wanted to add a demo to the URL `/demo/override/row` I would
    - [Create](#row.mdx) a file at `~/demos/override/row.md` *could also use `.mdx` extension*
    - Update [sidebar.demos.js](#sidebar.demos.js)
    - ***The `id`** needs to be the same as the ending of the path you put into `~/sidebar.demos.js`

## row.mdx

```
---
id: row
// ...
---
```

## sidebar.demos.js

```diff
module.exports = {
  sidebar: [
  // ...
    {
      type: "category",
      label: "Override Components",
      items: [
        "override/toolbar"
+       "override/row"
      ],
    },
  // ...
  ]
}
```