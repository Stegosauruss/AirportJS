function Airport(){
  this._hangar = []
};

Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()){
    throw new Error('Cannot land: weather is stormy');
}
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error('Cannot take off: weather is stormy')
  }
  this._hangar = [];
};

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.isStormy = function(){ 
  return false;
};