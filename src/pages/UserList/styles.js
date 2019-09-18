import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  border: solid 1px #eee;
  border-radius: 4px;
  height: 50px;
  flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background: ${colors.secondary};
  border-radius: 4px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
`;

export const User = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 4px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const UserInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const Login = styled.Text`
  font-size: 14px;
  color: #777;
`;
