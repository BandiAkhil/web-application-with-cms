import { Page } from 'src/app/core/models/page';

export interface PageGroup {
  id: number;
  name: string;
  pages: Page[];
}
