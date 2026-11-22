import f from'fs'
const T="0Aq46:;?........999999959995999.999.............PTTP0...........58..............4414"
function r(g,u){let s=[],c=[],m=[],b=[],l=g.length,p=0,q=0,ip=0,pc=0,st=0
const d=x=>[Uint8Array.from(b),x]
for(;;){if(st++==1e6)return d(10)
if(pc>>>0>=l)return d(9)
let o=g[pc],v=T.charCodeAt(o)-48
if(!(v>=0))return d(5)
let i=v>>4,y=v>>2&3,z=v&3
if(pc+i>=l)return d(9)
if(p<y||p-y+z>256)return d(p<y?2:3)
let n=pc+1+i;pc=n
if(o<8){if(!o)return d(0)
if(o<3)s[p++]=o==1?g[n-1]<<24>>24:g.readInt32LE(n-4)
else if(o==3)p--
else if(o==4||o==6)s[p]=s[p-1-(o>4)],p++
else if(o==5)[s[p-1],s[p-2]]=[s[p-2],s[p-1]]
else[s[p-3],s[p-2],s[p-1]]=[s[p-2],s[p-1],s[p-3]]}
else if(o<35){if(o==23)s[p-1]=-s[p-1]|0
else if(o==27)s[p-1]=~s[p-1]
else{let b=s[p-1],a=s[p-2]
if(o>18&&o<23&&!b)return d(4)
let t=[a+b,a-b,Math.imul(a,b),a/b|0,a%b,(a>>>0)/(b>>>0)|0,(a>>>0)%(b>>>0),a&b,a|b,a^b,a<<b,a>>b,a>>>b,a==b?1:0,a<b?1:0,(a>>>0)<(b>>>0)?1:0][o-16-(o>22)-(o>26)-(o>30)]|0
p-=2;s[p++]=t}}
else if(o<53){if(o<51){if(o<49||(o==49?!s[--p]:s[--p]))pc=n+g.readInt16LE(n-2)}
else if(o==51){if(q==64)return d(7);c[q++]=n;pc=g[n-2]|g[n-1]<<8}
else{if(!q)return d(8);pc=c[--q]}}
else if(o<66){let a=s[p-1]
if(a>>>0>255)return d(6)
o==64?s[p-1]=m[a]|0:(m[a]=s[p-2],p-=2)}
else if(o==80){let v=s[--p],w=''+v
if(b.length+w.length>65536)return d(11)
b.push(...Buffer.from(w))}
else if(o==81){if(b.length>65535)return d(11);b.push(s[--p]&255)}
else if(o==82)s[p++]=ip<u.length?u[ip++]:-1
else return d(s[--p]&255)}}
for(let k of f.readdirSync('/input')){try{let a='/input/'+k,w=r(f.readFileSync(a+'/program.bin'),f.readFileSync(a+'/input.bin')),e='/output/'+k;f.mkdirSync(e);f.writeFileSync(e+'/stdout.bin',w[0]);f.writeFileSync(e+'/exit.txt',w[1]+'\n')}catch{}}
