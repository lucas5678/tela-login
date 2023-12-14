import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { RouterDash } from '../../Routers/RotasSistema';

export default function Dash() {
  const navigation = useNavigation();

  return (
    <NavigationContainer independent={true}>
     <RouterDash/>
    </NavigationContainer>
  );
}
