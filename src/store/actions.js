export default{
    addCart(context,payload){
        return new Promise((resolve,reject) =>{
            //查找之前数组中是否有该商品
            //第二种方法
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            // 判断oldProduct
            if(oldProduct){ //当前商品数量加1
                context.commit('addCounter',oldProduct)
                resolve("当前商品数量加1")
            }else{ //添加新的商品
                payload.count = 1
                //state.cartList.push(payload)
                context.commit('addToCart',payload)
                resolve("添加新的商品")
            }       
        })           
            
    }
}