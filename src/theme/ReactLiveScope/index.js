/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import TABLE_ICONS from './tableIcons.js';
import MaterialTable, { MTableToolbar } from '@material-table/core';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const RAND_COLOR = () => '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

const DEMO_DATA = [
  { id: 2, name: "Joe" },
  { id: 1, name: "Mary" }
];

const DEMO_COLS = [
  { field: "id", title: "Id" },
  { field: "name", title: "Name" }
];

/**
 * Add react-live imports you need here
 */
const ReactLiveScope = {
  // Global/env vars
  RAND_COLOR,
  DEMO_DATA,
  DEMO_COLS,

  // React
  React,
  ...React,

  // Material UI imports
  Button,
  SaveIcon,

  // Material Table imports
  TABLE_ICONS,
  MaterialTable,
  MTableToolbar
};

export default ReactLiveScope;
