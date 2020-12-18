"use strict";

const fs = require('fs');
const path = require('path');

const names = [
  "action",
  "actions",
  "body-row",
  "body",
  "cell",
  "edit-field",
  "edit-row",
  "filter-row",
  "group-row",
  "groupbar",
  "header",
  "pagination",
  "stepped-pagination",
  "toolbar"
];

const { log } = console;
const divider = () => log("\r\n\r\n");

divider();

const prefix = "m-table-";
names.forEach(name => {
  const componentName = `${prefix}${name}`;

  const id = String(componentName).replace('-', '_');

  const filepath = path.resolve(__dirname, `../docs/api/components/${componentName}.md`);
  const filecontents = `---
id: ${'component_'.concat(id.replace('-', '_'))}
title: ${componentName}
---

More on \`${componentName}\` goes here`; 

  fs.writeFileSync(filepath, filecontents);
  log(`"api/components/component_${id.replace('-', '_')}",`);
});