let c = [13,12,13,12,13];
const count = {};
for (let i = 0; i < c.length; i++) 
{
count[c[i]] = (count[c[i]] || 0) + 1;
for (let j = 0; j < c.length; j++) 
{
if(count[c[i]]==count[c[j]])
{
   console.log(c[j]);
}
}
}





 
