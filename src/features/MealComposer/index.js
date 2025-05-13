import { useState } from "react";
import { products } from "../products";
import {
    ChangeValues,
    MacroProperties,
    MacroValues,
    ProductPicker,
    Property,
    StyledMealComposer,
    ProductsList,
    Value,
    WeightValue,
    WeightButton
} from "./styled"

export const MealComposer = () => {
    const [howManyPickers, setHowManyPickers] = useState(3);

    const pickersArray = [
        {
            id: 0,
            ...products[0],
        },
        {
            id: 1,
            ...products[1],
        },
        {
            id: 2,
            ...products[2],
        },
    ];
    console.log(pickersArray);

    return (
        <StyledMealComposer>
            {pickersArray.map((_, index) => {
                /* pickersArray = [
                    ...pickersArray,
                    
                ]; */

                return (
                    <ProductPicker key={index}>
                        <ProductsList>
                            {products.map(product => (
                                <option key={product.id} value={product.name}>
                                    {product.name}
                                </option>
                            ))}
                        </ProductsList>
                        <MacroProperties>
                            <Property>Protein:</Property>
                            <Property>Fat:</Property>
                            <Property>Carbs:</Property>
                            <Property>Price:</Property>
                        </MacroProperties>
                        <MacroValues>
                            <Value>55g</Value>
                            <Value>10g</Value>
                            <Value>80g</Value>
                            <Value>5zł</Value>
                        </MacroValues>
                        <ChangeValues>
                            <WeightButton>-</WeightButton>
                            <WeightValue type="text" defaultValue={100} readOnly={true} />
                            <WeightButton>+</WeightButton>
                        </ChangeValues>
                    </ProductPicker>
                )
            })}
        </StyledMealComposer>
    )
}