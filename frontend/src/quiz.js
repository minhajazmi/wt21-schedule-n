import React from 'react';
import { useForm } from 'react-hook-form';


function Quiz() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: "onChange"});
  //const onSubmit = data => console.log(data);
  const onSubmit = data => alert(JSON.stringify(data));
  console.log(errors);

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="radioForm">
    <div className="radioContainer"> 
    <label>I enjoy working on more than one project at a time.</label>
      <input {...register("enjoy", { required: true })} type="radio" value="completely-disagree" />
      <input {...register("enjoy", { required: true })} type="radio" value="I-disagre" />
      <input {...register("enjoy", { required: true })} type="radio" value="I-agree" />
      <input {...register("enjoy", { required: true })} type="radio" value="completely-agree" />
    </div>
    <div className="radioContainer">
    <label>If I have choice, I prefer to work alone rather than group work.</label>
      <input {...register("choice", { required: true })} type="radio" value="completely-disagree" />
      <input {...register("choice", { required: true })} type="radio" value="I-disagre" />
      <input {...register("choice", { required: true })} type="radio" value="I-agree" />
      <input {...register("choice", { required: true })} type="radio" value="completely-agree" />
      </div>
  
  <div className="radioContainer">
  <label>I like to see thrill?</label>
    <input {...register("thrilled", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("thrilled", { required: true })} type="radio" value="I-disagre" />
    <input {...register("thrilled", { required: true })} type="radio" value="I-agree" />
    <input {...register("thrilled", { required: true })} type="radio" value="completely-agree" />
    </div>
    <div className="radioContainer">
  <label>I can be easily distracted during work or Study?</label>
    <input {...register("distraction", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("distraction", { required: true })} type="radio" value="I-disagre" />
    <input {...register("distraction", { required: true })} type="radio" value="I-agree" />
    <input {...register("distraction", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I have high standard for my work or study</label>
    <input {...register("high-standard", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("high-standard", { required: true })} type="radio" value="I-disagre" />
    <input {...register("high-standard", { required: true })} type="radio" value="I-agree" />
    <input {...register("high-standard", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I like to switch between tasks.</label>
    <input {...register("switch-task", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("switch-task", { required: true })} type="radio" value="I-disagre" />
    <input {...register("switch-task", { required: true })} type="radio" value="I-agree" />
    <input {...register("switch-task", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I focus a lot on details.</label>
    <input {...register("focus", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("focus", { required: true })} type="radio" value="completely-agree" />
    <input {...register("focus", { required: true })} type="radio" value="I-disagre" />
    <input {...register("focus", { required: true })} type="radio" value="I-agree" />
    </div>
    <div className="radioContainer">
  <label>I usually dive into it when I get a new task.</label>
    <input {...register("concentrate", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("concentrate", { required: true })} type="radio" value="I-disagre" />
    <input {...register("concentrate", { required: true })} type="radio" value="I-agree" />
    <input {...register("concentrate", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I seek others approval.</label>
    <input {...register("approval", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("approval", { required: true })} type="radio" value="I-disagre" />
    <input {...register("approval", { required: true })} type="radio" value="I-agree" />
    <input {...register("approval", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I have a daily or weekly plan for my work or study.</label>
    <input {...register("plan", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("plan", { required: true })} type="radio" value="I-disagre" />
    <input {...register("plan", { required: true })} type="radio" value="I-agree" />
    <input {...register("plan", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I enjoy having big ideas.</label>
    <input {...register("ideas", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("ideas", { required: true })} type="radio" value="I-disagre" />
    <input {...register("ideas", { required: true })} type="radio" value="I-agree" />
    <input {...register("ideas", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I procrastinate often.</label>
    <input {...register("procrastinate", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("procrastinate", { required: true })} type="radio" value="I-disagre" />
    <input {...register("procrastinate", { required: true })} type="radio" value="I-agree" />
    <input {...register("procrastinate", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I find it hard to switch between tasks.</label>
    <input {...register("hard", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("hard", { required: true })} type="radio" value="I-disagre" />
    <input {...register("hard", { required: true })} type="radio" value="I-agree" />
    <input {...register("hard", { required: true })} type="radio" value="completely-agree" />
    </div>
    <div className="radioContainer">
  <label>I like spontaneous activities or I like to solve spontaneous tasks.</label>
    <input {...register("spontaneous", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("spontaneous", { required: true })} type="radio" value="I-disagre" />
    <input {...register("spontaneous", { required: true })} type="radio" value="I-agree" />
    <input {...register("spontaneous", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I spend a lot of time on finishing touches of my work.</label>
    <input {...register("finishing", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("finishing", { required: true })} type="radio" value="I-disagre" />
    <input {...register("finishing", { required: true })} type="radio" value="I-agree" />
    <input {...register("finishing", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I find it hard to focus for a long period.</label>
    <input {...register("period", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("period", { required: true })} type="radio" value="I-disagre" />
    <input {...register("period", { required: true })} type="radio" value="I-agree" />
    <input {...register("period", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label> I always know how to priortise my tasks.</label>
    <input {...register("priority", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("priority", { required: true })} type="radio" value="I-disagre" />
    <input {...register("priority", { required: true })} type="radio" value="I-agree" />
    <input {...register("priority", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I like instant gratificaton and find it hard to wait.</label>
    <input {...register("gratification", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("gratification", { required: true })} type="radio" value="I-disagre" />
    <input {...register("gratification", { required: true })} type="radio" value="I-agree" />
    <input {...register("gratification", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I prefer to finish one task before moving on to another.</label>
    <input {...register("settled", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("settled", { required: true })} type="radio" value="I-disagre" />
    <input {...register("settled", { required: true })} type="radio" value="I-agree" />
    <input {...register("settled", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I am usually the one who arrives late or miss an appointment.</label>
    <input {...register("appointment", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("appointment", { required: true })} type="radio" value="I-disagre" />
    <input {...register("appointment", { required: true })} type="radio" value="I-agree" />
    <input {...register("appointment", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I am more productive when I am busier.</label>
    <input {...register("productive", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("productive", { required: true })} type="radio" value="I-disagre" />
    <input {...register("productive", { required: true })} type="radio" value="I-agree" />
    <input {...register("productive", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I tend to make decision at the last minute.</label>
    <input {...register("decision", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("decision", { required: true })} type="radio" value="I-disagre" />
    <input {...register("decision", { required: true })} type="radio" value="I-agree" />
    <input {...register("decision", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I focus on big picture more than details of the project.</label>
    <input {...register("bigger-picture", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("bigger-picture", { required: true })} type="radio" value="I-disagre" />
    <input {...register("bigger-picture", { required: true })} type="radio" value="I-agree" />
    <input {...register("bigger-picture", { required: true })} type="radio" value="completely-agree" />
    </div>
  <div className="radioContainer">
  <label>I work better when I can decide the deadline myself.</label>
    <input {...register("deadline", { required: true })} type="radio" value="completely-disagree" />
    <input {...register("deadline", { required: true })} type="radio" value="I-disagre" />
    <input {...register("deadline", { required: true })} type="radio" value="I-agree" />
    <input {...register("deadline", { required: true })} type="radio" value="completely-agree" />
    </div>
    
  <div>
    <input type="submit" disabled={(!isValid)} className="primaryButton"/>
    </div>
      </form>
      </div>
  );
  }
  


export default Quiz;