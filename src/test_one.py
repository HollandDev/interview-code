from data.dataset import data_set_one, data_set_two, data_set_three
def display_string_list(str_list, depth = 1):
    """
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
    """
    
    # Write code here
    for node in str_list:
        if(type(node) == list):
            display_string_list(node, depth + 1)
        else:
            print(f"{'-'*depth}> {node}")

display_string_list(data_set_one)
# display_string_list(data_set_two)
# display_string_list(data_set_three)