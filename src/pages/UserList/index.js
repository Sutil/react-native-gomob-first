import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native';
import {
  Container,
  Form,
  Input,
  AddButton,
  User,
  Name,
  Login,
  Avatar,
  UserInfo,
} from './styles';

export default function UserList() {
  const users = [
    {
      login: 'Sutil',
      name: 'Eduardo Sutil',
      avatar: 'https://avatars0.githubusercontent.com/u/2270552?s=460&v=4',
    },
    {
      login: 'alex',
      name: 'Alex',
      avatar: 'https://avatars0.githubusercontent.com/u/2270552?s=460&v=4',
    },
    {
      login: 'Roberto',
      name: 'Rob',
      avatar: 'https://avatars0.githubusercontent.com/u/2270552?s=460&v=4',
    },
  ];

  return (
    <Container>
      <Form>
        <Input placeholder="Usuário do Github" />
        <AddButton>
          <Icon name="add" size={20} color="#fff" />
        </AddButton>
      </Form>

      <FlatList
        data={users}
        keyExtractor={item => String(item.login)}
        renderItem={({item}) => (
          <User>
            <Avatar
              source={{
                uri:
                  'https://avatars0.githubusercontent.com/u/2270552?s=460&v=4',
              }}
            />
            <UserInfo>
              <Name>{item.name}</Name>
              <Login>{item.login}</Login>
            </UserInfo>
          </User>
        )}
      />
    </Container>
  );
}

UserList.navigationOptions = {
  title: 'Usuários',
};
