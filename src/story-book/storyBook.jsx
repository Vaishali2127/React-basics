// import React from 'react';
// const Component1 = () => {
//   return (
//     <>
//       <h1>hello world</h1>
//     </>
//   );
// };

// under the hood
// function Component1() {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// }

// export default Component1;

import * as s from './styles';
import { story } from '../data';
// import { StoryImg } from '../assets/Gruffalo.jpeg';

// <-------- using prop solution1 -------->
// const StoryBook = (props) => {
// const { title, author, id, children } = props;
//   return (
//     <s.Wrapper>
//       <s.InnerWrapper key={id}>
//         {/* <img src={StoryImg} alt="" /> */}
//         <h3>{title}</h3>
//         <h5>{author}</h5>
//         {children}
//       </s.InnerWrapper>
//       {console.log(children)}
//     </s.Wrapper>
//   );
// };

// <-------- using prop solution2 -------->
// const StoryBook = ({ title, author, id, children, img }) => {
//   const handleClick = () => {
//     console.log('hello');
//   };
//   const handleAuthor = (author) => {
//     console.log(author);
//   };

//   // attribute , eventHandler
//   // onClick , mouseOver

//   return (
//     <s.Wrapper>
//       <s.InnerWrapper
//         key={id}
//         onMouseOver={() => {
//           console.log(id);
//         }}
//       >
//         <img src={img} alt="" />
//         <h3>{title}</h3>
//         <h5>{author}</h5>
//         {children}
//         {console.log(children)}
//         <button type="button" onClick={handleClick(author)}>
//           Read Now
//         </button>
//         {/* if we do this  'onClick={handleAuthor(author)}' then function run for all the possiblites at once ,
//         so we need to write the arrow function to trigger that function only whenever we want to !
//         */}
//         <button
//           type="button" // onClick={handleAuthor(author)}
//           onClick={() => {
//             handleAuthor(author);
//           }}
//         >
//           know author
//         </button>
//       </s.InnerWrapper>
//     </s.Wrapper>
//   );
// };

// <-------- using map -------->
const StoryBook = (props) => {
  const { title, author, id, children, img } = props;
  const handleClick = () => {
    console.log('hello');
  };
  const handleAuthor = (author) => {
    console.log(author);
  };
  return (
    <s.Wrapper>
      {/* {story.map((el) => {
        return ( */}
      <s.InnerWrapper
        key={id}
        onMouseOver={() => {
          console.log(id);
        }}
      >
        <img src={img} alt="" />
        <h3>{title}</h3>
        <h5>{author}</h5>
        {children}
        <button
          type="button" // onClick={handleAuthor(author)}
          onClick={() => {
            handleAuthor(author);
          }}
        >
          know author
        </button>
      </s.InnerWrapper>
      {/* );
      })} */}
    </s.Wrapper>
  );
};

export default StoryBook;
