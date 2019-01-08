export class FilterModel {
  filter_name = '';
  filter_type = '';
  filter_range_from = '';
  filter_range_to = '';

  constructor(filter_name: string, filter_type: string, filter_range_from, filter_range_to) {
    this.filter_name = filter_name;
    this.filter_type = filter_type;
    this.filter_range_from = filter_range_from;
    this.filter_range_to = filter_range_to;
  }
}
