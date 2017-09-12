

var StampCollection = function(stamps) {

 this.stamps = stamps

}

StampCollection.prototype.stampNamed = function(stamp_name){
  // for (var i = 0; i <= this.stamps.length; i++){
  //     if (this.stamps[i].name == stamp_name){
  //       return this.stamps[i]
  //     }
  // }
  return this.stamps.find(stamp => stamp.name==stamp_name)
}


StampCollection.prototype.stampsIssued = function(stamp_issued){
  return this.stamps.filter(stamp => stamp.issueDate==stamp_issued)
}

StampCollection.prototype.value = function(){
  return this.stamps.reduce((sum,value) => sum + value.maximumAppraisal(), 0)
}
