/**
* Creating a IIFE for safe code
* that supports global
* and jquery
*/


;(function(global,$){

	var G$ = function(firstname, lastname, language) {
		return new G$.init(firstname, lastname, language);
	}

	var
		supportedLanguage = ['en','es'],

		greeting = {
			en : 'Hello',
			es : 'Hola'
		},

		formalGreeting = {
			en : 'Greeting',
			es : 'Salulas'
		},
		logMessages = {
			en : 'Logged in',
			es : 'Iniciar sesión'
		};



	G$.prototype = {

		fullName : function() {
			return this.firstname +' '+ this.lastname;
		},

		validate : function() {
			if(supportedLanguage.indexOf(this.language) === -1) {
				 throw "Invalid Language"; 
			}
		},

		greeting: function() {
			return greeting[this.language] +' '+ this.fullName();
		},

		formalGreeting : function() {
			return formalGreeting[this.language] +' '+ this.fullName();
		},

		greet : function(formal) {
			var msg = formal ? this.formalGreeting() : this.greeting();
			if(console) {
				console.log(msg);
			}


			// 'this' is refers to the calling object at execution context
			// makes the methods chainable
			return this;
		},

		setLang: function(lang) {
			this.language = lang;
			this.validate();
			return this;
		},

		htmlSelector: function(selector,formal) {
			if(!$) {
				throw "jQuery is missing";
			}
			if(!selector) {
				throw "jQuery selector is missing";
			}

			var msg = formal ? this.formalGreeting() : this.greeting();

			$(selector).html(msg);

			return this;

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