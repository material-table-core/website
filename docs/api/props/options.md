---
id: options
title: options
---

### `exportMenu`

   - Array of objects
   - Objects have the following shape: 
   
```javascript
{ label: string, exportFunc: (columns, data) => void }
```

In order to make things easier on you, we have provided the following default export utility functions.

:::info
You will need to install `@material-table/exporters` to use the "built-in", default export methods
:::

:::info
The exportAllData options will always export all the passed data, instead of the current shown rows.
:::

```javascript
// ...
import { ExportCsv, ExportPdf } from '@material-table/exporters';

<MaterialTable 
  // ...
  options={{
    // ...
    exportAllData: true,
    exportMenu: [{
      label: 'Export PDF',
      exportFunc: (cols, datas) => ExportPdf(cols, datas, 'myPdfFileName')
    }, {
      label: 'Export CSV',
      exportFunc: (cols, datas) => ExportCsv(cols, datas, 'myCsvFileName')
    }]
  }}
/>
```
### `exportAllData`

:::info[Export all data that is passed to the table]

:::

### `exportButton`

:::caution[This property has been deprecated]

:::

### `exportCsv`

:::caution[This property has been deprecated]

:::

### `exportPdf`

:::caution[This property has been deprecated]

:::

### `exportDelimiter`

:::caution[This property has been deprecated]

:::
