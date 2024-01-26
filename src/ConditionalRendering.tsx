function Item({name,isPacked}){
    return(
        <li>
            {name} {isPacked ? '  Yes' : ' No'}
        </li>
    );
}


// Your components will often need to display different things depending on different conditions.
// In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

 function ConditionalRendering(){
    return(
        <div>
            <h1>hello</h1>
            <ul>
                <Item name="apple" isPacked={true} />
                <Item name="banana" isPacked={true} />
                <Item name="orange" isPacked={false} />

            </ul>
        </div>
    );

}

export default ConditionalRendering;