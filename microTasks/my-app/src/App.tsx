import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './site/NewComponent';
import {Button} from './components/Button';
import {MoneyFilter} from './components/MoneyFilter';
import {Fullinput, InputType} from './components/Fullinput';
import {Input} from './components/Input';
import {ButtonInput} from './components/ButtonInput';

export type FilterType = 'All' | 'Rubls' | 'Dollars'  // FILTER

function App() {
// BUTTON
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, 21)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber)
    }
    const Button3Foo = (subscriber: string) => {
        console.log(subscriber)
    }

// USESTATE
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }
    const onClickZero = () => {
        setA(0);
    }


// FILTER
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubls', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubls', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubls', value: 50, number: ' v1234567890'},
    ])


// INPUT
    let[message, setMessage] = useState<InputType[]>([
        {message:"message1"},
        {message:"message2"},
        {message:"message3"}
    ])

    let [title, setTitle] = useState("");

    const addToMessage = (title:string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message ])
    }

    const callBackButtonHandler = ()=>{
        addToMessage(title)
        setTitle("")
    }

    return (
        <div className="App">
            {/*Components*/}
            <p>=====================================================================================</p>
            <Header title={'NEW FOOTER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer/>
            <NewComponent/>

            {/*Button*/}
            <p>=====================================================================================</p>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Button 1', 21)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Button 2', 22)}/>
            <Button name={'Stupid Button'} callBack={() => Button3Foo('I\'m stupid button')}/>

            {/*useState*/}
            <p>=====================================================================================</p>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>PlusPlus</button>
            <button onClick={onClickZero}>0</button>

            {/*Filter*/}
            <p>=====================================================================================</p>
            <MoneyFilter money={money}/>

            {/*Input*/}
            <p>=====================================================================================</p>
            <Input title={title} setTitle={setTitle}/>
            <ButtonInput callBack={callBackButtonHandler} name={"+"} />
            {message.map((el:InputType,index)=>{
                return(
                    <div key={index}>
                        {el.message}
                    </div>
                )
            })}
            <p>=====================================================================================</p>

        </div>
    );
}

export default App;
