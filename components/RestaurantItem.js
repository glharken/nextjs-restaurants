const RestaurantItem = ({
    data = 'Default Restaurant'
}) => {
    const {name, category} = data;
    return <article><h3>{name}</h3></article>
}

export default RestaurantItem