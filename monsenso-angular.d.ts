declare namespace angular {
    interface IAugmentedJQuery {
        eq(index: number): IAugmentedJQuery;
    }
}

declare namespace angular.ui {
    interface IResolvedState {
        parent: {
            abstract: boolean;
            navigable: any;
            self: IState;
        };
    }
}
