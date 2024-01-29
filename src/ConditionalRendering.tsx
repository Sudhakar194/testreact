function Item({name,isPacked}){
    return(
        <li>
          <del> {name} {isPacked ?  ' ✔' : ''}</del>  
        </li>
        
    );
}


// Your components will often need to display different things depending on different conditions.
// In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

function Drink({name}){
    let part, caffeine, age;
  if (name === 'tea') {
    part = 'leaf';
    caffeine = '15–70 mg/cup';
    age = '4,000+ years';
  } else if (name === 'coffee') {
    part = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}


function Drink1({name}){
    const drink = {
        tea: {
            part : 'leaf',
            caffeine : '15–70 mg/cup',
            age : '4,000+ years'
        } ,
        coffee: {
            part : 'bean',
            caffeine : '80–185 mg/cup',
            age : '1,000+ years'
        }
}

const info = drink[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

 function ConditionalRendering(){
    const count = 0;
    return(
        <div>
            <h1>hello</h1>
            <ul>
                <Item name="apple" isPacked={true} />
                <Item name="banana" isPacked={true} />
                <Item name="orange" isPacked={false} />                
            </ul>
            <p>pear1 {true && '✔'} pear2</p>
            <div> { count && <p>count : {count } </p> }</div>
           <div> { count >= 0 && <p>count : {count } </p> }</div>
         <p> if condition and table</p>  <Drink name="tea" />
         <p> json and table</p>    <Drink1 name="coffee" />
        </div>
    );

}

export default ConditionalRendering;