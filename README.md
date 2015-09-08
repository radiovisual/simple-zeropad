# simple-zeropad [![Build Status](https://travis-ci.org/radiovisual/zeropad.svg)](https://travis-ci.org/radiovisual/zeropad)
> Zeropad your positive integers.

![simple-zeropad is amazing](http://i43.tinypic.com/2u9r5hu.jpg)

## Install

```sh
$ npm install simple-zeropad
```

## Usage
```js
var zeropad = require('simple-zeropad');

zeropad(9);
// => '09'

zeropad(0);
// => '00'

zeropad(10);
// => '10'

```
*Amazing, right?*

## Motivation

This is an incredibly simple module, but I have lost count over the years how many times I have written a function to
zeropad my numbers for various user-interface purposes, so the motivation to build this module is one of pure principle, 
posterity, and module-fever. Please enjoy this module and the 20 seconds of blood, sweat and tears I poured into this. 

## License

MIT @ [Michael Wuergler](http://numetriclabs.com)
