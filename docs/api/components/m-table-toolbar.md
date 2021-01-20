---
id: mtabletoolbar
title: MTableToolbar
---

`MTableToolbar` encapsulates the search, title, free-actions, columns selection, export menu, etc.. and sits just above the actual table.

## Props

### `columnsHiddenInColumnsButton`

- If `false`, all columns are shown in the columns selection action menu [*this is the default*]
- If `true`, each column will need the prop `column.hiddenByColumnsButton` explicitly set to `false`

|  | Value | More Info |
| --- | --- | --- |
| Default | `false` | Default prop value |