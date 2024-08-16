export interface ByValueFilterProps {
  onChange: (value: string) => void;
  isEnterNecessary?: boolean;
  classNames?: ByValueClassNames;
}

export interface ByValueClassNames {
  root?: string;
  input?: string;
}
