import React, { useState } from 'react'

export default function Counter() {

    // let value = 120;
    // arr[0] - value
    // arr[1] - setter function
    const [value, setValue] = useState(120);
    // other types of state
    const [str, setStr] = useState("aerga");
    const [flag, setFlag] = useState(true);
    const [obj, setObj] = useState({ name: "John", age: 30 });
    const [arr, setArr] = useState([1, 2, 3, 4, 5]);

    function plus() {
        // value++;
        setValue(value + 1);
    }
    function minus() {
        // value--;
        setValue(value - 1);
    }

    return (
        <div>
            <span>Counter: {value}</span>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}
