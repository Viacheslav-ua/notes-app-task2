export interface INote {
  id: string;
  name: string;
  created: string;
  category: string;
  categoryKey: string;
  content: string;
  dates: string[];
  isArchive: boolean;
  isEdit: boolean;
  isNew: boolean;
}