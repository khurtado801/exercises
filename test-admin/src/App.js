import React from 'react';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="posts"
            icon={PostIcon}
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
        />
        <Resource name="users" icon={UserIcon} list={UserList} />
    </Admin>
);
export default App;