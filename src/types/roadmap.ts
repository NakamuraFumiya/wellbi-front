// TODO: Responseがここにあるのは違和感だが一旦はよしとする
export type RoadmapResponse = {
  ID: number;
  Title: string;
  Message: string;
  ImageURL: string;
}

export type Roadmap = {
  ID: number;
  Title: string;
  Message: ElementNode[];
  ImageURL: string;
}

export type ElementNode = {
  children: TextNode[];
  direction: string;
  format: string;
  indent: number;
  type: string;
  version: number;
  tag?: string;
}

export type TextNode = {
  detail?: number;
  format?: number;
  mode?: string;
  style?: string;
  text?: string;
  type?: string;
  version?: number;
}
