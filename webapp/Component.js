/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "z012/parceiros/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("z012.parceiros.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                //declara modelo de layout
                let oModel = new JSONModel();

                //Associa modelo no component.js
                this.setModel(oModel, "layout");

                // enable routing
                this.getRouter().initialize();

                //Anexa o evento attachBeforeRouteMached //Pegar view raiz
                //com contexto para compnet.js
                this.getRouter().attachBeforeRouteMatched( this.aoExecutarRota, this);

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            aoExecutarRota: function(oEvent) {
                //acessa o nome da Rota
                let sRota = oEvent.getParameter("name");

                //passa o layout de duas colunas para o modelo
                let oLayout = this.getModel("layout");
                if(sRota === "RouteParceiro"){
                    //cria e/ou altera com o layout de duas colunas
                    //nome da propriedade vai ter a "/" porque é um caminho absoluto
                    oLayout.setProperty("/visual", sap.f.LayoutType.TwoColumnsMidExpanded )

                } else {
                     //cria e/ou altera com o layout de duas colunas
                     //nome da propriedade vai ter a "/" porque é um caminho absoluto
                     oLayout.setProperty("/visual", sap.f.LayoutType.OneColumn)

                }
            }
        });
    }
);