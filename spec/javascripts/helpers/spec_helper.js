beforeEach(function() {
	var dataName = "jagger";

	this.initializeTestSuite = function() {
		loadFixtures("jagger_fixture.html");
		this.setElement(".taggeable-container");

		spyOn(jQuery.fn, "jagger").andCallThrough();
	};

	this.setElement = function(selector) {
		this.$el = $(selector);
	};

	this.getInstance = function() {
		return this.$el.data(dataName);
	};

	this.callJaggerWith = function(options) {
		// Remove the previous plugin if it exists
		if(this.getInstance()) {
			this.$el.jagger("remove");	
		}
		return this.$el.jagger(options);
	};

	this.callJaggerAndGetInstance = function(options) {
		this.callJaggerWith(options);
		return this.getInstance();
	};

	this.getTemplateContainer = function() {
		return this.$el.children(".jagger-template-container");
	};

	this.getPinElement = function(element) {
		jagger = this.callJaggerAndGetInstance({
			pinElement: element
		});
		return jagger.getPin();
	};

});
