#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan 30 01:50:30 2022

@author: xinhao

This function convert user input into time management (TM) types, and save the result as a Json file

Input:  - .json file of user TM questionnaire answer
Output: - a Json file containing the name of the TM type:
        {"TM_type":"Hooper"}/
        {"TM_type":"Perfectionist"}/
        {"TM_type":"Implusive"}/
        {"TM_type":"Cliff hanger"}/
        {"TM_type":"Big idea"}/
        {"TM_type":"Hyperfocus"}.

"""

# get_TM_type_as_Json.py

def get_TM_type_as_Json(user_answers):
    
    #%% import libraries
    # This is the convention used to import Pandas.
    import pandas as pd
    import numpy as np
    import json

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
         elif a == "I-disgree":
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
    
    #%% return TM type of user as a string
    
    # return type_num_data['winner_type'][0]

    #%% save TM type of user as a Json file
    
    user_TM_type = {
            'TM_type': type_num_data['winner_type'][0]
            }

    with open('user_TM_type.json', 'w') as json_file:
        json.dump(user_TM_type, json_file)
    
    
if __name__ == '__main__':
    # call get_TM_type func
    get_TM_type()