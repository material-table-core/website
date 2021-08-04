/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import MaterialTable, { MTableToolbar, MTableBodyRow } from '@material-table/core';
import { ExportPdf, ExportCsv } from '@material-table/exporters';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import GLOBAL_VARIABLES from '../../../demos/demo.global-variables'; // at the root of this project

/**
 * Add react-live imports you need here
 */
const ReactLiveScope = {
  // Global/env vars
  ...GLOBAL_VARIABLES,
  // React
  React,
  ...React,
  // Material UI imports
  Button,
  SaveIcon,
  // Material Table imports
  ExportPdf,
  ExportCsv,
  MaterialTable,
  MTableToolbar,
  MTableBodyRow
};

export default ReactLiveScope;
