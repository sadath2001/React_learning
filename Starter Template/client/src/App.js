import { useQuery } from "@tanstack/react-query";
import Form from "./components/Form";
function App() {
  const { data ,status,isFetching} = useQuery({
    queryKey: ['todo'],
    queryFn: async () => await (await fetch("http://localhost:8000/todo")).json(),
  });
  
    if(isFetching)
        {
          return <h1>loading...</h1>
        }

  // console.log(data)
  return (
      <div>
        <Form/>

        {"status: "+status}
      
        {data && data.data && data.data.map((todo)=>(
          <li key={todo.id}>{todo.title}</li>
        ))}
      </div>
  );
}

export default App;
