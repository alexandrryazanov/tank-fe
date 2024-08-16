export interface ByRangeFilterProps {
  onChange: (range: {
    min: number | undefined;
    max: number | undefined;
  }) => void;
  isEnterNecessary?: boolean;
  min?: number;
  max?: number;
  classNames?: ByRangeClassNames;
}

export interface InputsState {
  min: string;
  max: string;
}

export interface ByRangeClassNames {
  root?: string;
  inputs?: {
    min?: string;
    max?: string;
  };
}
