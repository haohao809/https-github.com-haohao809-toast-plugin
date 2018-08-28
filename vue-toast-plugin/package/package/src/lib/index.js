import VueToastPlugin from './VueToastPlugin'

const comment = {
	install: function(Vue) {
		Vue.component('VueToastPlugin',VueToastPlugin)
	}
}
if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(comment)
}

export default comment