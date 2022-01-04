---
id: columns
title: columns
---

Props for `MaterialTable.columns` objects.

## `hidden`

Hide from table

## `hiddenByColumnsButton`

Hide from column selection action menu

## `filterComponent`

Custom component for filtering

Signature: ({ columnDef, onFilterChanged }) => ReactElement

## `filterOnItemSelect`

The data of the table is filtered by default only on blur of the filter component for performance reasons.
Set this flag to `true` to filter the table on change.
