'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to take off from an airport', function(){
    plane.land(airport);
    plane.takeOff()
    expect(airport.planes()).not.toContain(plane);
  });

  it('planes cannot take off while it is stormy', function(){
    plane.land(airport);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){plane.takeOff();}).toThrowError('Cannot take off: weather is stormy')
    expect(airport.planes()).toContain(plane);
  });

  it('planes cannot land while it is stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){plane.land(airport);}).toThrowError('Cannot land: weather is stormy')
    expect(airport.planes()).not.toContain(plane);
  });
});