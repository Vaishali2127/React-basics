import StoryBook from './storyBook';
import { story } from '../data';

const BookList = () => {
  return (
    <div>
      {story.map((book) => {
        return <StoryBook key={book.id} {...book}></StoryBook>;
      })}
    </div>
  );
};

export default BookList;
