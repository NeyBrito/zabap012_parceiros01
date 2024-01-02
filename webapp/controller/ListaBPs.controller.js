sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("z012.parceiros.controller.ListaBPs", {
            onInit: function () {
            },

            onPress: function(oEvent) {
                //resgatar o controle que disparou o evento (Column list item)
                let columnListItem = oEvent.getSource();

                //Acessar o caminho do modelo em que o item que foi clicaco está associado
                //o metodo getBindingContext importa o nome do caminho
                //fica vazio pq queremos td dados
                let oContexto = columnListItem.getBindingContext();

                //pega os dados do objeto (Modelo de dados)
                let oDadosModelo = oContexto.getObject();

                //acessa propriedade ID
                let sId = oDadosModelo.PartnerId;

                //Altera o layout do ColumnFlexibleLayout

                //Acessa o roteador
                let oRoteador = this.getOwnerComponent().getRouter();
                
                //navega para a tela do parceiro
                oRoteador.navTo("RouteParceiro", {
                    PartnerId:  sId
                });

            }
        });
    });
