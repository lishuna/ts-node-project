
export type IFormItemType =
| 'DIVIDER'
| 'INPUT'
| 'TEXT_AREA'
| 'RANGE_INPUT'
| 'INPUT_NUMBER'
| 'RANGE_INPUT_NUMBER'
| 'CHECKBOX'
| 'MULTIPLE_CHECKBOX'
| 'RADIO'
| 'SWITCH'
| 'DATE'
| 'RANGE_DATE'
| 'TIME'
| 'RANGE_TIME'
| 'SELECT'
| 'MULTIPLE_SELECT'
| 'IMMEDIATE'
| 'SEARCH_HELPER'
| 'MULTIPLE_SEARCH_HELPER'
| 'TREE_SELECT'
| 'MULTIPLE_TREE_SELECT'
| 'CASCADER'
| 'MULTIPLE_CASCADER'
| 'CITY_SELECT'
| 'REGION_SELECT'
| 'UPLOAD_FILE'
| 'UPLOAD_IMG'
| 'TINYMCE';

export type IFormItem = {
  type: IFormItemType;
  fieldName: string;
  label?: string | IFormItem;
  tooltip?: string;
  labelWidth?: number | string;
  hidden?: boolean; // 隐藏字段
  noAuth?: boolean; // 权限控制
  invisible?: boolean; // 隐藏字段，依旧会 占位 并 保留字段值
  rules?: Record<string, any>[];
  selfCol?: number;
  offsetLeft?: number;
  offsetRight?: number;
  style?: CSSProperties;
  className?: string;
  placeholder?: string;
  bordered?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
  readOnly?: boolean;
  options?: {
    // select + checkbox-group + radio
    itemList?: IDict[];
    // input
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    maxLength?: number;
    toUpper?: boolean;
    secretType?: ISecretType;
    // input-number
    step?: number;
    min?: number;
    max?: number;
    controls?: boolean;
    precision?: number;
    formatter?: (value: number | string) => string;
    parser?: (value: string) => string | number;
    // checkbox + switch
    falseValue?: string | number;
    trueValue?: string | number;
    // textarea
    showCount?: boolean;
    autoSize?: {
      minRows?: number;
      maxRows?: number;
    };
    // date
    dateType?: IDateType;
    minDateTime?: string;
    maxDateTime?: string;
    disableds?: [boolean, boolean];
    // time
    timeType?: ITimeType;
    hourStep?: number;
    minuteStep?: number;
    secondStep?: number;
    // select
    filterable?: boolean;
    collapseTags?: boolean;
    maxTagTextLength?: number;
    openPyt?: boolean;
    // immediate
    hideHeader?: boolean;
    onlySelect?: boolean;
    columns?: IColumn[];
    fieldAliasMap?: (() => Record<string, string>) | Record<string, string>;
    extraAliasMap?: (() => Record<string, string>) | Record<string, string>;
    // upload-file + upload-img
    multiple?: boolean;
    maxCount?: number;
    fileTypes?: string[]; // 未实现
    fileSize?: number; // 未实现
    onRemove?: (file: any) => void;
    // upload-img
    fixedSize?: [number, number] | undefined;
    quality?: number;
    // tinymce
    tinymceHeight?: number | string;
  };
  searchHelper?: {
    filters?: IFormItem[];
    table?: {
      fetch?: IFetch;
      columns?: IColumn[];
      rowKey?: ((row: IRecord, index: number) => IRowKey) | IRowKey;
      webPagination?: boolean;
    };
    width?: number | string;
    initialValue?: IFormData;
    closeRemoteMatch?: boolean;
    fieldAliasMap?: (() => Record<string, string>) | Record<string, string>;
    extraAliasMap?: (() => Record<string, string>) | Record<string, string>;
    filterAliasMap?: (() => string[]) | string[];
    beforeOpen?: (formData: IFormData) => void | Promise<void> | boolean;
    closed?: (rowData: Record<string, any>) => void;
  };
  request?: {
    fetchApi?: IFetchFn;
    params?: IFetchParams;
    dataKey?: string;
    valueKey?: string;
    textKey?: string;
  };
  upload?: {
    action?: string;
    headers?: IFetchHeader;
    withCredentials?: boolean;
    params?: IFetchParams;
    dataKey?: string;
  };
  extra?: {
    style?: CSSProperties;
    labelWidth?: number | string;
    isTooltip?: boolean;
  };
  collapse?: {
    defaultExpand?: boolean;
    showLimit?: number;
    remarkItems?: Array<{
      fieldName: string;
      showLabel?: boolean;
    }>;
    onCollapse?: (collapse: boolean) => void;
  };
  render?: (options: IFormItem, instance: any) => JSXElement;
  onChange?: (value: ValueOf<IFormData> | boolean, others?: string | Nullable<IFormData>) => void;
  onBlur?: (value: ValueOf<IFormData>) => void;
  onEnter?: (value: ValueOf<IFormData>) => void;
};

export type IPraseContent = {
  template: string,
  js: string,
  importContent: string
}
