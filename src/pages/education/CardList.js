import React from 'react';
import Card from './Card';

const CardList = ({EducationPages}) => {
	return (
		<div>
			{
				EducationPages.map((user,i)=> {
					return (
						<Card
							key={i}
							CardPhoto={EducationPages[i].CardPhoto}
							Title={EducationPages[i].Title}
							Description={EducationPages[i].Description}
							Weblink={EducationPages[i].Weblink}
						/>
					);
				})}
		</div>
	);
}

export default CardList;