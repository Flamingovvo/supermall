export default {

    addCounter(state,payload){
        payload.count++
    },
    addToCart(state,payload){
        payload.checked = true
        state.cartList.push(payload)
    }
    //mutations中的每个方法尽可能完成的事件比较单一一点
        // addCart(state,payload){
        //     //查找之前数组中是否有该商品
        //     //第一种方法
        //     // let oldProduct = null;
        //     // for(let item of state.cartList){
        //     //     if(item.iid === payload.iid){
        //     //         oldProduct = item;
        //     //     }
        //     // }
        //     //查找之前数组中是否有该商品
        //     //第二种方法
        //     let oldProduct = state.cartList.find(item => item.iid === payload.iid)

        //     // 判断oldProduct
        //     if(oldProduct){
        //         oldProduct.count += 1
        //     }else{
        //         payload.count = 1
        //         state.cartList.push(payload)
        //     }           
        // }
}