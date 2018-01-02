/**
* Creating a IIFE for safe code
* that supports global
* and jquery
*/


(function(global,$){

	var G$ = function(firstname, lastname, language) {
		return new G$.init(firstname, lastname, language);
	}

	G$.prototype = {
		hello : function() {
			console.log(this);
		}
	};

	G$.init = function(firstname, lastname, language){
		this.firstname = firstname || 'Default';
		this.lastname =lastname || 'Default';
		this.language = language || 'en';
	}

	G$.init.prototype = G$.prototype;


	global.G$ = G$;


})(window !== "undefined" ? window : this , jQuery);