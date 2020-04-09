import React from 'react';
import Card from './Card';

const CardList = ({EducationPages}) => (
	<div>
		{EducationPages.map((user,i)=> (
			<Card
				key={i}
				cardphoto={EducationPages[i].cardphoto}
				title={EducationPages[i].title}
				description={EducationPages[i].description}
				weblink={EducationPages[i].weblink}
			/>
		))}
	</div>
)

export default CardList;