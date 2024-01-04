/*global QUnit*/

sap.ui.define([
	"z012/parceiros/controller/ListaBPs.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListaBPs Controller");

	QUnit.test("I should test the ListaBPs controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
