// ponytail: @material-table/core@8.0.1 imports `DeleteOutline`, which MUI icons v9
// renamed to `DeleteOutlined`. Aliased via webpack in docusaurus.config.js.
// Remove once core imports the new name.
export * from "@mui/icons-material/index";
export { default as DeleteOutline } from "@mui/icons-material/DeleteOutlined";
