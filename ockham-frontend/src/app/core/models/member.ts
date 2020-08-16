import { Role } from 'src/app/core/models/role';
import { StudyProgram } from 'src/app/core/models/study_program';
import { Committee } from 'src/app/core/models/committee';
import { ColumnValue } from 'src/app/core/models/column';
import { Contribution } from 'src/app/core/models/contribution';

export interface BankAccount {
  authorization_contribution: boolean;
  authorization_other: boolean;
  debtor_name: string;
  iban: string;
  bic?: string;
}

export interface Student {
  study_program: StudyProgram;
  batch_bhp?: number;
  batch_mhp?: number;
  student_number: string;
}

export interface Teacher {
  department: string;
  employee_number: string;
}

export interface FlexibleColumnValue {
  value: any;
  column_id: number;
}

export interface MemberContribution {
  contribution: Contribution;
  member_id: number;
  payment_method: string;
  created_at: string;
  updated_at: string;
}

export interface Member {
  id: number;
  email: string;
  role: Role;
  last_name: string;
  insertion?: string;
  first_name: string;
  initials: string;
  address?: string;
  zip_code?: string;
  residence?: string;
  country?: string;
  phone_number?: string;
  date_of_membership: string;
  remark?: string;
  photos_allowed: boolean;
  created_at: string;
  updated_at: string;
  committees?: Committee[];
  bank_account?: BankAccount;
  memberable_type: string;
  memberable: any;
  flexible_columns: ColumnValue[];
  archived_at: string;
}
