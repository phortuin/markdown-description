const removeMarkdown = require('remove-markdown')

const markdownDescription = markdown => {
	if (typeof markdown === 'string' && markdown.length > 0) {
		let matches = markdown.match(/^[^#\s].{1,160}(?=(?:\s|$))/gm)
		if (matches && matches.length) {
	    	return removeMarkdown(matches.shift())
		}
	}
	return
}

module.exports = markdownDescription
