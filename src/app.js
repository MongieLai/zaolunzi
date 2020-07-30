import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import plugin from './plugin'

Vue.use(plugin)

Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-input', Input)
Vue.component('l-row', Row)
Vue.component('l-col', Col)
Vue.component('l-layout', Col)
Vue.component('l-layout', Layout)
Vue.component('l-header', Header)
Vue.component('l-content', Content)
Vue.component('l-sider', Sider)
Vue.component('l-footer', Footer)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            inputMessage: 'test'
        }
    },
    methods: {
        xxx(e) {
            console.log(e)
        },
        hh() {
            this.$toast('很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字', {
                closeButton: {
                    message: '关闭',
                    callBack: () => {
                        console.log('123123123')
                    }
                },
                // position: '',
                autoClose: false
            })
        }
    }
})