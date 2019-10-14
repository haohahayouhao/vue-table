var vm = new Vue({
    el:'#app',
    data:{
        tableHeadData:[
         {label:'姓名', key:'name', disabled:true, isShow:true},
         {label:'性别', key:'sex',disabled:false, isShow:true},
         {label:'出生日期', key:'birthday',disabled:false, isShow:true},
         {label:'地址', key:'address',disabled:false, isShow:true},
         {label:'手机号码', key:'phone',disabled:false, isShow:true}
        ],
        title:['显示', '隐藏'],
        tableData:[],
        show_keys:[]
    },
    created:function(){
        this.tableData = [ 
            {name:'崔友好', sex:'男',birthday:'1986-10-23', address:'安徽省阜阳市', phone:'13024038791'},
            {name:'王飞飞', sex:'男',birthday:'1930-10-23', address:'安徽省阜阳市', phone:'13024038791'}
    ]
    },
    methods:{
        handleChange(value){
            for(let item of this.tableHeadData){
                if(value.includes(item.key)){
                    item.isShow = false;
                }else{
                    item.isShow = true;
                }
            }
        }
    }
}) 