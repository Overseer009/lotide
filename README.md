# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @overseer009/lotide`

**Require it:**

`const _ = require('@overseer009/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

'assertArraysEqual' :  Tells if an array is equal to expected
'assertEqual' :        Tells if a value is equal to expected
'assertObjectsEqual' : Tells if an object is equal to expected
'countLetters' :       Counts the number of letters in a string
'countOnly' :          Counts the number of elements in an array
'eqArrays' :           Checks in two arrays are equal
'eqObjects' :          Checks if two objects are qual
'findKey' :            Helps locate keys in objects
'findKeyByValue' :     Helps locate keys in objects
'head' :               Pulls the first element of an array
'letterPosition' :     Gives index location of characters in string
'map' :                Uses callback to modify array
'middle' :             Pulls the middle of an array
'tail' :               Pulls the end of an array
'takeUntil' :          takes elements from array until callback reason
'without' :            removes specific element in array
'flatten' :            removes a single layer of a nested array
