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
    //dummyOptionQuery: string;
  }
export class QueryResult extends Component {
    static ID = 'QueryResult';
  
    static options: IQueryResultOptions = {
        noQuery: ComponentOptions.buildStringOption({
        defaultValue: 'Enter Pokemon in the searchbox. '
      }),
      // dummyOptionQuery: ComponentOptions.buildStringOption({
      //   defaultValue: '@uri'
      // })
};
constructor(public element: HTMLElement, public options: IQueryResultOptions, public bindings: IComponentBindings) {
    super(element, QueryResult.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, QueryResult, options);
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
Initialization.registerAutoCreateComponent(QueryResult);

