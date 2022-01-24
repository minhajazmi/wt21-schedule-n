#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan 23 03:30:27 2022

@author: xinhao

This function convert user input into time management (TM) types

Input:  - .json file of user TM questionnaire answer
Output: - a string of the name of the TM type ('Hooper'/'Perfectionist'/'Implusive'
        /'Cliff hanger'/'Big idea'/'Hyperfocus')
"""

# get TM_type.py

def get_TM_type():
    
    #%% import libraries
    # This is the convention used to import Pandas.
    import pandas as pd
    import numpy as np
    import json
    import sys # help to read users answers by the backend,please dont delete.
    user_answers = sys.argv[1]# helps to read the data node is sending to this python script

    #%% load data
    # These commands load the survey data 
    
    # Open JSON file
    f = open(user_answers)
    
    # load json file as a dictionary
    data_dict = json.load(f, strict=False)
    
    # convert dictionary to DataFrame
    df = pd.DataFrame([data_dict])
    
    
    #%% data feature
    
    type_data = df.iloc[:,0:24];
    
    #%% define data cleaning function
    
    
    def text_to_score(a):
         if a == "completely-disagree":
             return 1
         elif a == "I-disagree":
             return 2
         # This is a typo, remove after change
         elif a == "I-disagre":
             return 2
         elif a == "I-agree":
             return 3
         elif a == "completely-agree":
             return 4 
    
    
    #%% data cleaning      
    
    type_num_data = type_data.applymap(text_to_score)
    
    
    #%% calculate the average score for each type (23 question FINAL version)
    # hooper        = (Q1 + Q4 + Q6 + Q14 + Q16 + (5 - Q19)) / 6 - 2.5
    # Perfectionist = (Q2 + Q5 + Q7 + Q9 + Q15 + (5 - Q17)) / 6 - 2.5
    # cliff_hanger  = (Q12 + Q20 + Q21 + Q22 + (5 - Q8)) / 5 - 2.5
    # impulsive     = (Q3 + Q4 + Q16 + Q18 + (5 - Q10)) / 5 - 2.5
    # big_idea      = (Q11 + Q21 + Q23 + (5 - Q7)) / 4 - 2.5
    # hyperfocus    = (Q7 + Q13 + Q24 + (5 - Q1) + (5 - Q6)) / 5 - 2.5
    
    type_num_data['hopper_score'] = (type_num_data.iloc[0,0] + type_num_data.iloc[0,3]  
        + type_num_data.iloc[0,5] + type_num_data.iloc[0,13] + type_num_data.iloc[0,15] 
        + (5 - type_num_data.iloc[0,18])) / 6 - 2.5
    
    type_num_data['perfectionist_score'] = (type_num_data.iloc[0,1] + type_num_data.iloc[0,4]  
        + type_num_data.iloc[0,6] + type_num_data.iloc[0,8] + type_num_data.iloc[0,14] 
        + (5 - type_num_data.iloc[0,16])) / 6 - 2.5
    
    type_num_data['cliff_hanger_score'] = (type_num_data.iloc[0,11] + type_num_data.iloc[0,19]  
        + type_num_data.iloc[0,20] + type_num_data.iloc[0,21] 
        + (5 - type_num_data.iloc[0,7])) / 5 - 2.5
    
    type_num_data['impulsive_score'] = (type_num_data.iloc[0,2] + type_num_data.iloc[0,3]  
        + type_num_data.iloc[0,15] + type_num_data.iloc[0,17] 
        + (5 - type_num_data.iloc[0,9])) / 5 - 2.5
        
    type_num_data['big_idea_score'] = (type_num_data.iloc[0,10] + type_num_data.iloc[0,20]  
        + type_num_data.iloc[0,22] + (5 - type_num_data.iloc[0,6])) / 4 - 2.5
    
    type_num_data['hyperfocus_score'] = (type_num_data.iloc[0,6] + type_num_data.iloc[0,12]  
        + type_num_data.iloc[0,23] + (5 - type_num_data.iloc[0,0]) 
        + (5 - type_num_data.iloc[0,5])) / 5 - 2.5
    
    #%% get the result from the average score
    
    all_scores = [type_num_data['hopper_score'][0], type_num_data['perfectionist_score'][0], 
                  type_num_data['cliff_hanger_score'][0], type_num_data['impulsive_score'][0], 
                  type_num_data['big_idea_score'][0], type_num_data['hyperfocus_score'][0]]
    
    #define conditions
    conditions = [type_num_data['hopper_score'][0] == max(all_scores), 
                  type_num_data['perfectionist_score'][0] == max(all_scores),
                  type_num_data['cliff_hanger_score'][0] == max(all_scores),
                  type_num_data['impulsive_score'][0] == max(all_scores),
                  type_num_data['big_idea_score'][0] == max(all_scores),
                  type_num_data['hyperfocus_score'][0] == max(all_scores)]
    
    #define choices
    choices = ['hopper', 'perfectionist', 'cliff hanger', 'impulsive', 'big idea', 'hyperfocus']
    
    #create new column in DataFrame that displays results of comparisons
    type_num_data['winner_type'] = np.select(conditions, choices, default='mixed type')
    
    return type_num_data['winner_type'][0]

if __name__ == '__main__':
    # call get_TM_type func
    get_TM_type()
