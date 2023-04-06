import {DirectoryItemContainer,Body,BackgroundImage} from './directory-item.styles'

const DirectoryItem = ({category}) => {
	return (
		<DirectoryItemContainer key={category.id}>
			<BackgroundImage imageUrl={category.imageUrl}/>
			<Body>
				<h2>{category.title}</h2>
				<p>Shop now</p>
			</Body>
		</DirectoryItemContainer>
	)
}

export default DirectoryItem