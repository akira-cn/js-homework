#include<iostream>
using namespace std;
const int M=1000000;
int main()
{
    bool isprime[M];
    for(int i=0;i<M;i++)
      isprime[i]=true;
    isprime[0]=isprime[1]=false;
    for(int i=2;i<M;i++)
    {
        if(isprime[i])
        {
            for(int j=i*2;j<M;j+=i)
            isprime[j]=false;
        }
    }

}