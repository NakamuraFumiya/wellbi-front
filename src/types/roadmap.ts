export type Roadmap = {
  ID: number;
  Message: ElementNode[];
}

interface ElementNode {
  children: TextNode[];
  direction?: string;
  format?: string;
  indent?: number;
  type?: string;
  version?: number;
}

interface TextNode {
  [key: string]: [value: string | number];
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