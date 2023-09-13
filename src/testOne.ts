import dataSetOne from "./data/one";
// @ts-ignore
import dataSetTwo from "./data/two";
// @ts-ignore
import dataSetThree from "./data/three";

export const displayStringList = (stringList: any, depth = 1) => {
  /*
        Write a recursive function to take a list of strings
        and display it line per line with -> next to it
        e.g.
        ['one', 'two', 'three']
        
        becomes
        
        -> one
        -> two
        -> three

        The recursion is needed as when a list is nested it should have an additional 
        dash representing the level
        e.g. ['one', 'two', ['three'], ['four', ['five']]] 
        
        becomes
        
        -> one
        -> two
        --> three
        --> four
        ---> five
    */
};

displayStringList(dataSetOne);
// displayStringList(dataSetTwo);
// displayStringList(dataSetThree);
