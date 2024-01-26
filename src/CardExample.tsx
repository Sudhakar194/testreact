import { Children } from "react";

{/* React components use props to communicate with each other. Every parent component can pass some
 information to its child components by giving them props. Props might remind you of HTML attributes,
 but you can pass any JavaScript value through them, including objects, arrays, functions, and even JSX!*/}

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}

function Avatar({person, size}){
    return(
        <img className="avatar" 
         src={getImageUrl(person)}
         alt={person.name}
         width={size}
         height={size}></img>
    );
}

//  utils.txs
function getImageUrl(person, size = 's'){
    return( 'https://i.imgur.com/'   + person.imageId + size + '.jpg');
}

function CardExample(){
    return(
        <Card>
            <Avatar
                size= {100} 
                person={{
                    name: 'image one',
                    imageId: 'MK3eW3A'
                }}
            />
        </Card>
    );
}

export default CardExample;
