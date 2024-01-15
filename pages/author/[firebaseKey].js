import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthorPage() {
  const [author, setAuthor] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthor);
  }, []);
  return (
    <>
      <div className="text-white ms-5 mt-5 details">
        <h2>{author.first_name} {author.last_name} {author.favorite && '❤️'}</h2>
        <a href={`mailto:${author.email}`}>{author.email}</a>
      </div>
      <hr className="text-white" />
      <div className="d-flex flex-wrap">
        {author.books?.length > 0
          ? author.books?.map((book) => (
            <BookCard key={book.firebaseKey} bookObj={book} />
          ))
          : <h2>No Books</h2>}
      </div>
    </>
  );
}
