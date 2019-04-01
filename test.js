const test = require('tape')
const markdownDescription = require('./')

let noDescription = `
# Title only baby
`

let withTitle = `
# Markdown rawks

Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.

Dandelion cucumber earthnut pea peanut soko zucchini.
`

let noTitle = `
Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.

Dandelion cucumber earthnut pea peanut soko zucchini.
`

let withBlockquote = `
# I like my title

> My battery is low and it’s getting dark
`

let withList = `
# I like my title

- My battery is low and it’s getting dark
- Dyin’ ain’t much of a living, boy
`

let withOrderedList = `
# I like my title

1. My battery is low and it’s getting dark
2. Dyin’ ain’t much of a living, boy
`

let withH2 = `
# I am skipped

## I am equally skipped

I am the description
`

let manyParagraphs = `
# I am skipped

For formatting purposes
I use line breaks.
But the description should be this whole text
`

test('Get markdown description', t => {
	t.plan(9)
	t.error(markdownDescription())
	t.error(markdownDescription(10))
	t.error(markdownDescription(noDescription))
	t.equals(markdownDescription(withTitle), 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn')
	t.equals(markdownDescription(noTitle), 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn')
	t.equals(markdownDescription(withBlockquote), 'My battery is low and it’s getting dark')
	t.equals(markdownDescription(withList), 'My battery is low and it’s getting dark')
	t.equals(markdownDescription(withOrderedList), 'My battery is low and it’s getting dark')
	t.equals(markdownDescription(withH2), 'I am the description')
})

test('Get markdown description with concatenated lines', t => {
	t.plan(3)
	t.equals(markdownDescription(manyParagraphs, { concatLines: true }), 'For formatting purposes I use line breaks. But the description should be this whole text')
	t.equals(markdownDescription(withList, { concatLines: true }), 'My battery is low and it’s getting dark Dyin’ ain’t much of a living, boy')
	t.equals(markdownDescription(withH2, { concatLines: true }), 'I am the description')
})
