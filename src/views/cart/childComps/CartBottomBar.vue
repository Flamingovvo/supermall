<template>
     <div class="bottom-menu">
        <check-button 
          :is-checked="isSelectAll" 
          class="select-all" 
          @click.native="checkClick"></check-button>
        <span>全选</span>
        <span class="total-price">合计: ¥{{totalPrice}}</span>
        <span class="buy-product">去计算({{checkLength}})</span>
     </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    name:"CartBottomBar",
    components:{
        CheckButton
    },
    data () {
      return {
      }
    },
    computed: {
        totalPrice(){
            return this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue,item) => {
                return preValue + item.count * item.price
            },0).toFixed(2)
        },
        checkLength(){
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll(){    
            if(this.$store.state.cartList.length === 0) return false

            //方法一：filter使用filter      
            //return !(this.$store.state.cartList.filter(item => !item.checked).length)
            
            //方法二：使用find
            return !this.$store.state.cartList.find(item => !item.checked)

            //方法三：普通遍历
            // for(let item of this.cartList){
            //   if(!item.checked){
            //     return false
            //   }
            // }
            // return true
        }
    },
    methods: {
      checkClick(){
        if(this.isSelectAll){ //全部选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else{ //部分或全部不选中
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
        //有些地方可以改成下面代码，但是这里不行，因为item.checked的改变会影响isSelectAll的值，然后进而影响item.checked
        //this.$store.state.cartList.forEach(item => item.checked = !this.isSelectAll)
      }
    },
}
</script>

<style scoped>
    .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
