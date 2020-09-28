import {
    Component,
    ComponentOptions,
    IComponentBindings,
    $$,
    QueryEvents,
    IBuildingQueryEventArgs,
    Initialization
  } from 'coveo-search-ui';

export interface IQueryResultOptions {
    dummyOptionText: string;
    dummyOptionQuery: string;
  }

export class QueryResult extends Component {
    static ID = 'QueryResult';
  
    static options: IQueryResultOptions = {
      dummyOptionText: ComponentOptions.buildStringOption({
        defaultValue: 'Hello world'
      }),
      dummyOptionQuery: ComponentOptions.buildStringOption({
        defaultValue: '@uri'
      })
};

constructor(public element: HTMLElement, public options: IQueryResultOptions, public bindings: IComponentBindings) {
    super(element, QueryResult.ID, bindings);
    this.options = ComponentOptions.initComponentOptions(element, QueryResult, options);

    $$(this.element).text(this.options.dummyOptionText);

    this.bind.onRootElement(QueryEvents.buildingQuery, (args: IBuildingQueryEventArgs) => this.handleBuildingQuery(args));
  }

  private handleBuildingQuery(args: IBuildingQueryEventArgs) {
    args.queryBuilder.advancedExpression.add(this.options.dummyOptionQuery);
  }
}

Initialization.registerAutoCreateComponent(QueryResult);
