import React from 'react'

const Box = ({ isSelected, isHighlighted, handleClick, number }) => {
  const handleStyles = () => {
    if (isHighlighted && !isSelected) return 'grid__item grid__item-highlighted'
    else if (isSelected && isHighlighted) return 'grid__item grid__item-selected'
    else if (isSelected && !isHighlighted) return 'grid__item grid__item-selected'
    return 'grid__item'
  }

  return (
    <>
			<span className={handleStyles()}
            onClick={handleClick}
            data-number={number}
            role="gridcell"
            aria-selected={isHighlighted ? 'true' : 'false'}
            aria-current={isSelected ? 'true' : 'false'}
      >
        {number}
      </span>
		</>
  )
}

export default Box