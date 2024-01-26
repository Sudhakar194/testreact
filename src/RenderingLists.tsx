


// You will often want to display multiple similar components from a collection of data. You can use 
// JavaScript’s filter() and map() with React to filter and transform your array of data into an array
//  of components.

// For each array item, you will need to specify a key. Usually, you will want to use an ID from the 
// database as a key. Keys let React keep track of each item’s place in the list even if the list changes.
function RenderingLists(){
    const iteamsList = people.map(person => 
          <li key={person.id}>
                <img src={getImageUrl(person)} alt={person.name}/>
                <p> 
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </p>
          </li>
        )


 return(
    <article>
        <h1>Scientists</h1>
        <ul>{iteamsList}</ul>
    </article>
 );

}

export default RenderingLists;

function getImageUrl(person){   
    let url =  'https://i.imgur.com/' + person.imageId+ 's.jpg'
    return(url);
    console.log(url);
}

export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];