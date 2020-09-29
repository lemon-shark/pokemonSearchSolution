const CustomSearchbox = (function(_super) {
  __extends(CustomSearchbox, Coveo.Component);
  function CustomSearchbox(element, options, bindings) {
    _super.call(this, element, CustomSearchbox.ID, bindings);
    this.type = 'CustomSearchBox';
    Coveo.Component.bindComponentToElement(element, this);
    this.element = element;
    this.options = options;
    this.bindings = bindings;
  }
 
  CustomSearchbox.ID = 'CustomSearchbox';
  Coveo.Initialization.registerAutoCreateComponent(CustomSearchbox);
})(Coveo.Component);
