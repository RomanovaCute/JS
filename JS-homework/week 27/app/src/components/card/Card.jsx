import React, { useState } from 'react';
import styled from 'styled-components'

const CustomCard = styled.div((props) => {
    let mark = '0';

    if(props.mark === 'true'){
        mark = '1.2'
    } else if(props.mark === 'false'){
        mark = '1'
    }

    return `
    display: flex;
    flex-direction: column;
    width: 15%;
    transition: 1s;

    &:hover{
        transform: scale(1.1)
    };

    scale: ${mark};
    `
})

const TitleBox = styled.div((props) => {
    let color = 'blue';

    if(props.color === 'blue'){
        color = 'blue';
    } else if (props.color === 'green'){
        color = 'green';
    } else if (props.color === 'red'){
        color = 'red';
    } else if (props.color === 'black'){
        color = 'black';
    }

return `
    background: ${color};
`
})


const Title = styled.h3`
    font-size: 16px;
    color: #fff
`
const Main = styled.div`

    .speed,.terms{
        color: #1f1e1e;
        padding: 10px;
    }

    .speed{
        background: #fff;
    }
    .terms{
        background: #bdbbbb
    }
    
`

const Price = styled.div((props) => {
    let color = 'blue';

    if(props.color == 'blue'){
        color = 'blue';
    } else if (props.color === 'green'){
        color = 'green';
    } else if (props.color === 'red'){
        color = 'red';
    } else if (props.color === 'black'){
        color = 'black';
    }

return `
    background: ${color};
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`
})

const Card = props => {
    const { color, mark } = props;
    const [isSelected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(isSelected => !isSelected)
    }

    return (
        <CustomCard mark={mark}>
            <TitleBox className='title-box' color={color}>
                <Title className="title">{props.title}</Title>
            </TitleBox>
            <Main>
                <Price className='item' color={color}>{props.price} руб/мес</Price>
                <div className="speed item">до {props.speed} Мбит/сек</div>
                <div className="terms item">{props.terms}</div>
            </Main>
            <div className='selecteBox'>
                { isSelected &&
                    <>
                        <div className='selected'>Выбрано!</div>
                        <button onClick={handleClick}>Отменить</button>
                    </>
                }
                { !isSelected &&
                    <button onClick={handleClick}>Выбрать</button>
                }
            </div>
        </CustomCard>
    );
}

export default Card;