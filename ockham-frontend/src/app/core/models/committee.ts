import { ColumnValue } from 'src/app/core/models/column';

export interface Committee {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    memberships: any[];
    flexible_columns: ColumnValue[];
}
