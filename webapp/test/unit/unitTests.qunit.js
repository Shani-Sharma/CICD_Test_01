/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cg/coe/piperapp/test/unit/AllTests"
	], function () {
		debugger
		var unit = QUnit.start();

		console.log(unit);
	});
});
