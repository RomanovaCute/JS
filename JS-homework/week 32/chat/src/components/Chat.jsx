import { useState } from "react";

const Form = () => {
    const [message, setMessage] = useState([]);
    const [name, setName] = useState([]);
    const [state, setState] = useState('')

    const handleClick = () => {
        const messagesArray = [...message];
        messagesArray.unshift(state.message);
        setMessage(messagesArray)

        const namesArray = [...name];
        namesArray.unshift(state.name);
        setName(namesArray);

        console.log(namesArray);
        console.log(messagesArray);
    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        console.log({[event.target.name]: event.target.value});
    }
    
    return(
        <div className="area">
            <div className="message-area">
                {
                    message.map((item) => (
                        <div className="container-name">
                            <span>{item}</span>
                        </div>
                    ))
                    
                }
            </div>

            <div className="chat-inputs">
                <div className="submit">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Имя" 
                        value={state.name} 
                        onChange={handleChange}
                    />

                    <textarea 
                        placeholder="Введите текст" 
                        name="message" 
                        value={state.message} 
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleClick}>Отправить</button>
            </div>
            
        </div>
    )
}

export default Form;