export default{
    addCart(context,payload){           
        //查找之前数组中是否有该商品
        //第二种方法
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 判断oldProduct
        if(oldProduct){
            context.commit('addCounter',oldProduct)
        }else{
            payload.count = 1
            //state.cartList.push(payload)
            context.commit('addToCart',payload)
        }           
    }
}