sap.ui.define(
  ["sap/ui/core/mvc/Controller", 
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,
	JSONModel,
	MessageToast,
    MessageBox) {
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

        //Habilitar alterações pelo usuario
        // @ts-ignore
        this.getOwnerComponent().getModel().sDefaultBindingMode = "TwoWay";

      },

      rotaDetalhe: function (oEvent) {

        //Acessa o id na URL
        // @ts-ignore
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
      // @ts-ignore
      aoEditar: function (oEvent) {
        this._configuraEdicao(true);
        this._configuraVisibilidade(true, false);
      },

      // @ts-ignore
      aoSalvar: function(oEvent) {
        //Pega os valores da tela
        let oObj = this.getView().getBindingContext().getObject();
        //pega caminho
        let sCaminho = this.getView().getBindingContext().getPath();
        
        //Pegar modelo global
        let oModel = this.getOwnerComponent().getModel();

        let oNovasInformacoes = {
            // @ts-ignore
            City: oObj.City,
            // @ts-ignore
            Country: oObj.Country,
            // @ts-ignore
            District: oObj.District,
            // @ts-ignore
            HouseNumber: oObj.HoseNumber,
            // @ts-ignore
            PartnerName1: oObj.PartnerName1,
            // @ts-ignore
            PartberName2: oObj.PartberName2,
            // @ts-ignore
            Region: oObj.Region,
            // @ts-ignore
            SearchTerm1: oObj.SearchTerm1,
            // @ts-ignore
            SearchTerm2: oObj.SearchTerm2,
            // @ts-ignore
            Street: oObj.Street
        };

        //Habilita chamadas update e creates
        // @ts-ignore
        oModel.setHeaders({'X-Requested-With': 'X'});
        
        // @ts-ignore
        oModel.update(sCaminho, oNovasInformacoes, {
            // @ts-ignore
            success: (oResult) => {

            },
            
            error: (oError) => {
                // MessageToast.show(JSON.parse(oError.responseText).error.innererror.errordetails[0].message);
                MessageBox.error(JSON.parse(oError.responseText).error.innererror.errordetails[0].message);
                // @ts-ignore
                
            }
        });

      },

      //FUNÇÕES INTERNAS
      _configuraEdicao: function (bValor) {
        //Resgatar o modelo
        let oModel = this.getView().getModel("editavel");

        //passar o valor desejado para a propriedade "habilitado"
        // @ts-ignore
        oModel.setProperty("/habilitado", bValor);
      },
      _configuraVisibilidade: function (bEdicao, bVisuliazacao) {
        //Resgatar o modelo
        let oModel = this.getView().getModel("visibilidade");

        //passar o valor desejado para a propriedade "habilitado"
        // @ts-ignore
        oModel.setProperty("/edicao", bEdicao);
        // @ts-ignore
        oModel.setProperty("/visualizacao", bVisuliazacao);
      }
    });
  }
);
