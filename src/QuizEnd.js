import React, {Component} from 'react';
class QuizEnd extends Component{
    render(){
        const isQuizEnd =  quizData.quiz_questions.length==this.state.quiz_position-1;
        if(isQuizEnd) return (
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
            </div>
        );
    }

    constructor(props) {
        super(props);
    }
}

export default QuizEnd;