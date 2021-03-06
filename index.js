import Button from './plugin/button'
import Input from './plugin/input'
import Container from './plugin/container'
import Layout from './plugin/layout'
import Popover from './plugin/popover'
import Toast from './plugin/toast'
import Tab from './plugin/tab'
import Collapse from './plugin/collapse'

export default {
    Button, Input, Layout, Container, Popover, Toast, Tab, Collapse,
    install(Vue, options) {
        Vue.use(Button)
        Vue.use(Input)
        Vue.use(Layout)
        Vue.use(Container)
        Vue.use(Popover)
        Vue.use(Toast)
        Vue.use(Tab)
        Vue.use(Collapse)
    }
}