'use strict';
/*我们的转换器叫做"checkmark"，输入的值为trur或false。
返回结果是unicode字符：true (\u2713 -> ✓) 或者false (\u2718 -> ✘)。*/
angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });

angular.
  module('core').
  filter('checkmark',function(){
  	return function(input){
        return input ? '\u2713' : '\u2718';
  	};
  });
