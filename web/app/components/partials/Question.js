import React from 'react';
import ReactDOM from "react-dom";

var Question = React.createClass ({

	//constructor(props) {
	  //  super(props);
	    //this.submitQuestion = this.submitQuestion.bind(this);
	//};

	/*propTypes:{
    	question:React.PropTypes.object.isRequired
  	},
	*/

	getDefaultProps(){
		//console.log(this.props.params.idd);
		//	console.log(this.props.params.questions);
		return {
			question:{heading:"dummy question"}
		}
	},

	getQuestionTemplate(question){
		var template = "";
		switch (question.type) {
			case 'ONAO': //option none answer one
				template = (<input type="text" className="form-control" name="answer" id="answer" placeholder="Your Answer" value={question.answer}></input>);
				break;
			case 'OMAO': //option many aanswer one
				template = (<ul><li>{question.options.map(function(v, index){
												return (<div key={index} className="form-check">
												          <label className="form-check-label">
												            <input className="form-check-input" type="radio" name="answer" id="radio1" value={v.submitValue} ></input>
																		{v.displayValue}
												          </label>
												        </div>);
															})}</li>
											</ul>);
				break;
			case 'OMAM': //option multiple answer many
				template = (<ul><li>{question.options.map(function(v, index){
											return (<div key={index} className="form-check">
																<label className="form-check-label">
																	<input className="form-check-input" type="radio" name="answer" id="checkbox1" value={v.submitValue} ></input>
																	{v.displayValue}
																</label>
															</div>);
														})}</li>
										</ul>);
				break;
			default:
			template = (<div>"No appropriate question definition is found for this question type"</div>);
		}

		return template;

	},



	render(){


//<div className="form-group">
//<label htmlFor="answer">{this.props.question.heading}</label>
// <input type="text" className="form-control" id="answer" placeholder="Your Answer"></input>
//</div>

		return (
			<div>
				<div className="form-group">
								<label htmlFor="answer">{this.props.question.heading}</label>
								{this.getQuestionTemplate(this.props.question)}
							</div>
							</div>
		);
	}
});

export default Question;
