import styled from 'styled-components'

const CustomCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    grid-gap: 10px;
`
const TitleBox = styled.div`
    background: #2b84ff;
`
const Title = styled.h3`
    font-size: 16px;
    color: #fff
`
const Main = styled.div`
    .item:not(:last-child){
        margin-bottom: 10px;
    }

    .price{
        color: #fff;
        font-size: 20px;
        font-weight: bold;
    }

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

const Card = props => {
    const { bgColor } = color; 

    return (
        <CustomCard>
            <TitleBox className='title-box'>
                <Title className="title">{props.title}</Title>
            </TitleBox>
            <Main>
                <div className="price item">{props.price} руб/мес</div>
                <div className="speed item">до {props.speed} Мбит/сек</div>
                <div className="terms item">{props.terms}</div>
            </Main>
        </CustomCard>
    );
}

export default Card;