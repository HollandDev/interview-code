
from data.dataset import data_set_one, data_set_two, data_set_three
def display_string_list(str_list):
    """
        Write a function to take a list of strings
        e.g. ['one', 'two', 'three']
        and display it line per line with -> next to it
        e.g.
        -> one
        -> two
        -> three

        When a list is nested it should have an additional dash representing the level
        e.g. ['one', 'two', ['three']] becomes
        -> one
        -> two
        --> three
    """
    pass

display_string_list(data_set_one)
display_string_list(data_set_two)
display_string_list(data_set_three)