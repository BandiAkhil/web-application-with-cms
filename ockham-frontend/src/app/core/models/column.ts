import { ColumnType } from 'src/app/core/models/column-type';

export interface Column {
  id: number;
  name: string;
  type: ColumnType;
}

export interface ColumnValue {
  id: number;
  name: string;
  type: ColumnType;
  value: string;
}
