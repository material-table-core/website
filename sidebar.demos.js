module.exports = {
  demos: [
    {
      type: "category",
      label: "Demos",
      items: [
        "about",
        {
          type: "category",
          label: "Actions",
          items: ["actions/basic"],
        },
        {
          type: "category",
          label: "Override Components",
          items: ["component-overriding/toolbar"],
        },
        {
          type: "category",
          label: "Features",
          items: [
            "features/custom_column_rendering",
            "features/detail_panel",
            "features/editable",
            "features/export",
            "features/filtering",
            "features/grouping",
            "features/localization",
            "features/remote_data",
            "features/search",
            "features/selection",
            "features/sorting",
            "features/styling",
            "features/tree_data",
          ],
        },
      ],
    },
  ],
}