// import React, { useState } from 'react';
// import './Querynew.css';

// const QuerySection = () => {
//     const [questions, setQuestions] = useState([]);
//     const [newQuestion, setNewQuestion] = useState('');
//     const [replyTexts, setReplyTexts] = useState({});

//     const handleQuestionSubmit = (e) => {
//         e.preventDefault();
//         if (newQuestion.trim()) {
//             setQuestions([...questions, { id: Date.now(), text: newQuestion, replies: [] }]);
//             setNewQuestion('');
//         }
//     };

//     const handleReplyChange = (questionId, replyText) => {
//         setReplyTexts({
//             ...replyTexts,
//             [questionId]: replyText
//         });
//     };

//     const handleReplySubmit = (e, questionId) => {
//         e.preventDefault();
//         const replyText = replyTexts[questionId] || '';
//         if (replyText.trim()) {
//             setQuestions(questions.map(q =>
//                 q.id === questionId
//                     ? { ...q, replies: [...q.replies, replyText] }
//                     : q
//             ));
//             setReplyTexts({ ...replyTexts, [questionId]: '' });
//         }
//     };

//     return (
//         <div className="query-section">
//             <form onSubmit={handleQuestionSubmit} className="question-form">
//                 <textarea
//                     value={newQuestion}
//                     onChange={(e) => setNewQuestion(e.target.value)}
//                     placeholder="Type your question here..."
//                 />
//                 <button type="submit">Submit Question</button>
//             </form>
//             <div className="questions-list">
//                 {questions.map((question) => (
//                     <div key={question.id} className="question-item">
//                         <p>{question.text}</p>
//                         <div className="replies">
//                             {question.replies.map((reply, index) => (
//                                 <div key={index} className="reply-item">{reply}</div>
//                             ))}
//                         </div>
//                         <form
//                             onSubmit={(e) => handleReplySubmit(e, question.id)}
//                             className="reply-form"
//                         >
//                             <input
//                                 type="text"
//                                 value={replyTexts[question.id] || ''}
//                                 onChange={(e) => handleReplyChange(question.id, e.target.value)}
//                                 placeholder="Type your reply here..."
//                             />
//                             <button type="submit">Submit Reply</button>
//                         </form>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

//  export default QuerySection;
