export enum Order {
  desc = 'desc',
  esc = 'asc',
}

export enum Filter {
  date = 'date',
  view = 'view',
  word = 'word',
  default = 'default',
}

export interface IFilterData {
  order?: Order;
  filterType: Filter;
  filterWord?: string;
}
