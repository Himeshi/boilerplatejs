define(['require', 'Boiler', 'text!./view.html'], function(require, Boiler, template) {

	var RouteHandler = function(moduleContext) {
		var panel = null;
		return {
			activate : function(parent) {
				panel = new Boiler.ViewTemplate(parent, template, null);
				Boiler.ViewTemplate.setStyleLink("languageStylesheet", require.toUrl('./style.css'));
				
				$('#langEn').click(function (event) { 
					moduleContext.setLanguage("en");
				});
				
				$('#langSv').click(function (event) { 
					moduleContext.setLanguage("sv");
				});

				$('#clearLang').click(function (event) { 
					moduleContext.clearLanguage();
				});
			},
			
			deactivate : function(){
				if(panel) {
					panel.remove();
				}
			}
		};
	};

	return RouteHandler;

});