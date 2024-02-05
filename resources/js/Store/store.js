import {createStore} from 'vuex'

const store = createStore({

    state: {
        textOne: 'Texto Um',
        textTwo: 'Texto dois',
        severity: '',
        context: '',
        dialog: false
    },

    getters: {
        getTextOne(state){
            return state.textOne;
        },
        getTextTwo(state) {
            return state.textTwo;
        },
        getSaverity(state){
            return state.severity;
        },
        getContext(state){
            return state.context;
        },

        getDialog(state){
            return state.dialog;
        }
    },

    mutations: {
        setText1(state, payload){
           state.textOne = payload
        },
        setText2(state, payload){
            state.textTwo = payload
        },

        setMessage(state, payload){
            state.severity = payload.saverity;
            state.context = payload.context;
        },

        openDialog(state, payload){
            state.dialog = payload;
        }
    },

    actions: {
        changeText1(context, value){
            context.commit('setText1', value)
        },

        startMessage(context, value){
            context.commit('setMessage', value)
        },

        openDialog(context, value){
            context.commit('openDialog', value)
        }
    }
})

export default store;
