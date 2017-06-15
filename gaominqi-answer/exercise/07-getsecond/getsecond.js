function getSecond(arr) 
{
    var first=-Infinity,second=-Infinity;//用负无穷
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>first)
        {
            second=first;
            first=arr[i];//即[first,second]=[arr[i],first];
        }
        else if(n>second){
            second=n;
        }
    }
    return second;
}
//可以用一句return arr.slice(0).sort((a,b)=>b-a)[1];代替整个函数