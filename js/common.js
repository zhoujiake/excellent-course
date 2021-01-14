var baseUrl = "https://8fa3a805-2fda-403b-9930-540dc277e6c7.bspapp.com/http/"// 全局Url

//针对对象数据进行排序propertyName 要排序的属性名，order 1为正序0为倒序
function compare(propertyName, order) {
    return function (object1, object2) { 
        var value1 = object1[propertyName]; 
        var value2 = object2[propertyName]; 
        if(order==0){
            if (value2 < value1) { 
                return -1; 
            } 
            else if (value2 > value1) { 
                return 1; 
            } 
            else { 
                return 0; 
            } 
        }if(order==1){
            if (value2 > value1) { 
                return -1; 
            } 
            else if (value2 < value1) { 
                return 1; 
            } 
            else { 
                return 0; 
            } 
        }
        
    }
}