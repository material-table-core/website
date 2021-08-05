---
id: mt_new_props
title: New Props
---

| Prop                          | Type                                                                 | Description                                                                                                               |
| ----------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `editable.onBulkEditOpen`     | `(isOpen: boolean) => void`                                          | A callback to react to the bulk edit toggle                                                                               |
| `options.showDetailPanelIcon` | `boolean`                                                            | The option to hide the detail panel icon                                                                                  |
| `renderSummaryRow`            | `({columns, column, index, data, currentData }) => { value, style }` | Renders a summary row. The callback will be called for every column to show multiple summaries at the bottom of the table |
| `actions.handlers`            | `(event, rowData) => void`                                           | A Adds all possible div handlers like onMouseEnter with the current row                                                   |
| `onRowDoubleClick`            | `(event, rowData) => void`                                           | The double click event on a row                                                                                           |
