import React from "react"

export const Term = ({title, definition}) => {
return (
<div className="term">
<h1 className="term__title">{title}</h1>
<p className="term__definition">{definition}</p>
</div>
)
}

