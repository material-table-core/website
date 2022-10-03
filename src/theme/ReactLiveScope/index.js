/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import MaterialTable, {
  MTableToolbar,
  MTableBodyRow,
} from "@material-table/core";
import { ExportPdf, ExportCsv } from "@material-table/exporters";
import {
  Switch,
  Button,
  FormGroup,
  FormControlLabel,
  FormControl,
  Radio,
  FormLabel,
  RadioGroup,
  TextField,
  MenuItem,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import GLOBAL_VARIABLES from "../../../demos/demo.global-variables"; // at the root of this project

/**
 * Add react-live imports you need here
 */
const ReactLiveScope = {
  // Global/env vars
  ...GLOBAL_VARIABLES,
  // React
  React,
  ...React,
  // Mui imports
  Button,
  FormGroup,
  TextField,
  Radio,
  MenuItem,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Switch,
  SaveIcon,
  // Material Table imports
  ExportPdf,
  ExportCsv,
  MaterialTable,
  MTableToolbar,
  MTableBodyRow,
};

export default ReactLiveScope;
