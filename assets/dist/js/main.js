var App = function(){
	this.is_mobile = false;
	this.helpers = {
		clickHandler: function(e){
			var button = e.target;
			while (!button.hasAttribute('data-dialog') && button !== document.body) {
				button = button.parentElement;
			}

			if (!button.hasAttribute('data-dialog')) {
				return;
			}

			var id = button.getAttribute('data-dialog');
			var dialog = document.getElementById(id);
			if (dialog) {
				dialog.open();
			}	
		},
	};

};

var app = new App();