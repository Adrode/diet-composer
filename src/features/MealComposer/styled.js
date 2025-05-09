import styled from "styled-components";

export const StyledMealComposer = styled.section`
    padding: 4dvb;
    width: 100%;
    height: max-content;

    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`;

export const ProductPicker = styled.div`
    border: 2px solid ${({ theme }) => theme.color.grey};
    box-shadow: 5px 5px 15px -2px;
    padding: 20px;
    width: max-content;

    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(4, auto);
    grid-gap: 20px;
`;

export const Title = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 28px;
    font-weight: normal;

    grid-column-start: 1;
    grid-column-end: -1;
`;

export const MacroProperties = styled.div`
    
`;

export const Property = styled.div`
    padding-bottom: 5px;
`;

export const MacroValues = styled.div`

`;

export const ChangeValues = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;

    display: flex;
    justify-content: space-around
`;