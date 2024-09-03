sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit: function () {

        },
        triggerNotification: async function () {
            // v4 approach
            let oModel = this.getView().getModel("v4");
            let oFunctionContext = oModel.bindContext("/triggerNotification(...)");

            await oFunctionContext.execute().catch(function (oErr) {
                sap.m.MessageBox.error(oErr.toString());
            });
        }
    });
});
