import './ArrowButton.css'

export default function ArrowButton({direction, onClick}) {
    return(
        <button className='buttons' onClick={onClick}>{direction}</button>
    )
}