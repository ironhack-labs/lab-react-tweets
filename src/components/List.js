import Person from "./Person";

const List = (props) => {

    console.log(props);

    return (
        <div>
            {props.list.map((person) => (
                <Person name={person.name} age={person.age} address={person.address} />
            ))}
        </div>
    );
};

export default List;