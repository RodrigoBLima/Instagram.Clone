import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Feed from './pages/Feed'

const Routes = createAppContainer(
    createSwitchNavigator({
        Feed
    })
)
export default Routes;