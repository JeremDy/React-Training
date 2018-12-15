import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import data from './data';
import faker from 'faker';



const App = ()=>(
    <div className="ui container comments">
        <ApprovalCard >
            <CommentDetail 
                author="sam"
                time="6h" 
                message="hello" 
                image={faker.image.avatar()}
            />
        </ApprovalCard>
    
        <CommentDetail 
            author="alain"
            time="20h" 
            message="pas mal ce blog" 
            image={faker.image.avatar()}
        />
        <CommentDetail 
            author="patrick" 
            time="22h" 
            message="hop, hop ! :)"
            image={faker.image.avatar()}
        />         
    </div>
);




ReactDom.render(
    <App />, 
    document.getElementById('root')
);