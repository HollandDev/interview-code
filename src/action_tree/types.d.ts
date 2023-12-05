export type TreeFunction<I = object, O = object> = (values: I) => O;
export interface Tree {
  [key: string]: {
    [key: string]: {
      actions: {
        [key: string]: TreeFunction<any, any>;
      };
    };
  };
}
