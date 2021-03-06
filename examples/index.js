'use strict';

var round = require( 'math-round' );
var MAX_UINT16 = require( 'const-max-uint16' );
var binaryString = require( './../lib' );

var x;
var y;
var b;
var i;

// Generate random unsigned 16-bit integers...
x = new Uint16Array( 100 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = round( Math.random()*MAX_UINT16 );
}

// Convert unsigned 16-bit integers to literal bit representations...
for ( i = 0; i < x.length; i++ ) {
	b = binaryString( x[i] );
	y = parseInt( b, 2 );
	console.log( 'x: %d, b: %s, y: %d', x[i], b, y );
}
