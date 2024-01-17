/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
import BookCard from '../../components/BookCard';

export default function ViewAuthorPage() {
  const [author, setAuthor] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  const viewTheAuthorDetails = () => {
    viewAuthorDetails(firebaseKey).then(setAuthor);
  };

  useEffect(() => {
    viewTheAuthorDetails();
  }, [firebaseKey]);
  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={author.image} alt={author.first_name} style={{ height: '200px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {author.first_name}{author.last_name}
            {author.favorite ? ' 🤍' : ''}
          </h5>
          Author Email: <a href={`mailto:${author.email}`}>{author.email}</a>
          <hr />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {author.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} onUpdate={viewTheAuthorDetails} />
        ))}
      </div>
    </>
  );
}
