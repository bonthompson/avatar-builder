import { CategoryButtonsContainer, CategoryButton } from './styles/index'
import { useRequestsContext } from '../../hooks/index'
import { MiscCategoryIcon, BackgroundCategoryIcon, BodyCategoryIcon, BottomsCategoryIcon, EyebrowsCategoryIcon, EyesCategoryIcon, HairCategoryIcon, MouthCategoryIcon, TopsCategoryIcon } from '../../assets/categoryButtonSvgs/index'

// Are we going to have a nose category?
// need shoes

const CategoryButtons = () => {
    const { setIsDisplayedItem } = useRequestsContext()
    return (
        <CategoryButtonsContainer>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'BODY'})} >
                <BodyCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'EYES'})}>
                <EyesCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category:'EYEBROWS'})}>
                <EyebrowsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'HAIR'})}>
                <HairCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'MOUTH'})} >
                <MouthCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'NOSE'})} >
                nose
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'TOP'})} >
                <TopsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'BOTTOM'})} >
                <BottomsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'FEET'})} >
                {/* <FeetCategoryIcon /> */}
                feet
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'MISC'})} >
                <MiscCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({category: 'BACKGROUND'})} >
                <BackgroundCategoryIcon />
            </CategoryButton>
        </CategoryButtonsContainer >
    );
}

export default CategoryButtons;