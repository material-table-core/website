const fs = require('fs');
const path = require('path');

const highlights = [
  'Actions',
  'Component overriding',
  'Custom column rendering',
  'Detail Panel',
  'Editable',
  'Export',
  'Filtering',
  'Grouping',
  'Localization',
  'Remote Data',
  'Search',
  'Selection',
  'Sorting',
  'Styling',
  'Tree Data',
];

highlights.forEach(highlight => {

  const id = 'highlight_' + highlight.toLowerCase().replace(/\s+/g, '_');
  const sidebarPath = '"highlights/' + id + '",';
  const filepath = path.resolve(__dirname, '../docs/highlights/' + highlight.toLowerCase().replace(/\s+/g, '_') + '.md');

  const filecontent = `---
id: ${id}
title: ${highlight} 
---

More on ${highlight} goes here
`;

  fs.writeFileSync(filepath, filecontent);
  console.log(sidebarPath);

});