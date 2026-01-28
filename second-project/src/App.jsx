
import './App.css'
import Card from './components/Card'
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
function createID(){
  if(typeof crypto !== "undefined" && crypto.randomUUID){
  console.log(crypto.randomUUID())
    return crypto.randomUUID(); 
  }
return `${Date.now()}+${Math.random().toString(16).slice(2)}`
}

function App() {
 c
  const [expenses, setExpenses] = useState([
    {id:createId(), title:"Mobile", amount: 1000, category:"Forsale"},
    {id:createId(), title:"Computer", amount: 100, category:"Bills"},
  ]);

  function handleAddExpense(data){
    const newExpense = {id: createId(), ...data};
    setExpenses((prev)=> [newExpense, ...prev])
  }
  
return (
 <div className="page">
    <header className="header">
      <div><h1 className="title">Expense Tracker Application</h1>
      <p className="subtitle">Weel 1 + Week 2 Practice Project</p>
      </div>
    </header>
  <Card title={"Add Expense"}>
  <ExpenseForm onAddExpense={handleAddExpense}></ExpenseForm>
  </Card>

    <Card title={"Expenses"}>
 <ExpenseList expenses={expenses}>
 </ExpenseList>
    </Card>
  </div>
)
 
}

export default App
