"use strict";

const fs = require('fs');
const path = require('path');

const pages = [
  'actions',
  'columns',
  'components',
  'data',
  'detailPanel',
  'editable',
  'icons',
  'isLoading',
  'localization',
  'onChangePage',
  'onChangeRowsPerPage',
  'onChangeColumnHidden',
  'onColumnDragged',
  'onGroupRemoved',
  'onOrderChange',
  'onRowClick',
  'onSelectionChange',
  'onTreeExpandChange',
  'onSearchChange',
  'options',
  'parentChildData',
  'style',
  'tableRef',
  'title',
];

const apiPath = 'api/main-material-table-object/properties';

pages.forEach(page => fs.writeFileSync( 
  path.resolve(__dirname, `./docs/${apiPath}/${page}.md`),
`---
id: mt_prop_${page}
title: ${page}
---`
));

console.log("\r\n\r\n");
pages.forEach(page => {
  console.log(`'${apiPath}/mt_prop_${page}',`)
});
console.log("\r\n\r\n");
