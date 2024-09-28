const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://blog.boot./path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot./path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://blog.boot./path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot./path'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot./path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot./path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
    const input = 'http://blog.boot./path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot./path'
    expect(actual).toEqual(expected)
})