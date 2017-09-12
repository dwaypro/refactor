
var Stamp = function(args){
  this.name            = args.name;
  this.issueDate       = args.issueDate;
  this.appraisalValues = args.appraisalValues;
}

Stamp.prototype.averageAppraisal = function(){
  return this.appraisalValues.reduce((sum, value) => sum + value)/this.appraisalValues.length
}

Stamp.prototype.maximumAppraisal = function(){
  return Math.max(...this.appraisalValues)
}
