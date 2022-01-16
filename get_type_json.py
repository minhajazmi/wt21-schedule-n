#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan  9 01:44:21 2022

@author: xinhao
"""

#%% import pandas
# This is the convention used to import Pandas.
import pandas as pd
import numpy as np

#%% load data
# These commands load the survey data 
df = pd.read_json("TM_result_s1.json")

#%% data feature

type_data = df.iloc[:,1:26];

#%% define data cleaning function

# =============================================================================
# def text_to_score(a):
#     if a == "No, not at all":
#         return 1
#     elif a == "Mostly not":
#         return 2
#     elif a == "Mostly yes":
#         return 3
#     elif a == "Yes, definitely agree":
#         return 4 
# =============================================================================

#%% data cleaning
        
# =============================================================================
# type_num_data = type_data.applymap(text_to_score)
# =============================================================================

#%% center the scores at 0 by minus every score by 2



#%% calculate the average score for each type (25 question OLD version)
# hooper        = (Q1 + Q4 + Q6 + Q15 + (5 - Q17) + (5 - Q20)) / 6 - 2.5
# Perfectionist = (Q2 + Q5 + Q7 + Q9 + Q16 + (5 - Q18)) / 6 - 2.5
# cliff_hanger  = (Q13 + Q21 + Q22 + Q23 + (5 - Q8)) / 5 - 2.5
# impulsive     = (Q3 + Q4 + Q15 + Q19 + (5 - Q10) + (5 - Q17)) / 6 - 2.5
# big_idea      = (Q11 + Q22 + Q24 + (5 - Q7)) / 4 - 2.5
# hyperfocus    = (Q7 + Q12 + Q14 + Q25 + (5 - Q1) + (5 - Q6)) / 6 - 2.5

type_data['hopper_score'] = (type_data.iloc[0,0] + type_data.iloc[0,3]  
    + type_data.iloc[0,5]  + type_data.iloc[0,14] + (5 - type_data.iloc[0,16]) 
    + (5 - type_data.iloc[0,19])) / 6 - 2.5

type_data['perfectionist_score'] = (type_data.iloc[0,1] + type_data.iloc[0,4]  
    + type_data.iloc[0,6]  + type_data.iloc[0,8] + type_data.iloc[0,15] 
    + (5 - type_data.iloc[0,17])) / 6 - 2.5

type_data['cliff_hanger_score'] = (type_data.iloc[0,12] + type_data.iloc[0,20]  
    + type_data.iloc[0,21]  + type_data.iloc[0,22] 
    + (5 - type_data.iloc[0,7])) / 5 - 2.5

type_data['impulsive_score'] = (type_data.iloc[0,2] + type_data.iloc[0,3]  
    + type_data.iloc[0,14]  + type_data.iloc[0,18] + (5 - type_data.iloc[0,9]) 
    + (5 - type_data.iloc[0,16])) / 6 - 2.5

type_data['big_idea_score'] = (type_data.iloc[0,10] + type_data.iloc[0,21]  
    + type_data.iloc[0,23] + (5 - type_data.iloc[0,6])) / 4 - 2.5

type_data['hyperfocus_score'] = (type_data.iloc[0,6] + type_data.iloc[0,11]  
    + type_data.iloc[0,13]  + type_data.iloc[0,24] + (5 - type_data.iloc[0,0]) 
    + (5 - type_data.iloc[0,5])) / 6 - 2.5

#%% get the result from the average score

all_scores = [type_data['hopper_score'][0], type_data['perfectionist_score'][0], 
              type_data['cliff_hanger_score'][0], type_data['impulsive_score'][0], 
              type_data['big_idea_score'][0], type_data['hyperfocus_score'][0]]

#define conditions
conditions = [type_data['hopper_score'][0] == max(all_scores), 
              type_data['perfectionist_score'][0] == max(all_scores),
              type_data['cliff_hanger_score'][0] == max(all_scores),
              type_data['impulsive_score'][0] == max(all_scores),
              type_data['big_idea_score'][0] == max(all_scores),
              type_data['hyperfocus_score'][0] == max(all_scores)]

#define choices
choices = ['hopper', 'perfectionist', 'cliff hanger', 'impulsive', 'big idea', 'hyperfocus']

#create new column in DataFrame that displays results of comparisons
type_data['winner_type'] = np.select(conditions, choices, default='mixed type')


#%% calculate the average score for each type (24 question FINAL version)
# hooper        = (Q1 + Q4 + Q6 + Q14 + Q16 + (5 - Q19)) / 6 - 2.5
# Perfectionist = (Q2 + Q5 + Q7 + Q9 + Q15 + (5 - Q17)) / 6 - 2.5
# cliff_hanger  = (Q12 + Q20 + Q21 + Q22 + (5 - Q8)) / 5 - 2.5
# impulsive     = (Q3 + Q4 + Q16 + Q18 + (5 - Q10)) / 5 - 2.5
# big_idea      = (Q11 + Q21 + Q23 + (5 - Q7)) / 4 - 2.5
# hyperfocus    = (Q7 + Q13 + Q24 + (5 - Q1) + (5 - Q6)) / 5 - 2.5

type_data['hopper_score'] = (type_data.iloc[0,0] + type_data.iloc[0,3]  
    + type_data.iloc[0,5]  + type_data.iloc[0,13] + type_data.iloc[0,15] 
    + (5 - type_data.iloc[0,18])) / 6 - 2.5




