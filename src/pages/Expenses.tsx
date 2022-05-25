import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from 'reducers/post/actions';
import { RootState } from 'reducers';

const Expenses = () => {
  const data = useSelector((state: RootState) => state.posts.data);
  const requesting = useSelector((state: RootState) => state.posts.requesting);
  console.log('expenses', requesting, data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="expenses">
      <header className="expenses-header">
        {requesting ? (
          <span>Loading...</span>
        ) : data && data.length > 0 ? (
          <div>
            <ul className="list-group">
              {data.map((item) => (
                <li key={item.id} className="list-group-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Data is empty</div>
        )}
      </header>
    </div>
  );
};

export default Expenses;
