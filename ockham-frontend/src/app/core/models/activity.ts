import { Committee } from 'src/app/core/models/committee';
import { Member } from 'src/app/core/models/member';
import { ColumnType } from 'src/app/core/models/column-type';
import { ColumnValue } from 'src/app/core/models/column';
import { UploadedFile } from 'src/app/core/models/uploaded_file';

export interface ActivityOption {
  id: number;
  question: string;
  type: ColumnType;
  required: boolean;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  start_date: string;
  end_date: string;
  registration_closes: string;
  registration_opens: string;
  location: string;
  price_cents: number;
  created_at: string;
  updated_at: string;
  options: ActivityOption[];
  committee: Committee;
  flexible_columns: ColumnValue[];
  files: UploadedFile[];
}

export interface OptionAnswer {
    option_id: number;
    question: string;
    answer: string;
    required: boolean;
    created_at: string;
    updated_at: string;
    type: ColumnType;
}

export interface ActivityRegistration {
    id: number;
    paid: boolean;
    notes: string,
    created_at: string;
    updated_at: string;
    member: Member;
    answers: OptionAnswer[];
}
