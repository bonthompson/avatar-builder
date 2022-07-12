import { CategoryButtonsContainer, CategoryButton } from './styles/index'
import { useRequestsContext } from '../../hooks/index'
import { MiscCategoryIcon, BackgroundCategoryIcon, BodyCategoryIcon, BottomsCategoryIcon, EyebrowsCategoryIcon, EyesCategoryIcon, HairCategoryIcon, MouthCategoryIcon, TopsCategoryIcon } from '../../assets/categoryButtonSvgs/index'

// Are we going to have a nose category?
// need shoes

const CategoryButtons = () => {
    const { setCategory } = useRequestsContext()
    return (
        <CategoryButtonsContainer>
            <CategoryButton onClick={() => setCategory('BODY')} >
                <BodyCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('EYES')}>
                <EyesCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('EYEBROWS')}>
                <EyebrowsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('HAIR')}>
                <HairCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('MOUTH')} >
                <MouthCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('NOSE')} >
                nose
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('TOPS')} >
                <TopsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('BOTTOMS')} >
                <BottomsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('FEET')} >
                {/* <FeetCategoryIcon /> */}
                feet
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('MISC')} >
                <MiscCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setCategory('BACKGROUND')} >
                <BackgroundCategoryIcon />
            </CategoryButton>
        </CategoryButtonsContainer >
    );
}

export default CategoryButtons;