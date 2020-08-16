import { UploadedFile } from 'src/app/core/models/uploaded_file';

export interface Page {
  id: number;
  slug: string;
  title: string;
  content: string;
  page_group_id: number;
  created_at: string;
  updated_at: string;
  files: UploadedFile[];
}
