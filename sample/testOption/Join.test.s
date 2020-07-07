let _ = require( 'wTesting' );
let Join = require( './Join.js' );

//

function routine1( test )
{
  test.case = 'pass';
  test.identical( Join.join( 'Hello ', 'world!' ), 'Hello world!' );
  test.identical( Join.join( 1, 2 ), '12' );

  test.case = 'fail';
  test.identical( Join.join( 1, 3 ), 13 );

}

//

var Self =
{
  name : 'Join',
  tests :
  {
    routine1,
  }
}

//

Self = wTestSuite( Self );
if( typeof module !== 'undefined' && !module.parent )
wTester.test( Self.name );