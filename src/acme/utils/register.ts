import { App } from 'vue'

import MainContainer from '../components/MainContainer.vue'
import GridBranchNode from '../components/GridBranchNode.vue'
import SplitViewContainer from '../components/SplitViewContainer.vue'
import SplitViewView from '../components/SplitViewView.vue'
import PanelContainer from '../components/PanelContainer.vue'
import SashContainer from '../components/SashContainer.vue'


const useRegisterComponents = (app: App): void => {
    app.component('MainContainer', MainContainer)
    app.component('GridBranchNode', GridBranchNode)
    app.component('SplitViewContainer', SplitViewContainer)
    app.component('SplitViewView', SplitViewView)
    app.component('PanelContainer', PanelContainer)
    app.component('SashContainer', SashContainer)
}

export {
    useRegisterComponents
}