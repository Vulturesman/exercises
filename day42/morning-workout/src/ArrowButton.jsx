export default function ArrowButton({direction, onClick}) {
    return(
        <button onClick={onClick}>{direction}</button>
    )
}