sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("z012.parceiros.controller.Parceiro", {
      onInit: function () {
        //Acessar rota de detalhe routeParceiro do manifest.json
        // @ts-ignore
        let oRouter = this.getOwnerComponent().getRouter();

        let oRotaDesejada = oRouter.getRoute("RouteParceiro");
        oRotaDesejada.attachPatternMatched(this.rotaDetalhe, this);

        //Gera modelo para controlar a edição dos campos imput
        let oModel = new JSONModel();
        //Declara uma propriedade "habilitado e marca como false"
        oModel.setProperty("/habilitado", false);
        //Seta o modelo na View
        this.getView().setModel(oModel, "editavel");


        //Gera modelo para controlar a edição dos campos imput
        let oModelBotao = new JSONModel();
        //Declara uma propriedade "habilitado e marca como false"
        oModelBotao.setProperty("/edicao", false);
        oModelBotao.setProperty("/visualizacao", true);
        //Seta o modelo na View
        this.getView().setModel(oModelBotao, "visibilidade");

      },

      rotaDetalhe: function (oEvent) {
        //Acessa o id na URL
        let sId = oEvent.getParameter("arguments").PartnerId;

        //acessa o modelo
        let oModel = this.getOwnerComponent().getModel();

        //Cria  caminho com o ID que foi encontrado na url
        // @ts-ignore
        let sCaminho = oModel.createKey("/Parceiros", {
          PartnerId: sId,
        });

        //faz o get no modelo com o caminho e associa na view para termos acesso as propriedades
        this.getView().bindElement(sCaminho);
      },
      aoEditar: function (oEvent) {
        this._configuraEdicao(true);
        this._configuraVisibilidade(true, false)
      },
      _configuraEdicao: function (bValor) {
        //Resgatar o modelo
        let oModel = this.getView().getModel("editavel");

        //passar o valor desejado para a propriedade "habilitado"
        oModel.setProperty("/habilitado", bValor);
      },
      _configuraVisibilidade: function (bEdicao, bVisuliazacao) {
        //Resgatar o modelo
        let oModel = this.getView().getModel("visibilidade");

        //passar o valor desejado para a propriedade "habilitado"
        oModel.setProperty("/edicao", bEdicao);
        oModel.setProperty("/visualizacao", bVisuliazacao);
      }
      
    });
  }
);
