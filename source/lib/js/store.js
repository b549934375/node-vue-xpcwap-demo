
let Store = {
    state:{
        hostname:location.hostname,
        isOnline:location.hostname == 'h5.xinpianchang.com',
        comments:0,
        baseUrl:'http://www.xinpianchang.com',
        loginUrl:'',
        LoginUserId: 0,
        windowHeight:$(window).height()   //window的高度
    },
    getters: {
        windowHeight: state => {
            return state.windowHeight = $(window).height();
        },
        baseUrl: state => {
            switch (state.hostname){
                case 'node.cbw.xinpianchang.com':
                    return state.baseUrl = 'http://qcc.test.xinpianchang.com';
                case 'h5.xinpianchang.com':
                    return state.baseUrl =  'http://www.xinpianchang.com';
                default:
                    return state.baseUrl = 'http://www.xinpianchang.com'
            }
        },
        loginUrl: (state,getters) => {

            return state.loginUrl = getters.baseUrl + '/index.php?app=user&ac=login&callback=' + encodeURIComponent(location.href);

        },

        routePath: state => {

            return state.isOnline ? '' : '/View';

        }
    },
    mutations:{
        loginState (state,LoginUserId) {
            state.LoginUserId = LoginUserId;
        },

        downloadShow (state) {
          state.download = 1;
        },
        
        sendMsg (state,userid){

            if(state.LoginUserId){

                location.href = state.baseUrl + '/user/message/ts-add/touserid-' + userid;

            }else{

                location.href = state.baseUrl + '/user/mcard/ts-mcard_form/id-' + userid;
    
                
                
            }

        },

        commentsShow (state) {
          state.comments = 1
        }
    }
}

export default Store;
