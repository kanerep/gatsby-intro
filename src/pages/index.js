import React from 'react'
import { Link } from 'gatsby'

export default () => (
	<div>
		<h1>Home</h1>
		<p>
			Welcome to my personal blog!<span role='img' aria-label='emoji-waving-hello'>
				👋
			</span>
		</p>
		<Link to='/about/'>About me &rarr;</Link>
	</div>
)
