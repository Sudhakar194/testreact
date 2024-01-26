import 'bootstrap/dist/css/bootstrap.css'
import CardExample from './CardExample';
import ConditionalRendering from './ConditionalRendering';
import RenderingLists from './RenderingLists';

{/* You can declare many components in one file, but large files can get difficult to navigate.
To solve this, you can export a component into its own file, and then import that component 
from another file: */}
function Gallery(){
    return(
        <img src='https://i.imgur.com/MK3eW3As.jpg' alt='Johnson' />
    );
}

function ItemList(){
    return(
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>
    );
}

const profile = {
    name: 'sudhakar reddy',
    theme:{
        backgroundcolor : 'black',
        color: 'pink'
    }
};

let count = 0;
function CatCount({countVal}){
    count = count + 1
   return (
   <h2> <b> Count # {count} # {countVal}</b></h2>);
}

export default function App(){
    return (
        <>
            <div>
                <h1 style={profile.theme}>{profile.name}</h1>
                <section>
                    <h1>scientists</h1>
                    <Gallery/>
                    <Gallery/>
                </section>               
            </div>    
            <ItemList/>
            <CardExample/>    
            <ConditionalRendering/>
            <RenderingLists/>
            <CatCount countVal={1}/>
            <br/>
            <CatCount countVal={2}/>
        </>
    );
}