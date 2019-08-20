describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane'), ['land'];
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for take off', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  it('planes cannot take off while it is stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.clearForTakeOff(plane);}).toThrowError('Cannot take off: weather is stormy')
  });

  it('planes cannot land while it is stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.clearForLanding(plane);}).toThrowError('Cannot land: weather is stormy')
  });
});