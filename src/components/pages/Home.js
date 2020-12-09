import React from 'react';
import Cards from '../layouts/Cards';

let Test ='Home'; 
let Title='';

if(Test==='Home'){
    Title='Home Page Title';
}else{
    Title='Title';
}

const Home = () => {

    return  (

        <div className="container">
            <h1 className="py-4"> {Title} </h1>
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. </p>
            <Cards />
        </div>

    )


}

export default Home;