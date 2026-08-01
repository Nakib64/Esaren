declare module 'split-type' {
  export interface SplitTypeOptions {
    absolute?: boolean;
    by?: 'lines' | 'words' | 'chars' | string;
    types?: 'lines' | 'words' | 'chars' | string;
    lineClass?: string;
    wordClass?: string;
    charClass?: string;
    splitClass?: string;
    tagName?: string;
  }

  export default class SplitType {
    constructor(target: string | Element | NodeList | Element[], options?: SplitTypeOptions);
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    split(options?: SplitTypeOptions): void;
    revert(): void;
  }
}
