import React from 'react'

interface Props {
    collapsed: boolean,
    onCardClick: any,
    title: string
}

export const Card = ({collapsed, onCardClick, title}: Props) => {
  const [showDescription, setShowDescription] = React.useState(false) 
  
  const handleClick = () => {
    onCardClick();   
    setShowDescription(!showDescription)
  }  

  React.useEffect(() => {
    if(!collapsed) {
        setShowDescription(false)
    }
  }, [collapsed])

  return (
    <div className='card'>
        <h1>{title}</h1>
        <button onClick={() => handleClick()} 
        >
          More
        </button>
        {collapsed && showDescription && <h2>Description</h2>}
    </div>
  )
}
