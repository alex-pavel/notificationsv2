sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit: function () {

        },

        triggerNotification: async function () {
            let oModel = this.getView().getModel();
            let oFunctionContext = oModel.bindContext("/triggerNotification(...)");

            await oFunctionContext.execute().catch(function (oErr) {
                sap.m.MessageBox.error(oErr.toString());
            });
        }
    });
});
