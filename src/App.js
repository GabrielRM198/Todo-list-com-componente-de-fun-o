import React, {useState} from 'react'
import styled from 'styled-components'


export const Container = styled.div`
background-color: black;
width: 100%;
height: 900px;
`

export const Div = styled.div`
background-color: blue;
width: 50%;
height: 500px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

border-radius: 30px;
`
export const Input = styled.input`
  margin: 10px;
  border-radius: 20px;
`

export const Add = styled.button`
color: white;
background-color: black;
border-radius: 10px;
`


export const Button = styled.button`
  background-color: black;
  color: red;
  margin-left: 30px;
`
export const Li = styled.li`
  color: white;
  
`


export default function App(){
  const [input, setInput] = useState()
  const [list, setList] = useState([])

  const handleClick = () => {
    if (input !== ""){

      const LimparInput ={
        value: input,
        id: Date.now(),
        status: false
      }

      setList([...list, LimparInput])
      setInput("")
    }
  }

   function Delete(id){
    const FiltroLista = list.filter(item => item.id !== id)
    setList(FiltroLista)
   }

  return(
    <Container>
    <Div>
      <h1>ToDo List</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <Input onChange={(e) => {setInput(e.target.value)}} value={input} />
        <Add onClick={() => {handleClick()}}>ADICIONAR</Add>
        
      </form>
      
      <lu> {list.map(item => (
        <Li>
          {item.value} <Button onClick={()=>{Delete(item.id)}}>X</Button>
        </Li> 
      ))} </lu>
    </Div>
    </Container>
  )
}