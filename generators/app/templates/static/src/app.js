import reazy from 'reazy';
import mobx from './services/mobx';
import reactNative from './services/react-native';

const app = reazy();

app.use(mobx(), 'state');
app.use(reactNative(), 'reactNative');

export default app;
