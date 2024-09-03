//@ui5-bundle project2/Component-preload.js
sap.ui.require.preload({
	"project2/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","project2/model/models"],function(e,t,i){"use strict";return e.extend("project2.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"project2/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("project2.controller.App",{onInit:function(){}})});
},
	"project2/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("project2.controller.View1",{onInit:function(){},triggerNotification:async function(){let t=this.getView().getModel("v4");let e=t.bindContext("/triggerNotification(...)");await e.execute().catch(function(t){sap.m.MessageBox.error(t.toString())})}})});
},
	"project2/i18n/i18n.properties":'# This is the resource bundle for project2\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title\n\n#XFLD,57\nflpTitle=Notification Plugin\n',
	"project2/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"project2","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.3","toolsId":"0ce6b4b2-a4ce-49d8-a1f7-5135595a8532"},"dataSources":{"mainService":{"uri":"odata/v4/requests/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}},"mainServiceV2":{"uri":"odata/v2/requests/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"2.0"}}},"crossNavigation":{"inbounds":{"znotificationplugin-manage":{"semanticObject":"znotificationplugin","action":"manage","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.127.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project2.i18n.i18n"}},"v4":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"v2":{"dataSource":"mainServiceV2","type":"sap.ui.model.odata.v2.ODataModel","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"project2.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"project2.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"znotificationplugin"}}',
	"project2/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"project2/view/App.view.xml":'<mvc:View controllerName="project2.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"project2/view/View1.view.xml":'<mvc:View controllerName="project2.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><Button\n                id="notificationTrigger"\n                text="Trigger Notification"\n                press="triggerNotification"\n            /></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
