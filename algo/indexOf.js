function indexOf(arr,item){
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]===item){
            return i
        }
    }
    return -1
}
