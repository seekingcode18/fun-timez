import React from 'react'

const Header = ({ title, tagline, instructions }) => {
  return (
    <header>
			<h1>{title}</h1>
			<h2>{tagline}</h2>
			<p>{instructions}</p>
    </header>
  )
}

export default Header