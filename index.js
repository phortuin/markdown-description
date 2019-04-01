const removeMarkdown = require('remove-markdown')

const DEFAULTS = {
	concatLines: false
}

const getDescription = (markdown, options) => {
	if (typeof markdown === 'string' && markdown.length > 0) {
		let characterSelector = options.concatLines ? '[\\s\\S]' : '.' // dot doesn’t match newlines; [\s\S] matches anything
		let regex = new RegExp(`^[^#\\s]${characterSelector}{1,160}(?=(?:\\s|$))`, 'gm')
		matches = markdown.match(regex)
		if (matches && matches.length) {
	    	return removeMarkdown(matches.shift()).replace(/\n{1,}/g, ' ').trim()
		}
	}
	return
}

function markdownDescription(markdown, options) {
	options = Object.assign({}, DEFAULTS, options)
	return getDescription(markdown, options)
}

module.exports = markdownDescription
