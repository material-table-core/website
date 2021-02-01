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

::: info
You will need to install `@material-table/exporters` to use the "built-in", default export methods
:::

In order to make things easier on you, we have provided the following default export utility functions.

```javascript
// ...
import { ExportCsv, ExportPdf } from '@material-table/exporters';

<MaterialTable 
  // ...
  options={{
    // ...
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

### `exportButton`

:::caution This property has been deprecated

:::

### `exportCsv`

:::caution This property has been deprecated

:::

### `exportPdf`

:::caution This property has been deprecated

:::

### `exportDelimiter`

:::caution This property has been deprecated

:::
