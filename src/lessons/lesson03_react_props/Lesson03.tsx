import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";


export default function Lesson03(): JSX.Element {
    function printHello(){
        alert('Hello!');        
    }

    return (
        <div>
            <h2>React Props 😋</h2>
            <MyButton text={'Print "Hello!"'} func={printHello} type={'button'}/>
            {/* пример передачи небольшой функции прямо внутри тега вызова компонента без прописанного заранее обработчика */}
            <MyButton text={'Print "Bye!"'} func={() => alert('Good Bye!')} type={'button'}/>
            <UserCard name={'Peter'} age={35} hobby={'hiking'}/>
            <UserCard name={'Rosa'} age={40} hobby={'diving'}/>
            <UserCard name={'Anton'} age={28} />
        </div>
    );
};