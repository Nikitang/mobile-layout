export type InitStateTypes = {
    name: string;
    description: string;
    background: string;
};

export type RouteRedux = {
    route: string;
};

export type InitState = InitStateTypes & RouteRedux;
