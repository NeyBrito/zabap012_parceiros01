sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("z012.parceiros.controller.ListaBPs",{onInit:function(){},onPress:function(e){let t=e.getSource();let n=t.getBindingContext();let r=n.getObject();let o=r.PartnerId;let i=this.getOwnerComponent().getRouter();i.navTo("RouteParceiro",{PartnerId:o})}})});
//# sourceMappingURL=ListaBPs.controller.js.map