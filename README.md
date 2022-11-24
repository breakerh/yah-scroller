# YAH-Scroller

[![NPM version][npm-image]][npm-url]
![npm-typescript]
[![License][github-license]][github-license-url]

Yet another horizontal scroller for React.
A simple and lightweight component that allows you to scroll horizontally through a list of items on both mobile and desktop with a small 'stretch' effect.

[**Live Demo ( coming soon )**](#)

![Example](https://user-images.githubusercontent.com/2008632/203681973-8d46a86c-88f4-4691-84db-63571581f74a.gif)


## Installation:

```bash
npm install yah-scroller --save-dev
```

or

```bash
yarn add -D yah-scroller
```

## Usage :

Add `yah-scroller` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { YahScroller } from 'yah-scroller'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Simple scroller</h2>
            <YahScroller className="horizontal-scroll">
                <div key={'c1'} className={'category'}>Category 1</div>
                <div key={'c2'} className={'category'}>Category 2</div>
                <div key={'c3'} className={'category'}>Category 3</div>
                <div key={'c4'} className={'category'}>Category 4</div>
                <div key={'c5'} className={'category'}>Category 5</div>
                <div key={'c6'} className={'category'}>Category 6</div>
            </YahScroller>
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/yah-scroller
[npm-image]: https://img.shields.io/npm/v/yah-scroller
[github-license]: https://img.shields.io/github/license/breakerh/yah-scroller
[github-license-url]: https://github.com/breakerh/yah-scroller/blob/master/LICENSE
[npm-typescript]: https://img.shields.io/npm/types/yah-scroller
