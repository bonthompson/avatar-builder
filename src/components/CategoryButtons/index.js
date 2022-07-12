import { CategoryButtonsContainer, CategoryButton } from './styles/index'
import { useRequestsContext } from '../../hooks/index'

const CategoryButtons = () => {
    const { setCategory } = useRequestsContext()

    return (
        <CategoryButtonsContainer>
            <CategoryButton onClick={() => setCategory('BODY')} />
            <CategoryButton onClick={() => setCategory('EYES')} />
            <CategoryButton onClick={() => setCategory('HAIR')} />
            <CategoryButton onClick={() => setCategory('MOUTH')} />
            <CategoryButton onClick={() => setCategory('NOSE')} />
            <CategoryButton onClick={() => setCategory('TOPS')} />
            <CategoryButton onClick={() => setCategory('BOTTOMS')} />
        </CategoryButtonsContainer>
    );
}

export default CategoryButtons;