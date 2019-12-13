
require( 'wTesting' );
require( 'wConsequence' )
        
var _ = _realGlobal_.wTools

//

function asyncErrorHandling( test )
{
  _.Consequence.UnhandledTimeOut = 1;
  
  let con = new _.Consequence().take( null )
  
  /* 
    In first case error is handled right after creation and tester has time to perform the check.
    This case can be commented out.
  */
  
  .then( () => 
  {
    test.case = 'catch handler before test check'
    let ready = new _.Consequence().error( 'Test' );
    ready.catch( ( err ) => 
    {
      _.errAttend( err )
      throw err;
    })
    return test.shouldThrowErrorOfAnyKind( ready );
  })
  
  /* 
    In second case error is not handled right after creation and 
    unhandled async error is thrown before tester perform the check
    This case doesn't work as expected.
  */
  
  .then( () => 
  { 
    test.case = 'no catch handler before test check'
    let ready = new _.Consequence().error( 'Test' );
    return test.shouldThrowErrorAsync( ready );
  })
  
  /*  */
  
  return con;
}


//

var Self =
{
  name : 'AsyncErrorHandling',
  tests :
  {
    asyncErrorHandling
  }
}

//

Self = wTestSuite( Self );
if( typeof module !== 'undefined' && !module.parent )
wTester.test( Self.name );