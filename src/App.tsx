import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { User } from './users/types';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import store,{ AppDispatch } from './redux/store';
import { createUser, updateUser } from './users';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleFormSubmit = (values: User) => {
    if (values.user_id) {
      dispatch(updateUser(values.user_id, values));
    }
    else{
      dispatch(createUser(values));
    }
  };

  return (
    <Provider store={store}>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold'>User List</h1>
        <UserList />
        <h2 className='text-2xl font-bold mt-5'>Add New User</h2>
        <UserForm onSubmit={handleFormSubmit} />
      </div>
    </Provider>
  )
};


export default App;
