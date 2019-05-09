import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from  './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail
                    author="Tom"
                    date={new Date().toString()}
                    content="good work"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail
                author="Jerry"
                date={new Date().toString()}
                content="nice blog"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Bely"
                date={new Date().toString()}
                content="nice"
                avatar={faker.image.avatar()}
            />


        </div>
    );
};

ReactDOM.render(<App/>,document.getElementById('root'));