import { Answer } from "./Answer"

export const Question = ({title, text}) => {
return (

<div className="question">
    <h3 className="question__title">{title}</h3>
    <p className="question__text"><strong>{text}</strong></p>
    <Answer answer="Answer 1"/>
    <Answer answer="Answer 2"/>
</div>

)

}