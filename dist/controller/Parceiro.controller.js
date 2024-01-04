sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/m/MessageToast","sap/m/MessageBox"],function(e,t,r,i){"use strict";return e.extend("z012.parceiros.controller.Parceiro",{onInit:function(){let e=this.getOwnerComponent().getRouter();let r=e.getRoute("RouteParceiro");r.attachPatternMatched(this.rotaDetalhe,this);let i=new t;i.setProperty("/habilitado",false);this.getView().setModel(i,"editavel");let a=new t;a.setProperty("/edicao",false);a.setProperty("/visualizacao",true);this.getView().setModel(a,"visibilidade");this.getOwnerComponent().getModel().sDefaultBindingMode="TwoWay"},rotaDetalhe:function(e){let t=e.getParameter("arguments").PartnerId;let r=this.getOwnerComponent().getModel();let i=r.createKey("/Parceiros",{PartnerId:t});this.getView().bindElement(i)},aoEditar:function(e){this._configuraEdicao(true);this._configuraVisibilidade(true,false)},aoSalvar:function(e){let t=this.getView().getBindingContext().getObject();let r=this.getView().getBindingContext().getPath();let a=this.getOwnerComponent().getModel();let o={City:t.City,Country:t.Country,District:t.District,HouseNumber:t.HoseNumber,PartnerName1:t.PartnerName1,PartberName2:t.PartberName2,Region:t.Region,SearchTerm1:t.SearchTerm1,SearchTerm2:t.SearchTerm2,Street:t.Street};a.setHeaders({"X-Requested-With":"X"});a.update(r,o,{success:e=>{},error:e=>{i.error(JSON.parse(e.responseText).error.innererror.errordetails[0].message)}})},_configuraEdicao:function(e){let t=this.getView().getModel("editavel");t.setProperty("/habilitado",e)},_configuraVisibilidade:function(e,t){let r=this.getView().getModel("visibilidade");r.setProperty("/edicao",e);r.setProperty("/visualizacao",t)}})});
//# sourceMappingURL=Parceiro.controller.js.map