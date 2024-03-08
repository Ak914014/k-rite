import { faker } from '@faker-js/faker';
export function shortId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 95%, 90%)`;
}

export function makeData(count) {
  let data = [];
  let options = [];
  for (let i = 0; i < count; i++) {
    let row = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      age: Math.floor(20 + Math.random() * 20),
      music: faker.music.genre(),
    };
    options.push({ label: row.music, backgroundColor: randomColor() });

    data.push(row);
  }

  options = options.filter(
    (a, i, self) => self.findIndex(b => b.label === a.label) === i
  );

  let columns = [
    {
      id: 'Brand',
      label: 'Brands',
      accessor: 'Brands',
      minWidth: 300,
      dataType: DataTypes.TEXT,
      options: [],
    },
    {
      id: 'Description',
      label: 'Description',
      accessor: 'Description',
      minWidth: 200,
      dataType: DataTypes.TEXT,
      options: [],
    },
    {
      id: 'Members',
      label: 'Members',
      accessor: 'Members',
      width: 200,
      dataType: DataTypes.music,
      options: [],
    },
    {
      id: 'Categories',
      label: 'Categories',
      accessor: 'Categories',
      width: 130,
      dataType: DataTypes.SELECT,
      options: [],
    },
    {
      id: 'Tags',
      label: 'Tags',
      accessor: 'tags',
      dataType: DataTypes.text,
      width: 100,
      options: options,
    },
    {
      id: 'NextMeeting',
      label: 'Next meeting',
      accessor: 'Next meeting',
      width: 150,
      dataType: DataTypes.SELECT,
      options: [],
    },
    {
      id: Constants.ADD_COLUMN_ID,
      width: 10,
      label: '+',
      disableResizing: true,
      dataType: 'null',
    },
  ];
  return { columns: columns, data: data, skipReset: false };
}

export const ActionTypes = Object.freeze({
  ADD_OPTION_TO_COLUMN: 'add_option_to_column',
  ADD_ROW: 'add_row',
  UPDATE_COLUMN_TYPE: 'update_column_type',
  UPDATE_COLUMN_HEADER: 'update_column_header',
  UPDATE_CELL: 'update_cell',
  ADD_COLUMN_TO_LEFT: 'add_column_to_left',
  ADD_COLUMN_TO_RIGHT: 'add_column_to_right',
  DELETE_COLUMN: 'delete_column',
  ENABLE_RESET: 'enable_reset',
});

export const DataTypes = Object.freeze({
  NUMBER: 'number',
  TEXT: 'text',
  SELECT: 'select',
});

export const Constants = Object.freeze({
  ADD_COLUMN_ID: 10,
});
