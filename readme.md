# markdown-description [![Build Status](https://travis-ci.org/phortuin/markdown-description.svg?branch=master)](https://travis-ci.org/phortuin/markdown-description)

> Parses description from Markdown-formatted text

## Install

```bash
$ npm install markdown-description
```

## Usage

```javascript
const markdownDescription = require('markdown-description')

let markdown = `
# Title

The first paragraph is the [description](https://example.com).

This paragraph is here for decorative purposes only. 👋
`

let description = markdownDescription(markdown) //=> The first paragraph is the description.
```

## Notes
- Maximum length of the description is 160 characters; this is generally agreed upon to be the maximum visible amount of characters on a Google SERP. The description will be cut off on the latest possible space character within that range.
- Lines starting with one or more spaces are skipped.
- A heading (one or more pound `#` marks at the start of the line) is skipped.
- Markdown formatting is stripped, paragraphs are not concatenated.

## License
[MIT](license) © [Anne Fortuin](https://phortuin.nl/)
