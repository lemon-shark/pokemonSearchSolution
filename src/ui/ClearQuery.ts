import {
    Component,
    ComponentOptions,
    IComponentBindings,
    $$,
    QueryEvents,
    Initialization,
    IQuerySuccessEventArgs
  } from 'coveo-search-ui';

export interface IQueryResultOptions {
    noQuery: string;
  }
export class ClearQuery extends Component {
    static ID = 'ClearQuery';
  
    static options: IQueryResultOptions = {
        noQuery: ComponentOptions.buildStringOption({
        defaultValue: 'Enter Pokemon in the searchbox. '
      })
};
constructor(public element: HTMLElement, public options: IQueryResultOptions, public bindings: IComponentBindings) {
    super(element, ClearQuery.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, ClearQuery, options);
    this.bind.onRootElement(QueryEvents.querySuccess, (args:  IQuerySuccessEventArgs) => this.handleQuerySuccess(args));   
  }

  private handleQuerySuccess(args:  IQuerySuccessEventArgs) {
    if(args.query.q){
      $$(this.element).text(args.query.q);
    } else {
      $$(this.element).text(this.options.noQuery);
    }
    Coveo.$$('button', {class:"QueryController"}, "Clear Query");

  }
}
Initialization.registerAutoCreateComponent(ClearQuery);

