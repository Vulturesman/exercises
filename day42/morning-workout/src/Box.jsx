import "./Box.css"

export default function Box({boxTop, boxLeft}) {

    const boxStyle = {
    position: 'absolute',
    top: boxTop,
    left: boxLeft
}

    return (
    <div className="box" style={ boxStyle }></div>
)
}