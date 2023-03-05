// TODO: Responseがここにあるのは違和感だが一旦はよしとする
export type RoadmapResponse = {
  ID: number;
  Title: string;
  Message: string;
}

export type Roadmap = {
  ID: number;
  Title: string;
  Message: ElementNode[];
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

//
// [
//   {
//     "children": [
//       {
//         "detail": 0,
//         "format": 0,
//         "mode": "normal",
//         "style": "",
//         "text": "やああ",
//         "type": "text",
//         "version": 1
//       }
//     ],
//     "direction": "ltr",
//     "format": "",
//     "indent": 0,
//     "type": "paragraph",
//     "version": 1
//   },
//   {
//     "children": [
//       {
//         "detail": 0,
//         "format": 0,
//         "mode": "normal",
//         "style": "",
//         "text": "いいね",
//         "type": "text",
//         "version": 1
//       }
//     ],
//     "direction": "ltr",
//     "format": "",
//     "indent": 0,
//     "type": "paragraph",
//     "version": 1
//   },
//   {
//     "children": [],
//     "direction": null,
//     "format": "",
//     "indent": 0,
//     "type": "paragraph",
//     "version": 1
//   },
//   {
//     "children": [
//       {
//         "detail": 0,
//         "format": 0,
//         "mode": "normal",
//         "style": "",
//         "text": "行こう",
//         "type": "text",
//         "version": 1
//       }
//     ],
//     "direction": "ltr",
//     "format": "",
//     "indent": 0,
//     "type": "paragraph",
//     "version": 1
//   }
// ]