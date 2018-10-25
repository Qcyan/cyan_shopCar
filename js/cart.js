app = new Vue({
  el: '#app',
  data: {
    allSelect:false,
    list: [
      {
        shopname: '商铺1',
        id:8,
        goods:[
          {
            type:1,
            goodsname: '无花果',
            count: 2,
            maxcount: 30,
            price: '18元',
            id:222,
            Specifi:{
              one:[
                {id: "3271", value: "大只", sort: "4"},
                {id: "3272", value: "小只", sort: "6"}
              ],
              two:[
                {id: "3273", value: "褐色", sort: "4"},
                {id: "3274", value: "白色", sort: "6"}
              ]
            }
          },
          {
            type:1,
            goodsname: '甜果',
            count: 2,
            maxcount: 30,
            price: '18元',
            id:223,
            Specifi:{
              one:[
                {id: "3271", value: "大只", sort: "4"},
                {id: "3272", value: "小只", sort: "6"}
              ],
              two:[
                {id: "3273", value: "褐色", sort: "4"},
                {id: "3274", value: "白色", sort: "6"}
              ]
            }
          }
        ],


      },
      {
        shopname: '商铺2',
        id:9,
        goods:[
          {
            type:2,
            goodsname: '咸鱼',
            count: 2,
            maxcount: 30,
            price: '18元',
            id:224,
            Specifi:{
              one:[
                {id: "3271", value: "大只", sort: "4"},
                {id: "3272", value: "小只", sort: "6"}
              ],
              two:[
                {id: "3273", value: "褐色", sort: "4"},
                {id: "3274", value: "白色", sort: "6"}
              ]
            }
          },
          {
            type:1,
            goodsname: '甜鱼',
            count: 2,
            maxcount: 30,
            price: '18元',
            id:225,
            Specifi:{
              one:[
                {id: "3271", value: "大只", sort: "4"},
                {id: "3272", value: "小只", sort: "6"}
              ],
              two:[
                {id: "3273", value: "褐色", sort: "4"},
                {id: "3274", value: "白色", sort: "6"}
              ]
            }
          }
        ]

      }
    ],
    seltype_num:0,
    headsel_value:['全部','减价中','折扣']
  },
  computed: {
  },
  methods: {
    selAll:function(target){
      this.allSelect = target.checked
      var _this = this
      $.each(this.list,function (index,value) {
        console.log(value)
          value.sel = _this.allSelect
        $.each(_this.list[index].goods,function (idx,val) {
          val.sel = _this.allSelect
        })
      })
    },
    selshop:function (item) {
      item.sel = !item.sel
      $.each(item.goods,function (idx,val) {
        val.sel=item.sel
      })
      this.selshop_public()
    },
    selshop_public:function () {
      // 根据商铺显示判断是否显示总全选
      var selshop_state = true
      $.each(this.list,function (index,value) {
        if(!value.sel){
          selshop_state = false
        }
      })
      if(!selshop_state){
        this.allSelect = false
      }else{
        this.allSelect = true
      }
    },
    selgoods:function (goods,shopIndex) {
      goods.sel = !goods.sel
      var selshop_state = true
      $.each(this.list[shopIndex].goods,function (idx,val) {
        if(val.sel==false){
          selshop_state = false
        }
      })
      if(!selshop_state){
        this.list[shopIndex].sel = false
      }else{
        this.list[shopIndex].sel = true
      }
      this.selshop_public()
    },
    headsel:function (index) {
      this.seltype_num = index
    },
  },
  mounted: function () {
    var _this = this
    $.each(this.list,function (index,value) {
      _this.$set(value,'sel',false)
        $.each(value.goods,function (idx,val) {
          _this.$set(val,'sel',false)
        })
    })
    console.log(this.list)
  }

})

