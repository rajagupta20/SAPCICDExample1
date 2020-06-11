sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  
  return Controller.extend("com.sap.controller.HelloWorld", {
    
    onPress: function(Event) {
      alert("Hello! Button clicked in XML View");
    }
    
  }); 
});