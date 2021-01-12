---
id: install
title: Installation
slug: /
---

## Install 

### yarn

```javascript
yarn add @material-ui/core
yarn add @material-table/core
```

### npm

```javascript
npm install @material-ui/core
npm install @material-table/core
```

## Hello, World

This basic examples should help get you started.

### TypeScript

```typescript title="myFirstTable.ts"
import React from "react";
import MaterialTable, { Column } from "@material-table/core";

interface IPerson {
  firstName: string;
  lastName: string;
  birthYear: number;
  availability: boolean;
}

const lookup = { true: "Available", false: "Unavailable" };

const columns: Array<Column<IPerson>> = [
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
  { title: "Availablity", field: "availability", lookup }
];

const data: Array<IPerson> = [
  { firstName: "Tod", lastName: "Miles", birthYear: 1987, availability: true },
  { firstName: "Jess", lastName: "Smith", birthYear: 2000, availability: false }
];

export const App = () => <MaterialTable columns={columns} data={data} />;
```

### JavaScript

`//todo`
