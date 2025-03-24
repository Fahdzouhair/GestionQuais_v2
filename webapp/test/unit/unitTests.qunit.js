/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"sd17_app_quais_v2/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});