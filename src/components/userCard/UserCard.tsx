import './userCard.css'

interface IUser {
    name: string;
    age: number;
    hobby: string
}

export default function UserCard({name, age, hobby}: IUser): JSX.Element{
    return (
        <div className='userCard'>
            <h4>Name: {name}</h4>
            <p>Age: {age}</p>
            {/* если hobby - true, то часть выражения после && будет показана */}
            {/* {hobby && (<p>Hobby: {hobby}</p>)}     */}
            {hobby ? (<p>Hobby: {hobby}</p>) : (<p>No hobby 😫</p>)}                 
        </div>
    );
};
