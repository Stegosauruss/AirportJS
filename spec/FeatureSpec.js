'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

  describe('under normal weather conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0)
    })

    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to take off from an airport', function(){
      plane.land(airport);
      plane.takeOff();
      expect(airport.planes()).not.toContain(plane);
    });
  })

  describe('under stormy weather conditions', function(){
    
    it('planes cannot take off while it is stormy', function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){plane.takeOff();}).toThrowError('Cannot take off: weather is stormy')
      expect(airport.planes()).toContain(plane);
    });
  
    it('planes cannot land while it is stormy', function(){
      spyOn(Math, 'random').and.returnValue(1)
      expect(function(){plane.land(airport);}).toThrowError('Cannot land: weather is stormy')
      expect(airport.planes()).not.toContain(plane);
    });
  });
});
