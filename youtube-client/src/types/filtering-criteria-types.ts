export enum Order {
  Desc = 'desc',
  Asc = 'asc',
}

export enum Filter {
  Date = 'date',
  View = 'view',
  Word = 'word',
  Default = 'default',
}

export interface IFilterData {
  order?: Order;
  filterType: Filter;
  filterWord?: string;
}
