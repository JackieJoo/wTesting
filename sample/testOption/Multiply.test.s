
let _ = require( 'wTesting' );
let Mul = require( './Multiply.js' );

//

function routine1( test )
{
  test.equivalent( Mul.mul( 1, 2 ), 2 );
  test.equivalent( Mul.mul( 1, -2 ), -2 );
  test.shouldThrowError( () => Mul.mul( a, 1 ) );
}
routine1.timeOut = 200

//

var Self =
{
  name : 'Multiply',
  tests :
  {
    routine1,
  }
}

//

Self = wTestSuite( Self );
if( typeof module !== 'undefined' && !module.parent )
wTester.test( Self.name );
