import { ColumnValue } from 'src/app/core/models/column';
import { UploadedFile } from 'src/app/core/models/uploaded_file';

export interface News {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  flexible_columns: ColumnValue[];
  files: UploadedFile[];
}
