/**
 * This file is for global variables in live code demos.
 * 
 * Export your variable from here and import it into 
 */
import React, { forwardRef } from "react";
import { 
  AddBox, ArrowUpward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, 
  Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn 
} from "@material-ui/icons";

const RAND_COLOR = () => '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

const DEMO_DATA = [
  { id: 2, name: "Joe" },
  { id: 1, name: "Mary" }
];

const DEMO_COLS = [
  { field: "id", title: "Id" },
  { field: "name", title: "Name" }
];

const SELECTION_DATA = [
  { age: 22, name: "Joe" },
  { age: 67, name: "Mary" }
];

const SELECTION_COLS = [
  { field: "age", title: "Age" },
  { field: "name", title: "Name" }
];

const TABLE_ICONS = {
  // tableIcons
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const TREE_DATA = [
  {
    id: 1,
    name: 'a',
    surname: 'Baran',
    birthYear: 1987,
    birthCity: 63,
    sex: 'Male',
    type: 'adult',
  },
  {
    id: 2,
    name: 'b',
    surname: 'Baran',
    birthYear: 1987,
    birthCity: 34,
    sex: 'Female',
    type: 'adult',
    parentId: 1,
  },
  {
    id: 3,
    name: 'c',
    surname: 'Baran',
    birthYear: 1987,
    birthCity: 34,
    sex: 'Female',
    type: 'child',
    parentId: 1,
  },
  {
    id: 4,
    name: 'd',
    surname: 'Baran',
    birthYear: 1987,
    birthCity: 34,
    sex: 'Female',
    type: 'child',
    parentId: 3,
  },
  {
    id: 5,
    name: 'e',
    surname: 'Baran',
    birthYear: 1987,
    birthCity: 34,
    sex: 'Female',
    type: 'child',
  },
  {
    id: 6,
    name: 'f',
    surname: 'Baran',
    birthYear: 1987,
    birthCity: 34,
    sex: 'Female',
    type: 'child',
    parentId: 5,
  },
];

const TREE_COLUMNS = [
  { title: 'Adı', field: 'name' },
  { title: 'Soyadı', field: 'surname' },
  { title: 'Cinsiyet', field: 'sex' },
  { title: 'Tipi', field: 'type', removable: false },
  { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
  {
    title: 'Doğum Yeri',
    field: 'birthCity',
    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
  },
]

const EDITABLE_DATA = [
  { id: "uuid-1", firstName: "Tod", lastName: "Miles" },
  { id: "uuid-2", firstName: "Jess", lastName: "Smith" }
]

const EDITABLE_COLUMNS = [
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" }
]

export default {
  RAND_COLOR,
  DEMO_DATA,
  DEMO_COLS,
  TABLE_ICONS,
  TREE_DATA,
  TREE_COLUMNS,
  EDITABLE_DATA,
  EDITABLE_COLUMNS,
  SELECTION_DATA,
  SELECTION_COLS
}