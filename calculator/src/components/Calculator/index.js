import {useState} from 'react'
import styled from 'styled-components'

const Calculator = () => {
const [inputValue,setInputValue]= useState("")
const [result,setResult]= useState("")
const [error,setError]=useState(false)

const getInputValue=(e)=>{
    setInputValue(e.target.value)
    setResult("")
}

const getResult=()=>{
    if (inputValue!==""){
        const res=eval(inputValue)
        setResult(res)
    }
}
  return (
    <MainContainer>
        <Heading>
            Calculator
        </Heading>
        <Container>
        <Input onChange={getInputValue} type="text" />
        <Button onClick={getResult}>Calculate</Button>
        {result && <p>Result is: {result}</p>}
        {error && <p>{error}</p>}

        </Container>



    </MainContainer>
  )
}

export default Calculator


const MainContainer=styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center

`
const Container=styled.div `
width:300px`
const Heading =styled.h1 `
text-align:center;
`
const Text=styled.p``
const Input=styled.input `
height:30px;
width:100%;
margin-bottom:10px;`
const Button=styled.button `
width:100%;
padding:10px;
border-radius:20px;
`