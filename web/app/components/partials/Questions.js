import React from 'react';
import ReactDOM from "react-dom";
import Question from './Question';

var Questions = React.createClass ({
 getInitialState(){
	return{

		activeQuestionId:1,
		questions : [{
		  id:1,
		  heading:'What is your age?',
      type:'ONAO',
      answer:undefined
    },{
		  id:2,
		  heading:'Enter your monthly investment',
      type:'OMAO',
		  answer:undefined,
      options:[{
        displayValue:'100',
        submitValue: '1'
      },{
        displayValue: '200',
        submitValue:'2'
      }]
		},{
		  id:3,
		  heading:'Enter your saving term',
      type:'OMAM',
		  answer:undefined,
      options:[{
        displayValue:'2 years',
        submitValue: '2'
      },{
        displayValue: '4 years',
        submitValue:'4'
      }]
		}]
	}
	},

  componentWillMount() {
        console.log('Component WILL MOUNT!')
        this.updateActiveQuestion();
     },

     componentDidMount() {
        console.log('Component DID MOUNT!')
     },

     componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
     },

     shouldComponentUpdate(newProps, newState) {
        return true;
     },

     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     },

     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     },

     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     },













	submitAnswer(){
      var submitValue = "";
      var submitElements = document.querySelectorAll("input[name='answer']");
      switch (this.state.activeQuestion.type) {
        case 'OMAO':
          submitElements.forEach(function(v){
            submitValue = (v.checked?(submitValue?(submitValue+","+v.value):v.value):"");
          });
          break;
        case 'ONAO':
          submitElements.forEach(function(v){
            submitValue = v.value;
          });
          break;
        case 'OMAM':
          submitElements.forEach(function(v){
            submitValue = (v.checked?(submitValue?(submitValue+","+v.value):v.value):"");
          });
          break;
        default:
          console.log("cant record answers");
      }
      console.log(submitValue);
	//	var answer = document.getElementById("answer").value;
var me = this;
      this.state.questions.forEach(function(v, i){
        if(v.id==me.state.activeQuestionId){
          v.answer = submitValue;
        }
      });
		  console.log("answer:" + document.getElementById("answer") +" activeQuestionId:"+this.state.activeQuestionId);
	    this.goNext();
	    return false;
	},
	goPrev(){
		if(this.state.activeQuestionId>1){
			this.setState({activeQuestionId:this.state.activeQuestionId-1});
			this.updateActiveQuestion();
			document.getElementById('btnNext').removeAttribute('disabled');
      document.getElementById("answer").value="";
		}
		else {
			document.getElementById('btnPrev').setAttribute('disabled', true);
		}
	},
	goNext(){
		if(this.state.activeQuestionId<this.state.questions.length){
			this.setState({activeQuestionId:this.state.activeQuestionId+1});
			this.updateActiveQuestion();
			document.getElementById('btnPrev').removeAttribute('disabled');
      document.getElementById("answer").value="";
		}
		else{
			document.getElementById('btnNext').setAttribute('disabled', true);
		}
	},
	updateActiveQuestion(){
	  var me = this;
	  	this.state.questions.forEach(function(v){
	  				if(v.id==me.state.activeQuestionId){
	  					me.setState({activeQuestion:v});
	  				}
	  	});
	},
	start(){
	  document.getElementById('questionPanel').className="";
	  document.getElementById('message').style.display="none";

	},
	render(){

		var question = this.state.questions[this.state.activeQuestionId-1];


		console.log("generate:"+question.id);

		return (
			<div>
      <div id="message">We would like to know your requirements better so that we can serve you the best.
				<p>Please proceed to questionare</p>
        <button id="btnStart" onClick={this.start}>Start</button>

      </div>
				<form id="questionPanel" action="javascript:void 0;" className="hide">

					<Question question={question}></Question>

					<div className="form-group">
						<button id="btnPrev" className="btn btn-primary" onClick={this.goPrev}>Prev</button>
						<button id="btnNext" className="btn btn-primary" onClick={this.goNext}>Next</button>
						<input type="submit" id="btnSubmit" value="Submit" onClick={this.submitAnswer} className="btn btn-success"></input>
					</div>
				</form>

        </div>
		);
	}
});

export default Questions;
