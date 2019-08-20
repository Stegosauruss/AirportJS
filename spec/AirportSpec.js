describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane'), ['land'];
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal weather conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false)
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
  
  })

  describe('under stormy weather conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true)
    });

    it('planes cannot take off', function(){
      expect(function(){airport.clearForTakeOff(plane);}).toThrowError('Cannot take off: weather is stormy')
    });

    it('planes cannot land', function(){
      expect(function(){airport.clearForLanding(plane);}).toThrowError('Cannot land: weather is stormy')
    });
  })




  // it('can check for stormy conditions', function(){
  //   expect(airport.isStormy()).toBeFalsy();
  // });




});