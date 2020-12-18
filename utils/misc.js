const props = [
  'action',
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

console.log(
`---
id: material_table
title: All Props
---

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import classnames from 'classnames';\r\n`
);

props.forEach(prop => {
  const _path = `docs/api/props/mt_prop_${prop}`;
  console.log(`### ${prop}
  
<Link style={{ marginLeft: 5 }} className={classnames('button button--contained button--secondary button--sm')} to={useBaseUrl('${_path}')}>
  See more about '${prop}' here...
</Link>


  `)
});