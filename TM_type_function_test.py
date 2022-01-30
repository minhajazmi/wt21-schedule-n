#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Jan 23 03:47:19 2022

@author: xinhao
"""

#%% call for the function to get user Time management type

user_answers = 'quizdata.json' # here the file name will be dependent on our real file name

from get_TM_type import get_TM_type

TM_type = get_TM_type(user_answers)
