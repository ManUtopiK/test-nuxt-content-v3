import{b as i,I as o,m as c,S as h,U as a,a6 as u,A as p,a7 as d,x as l,v as m}from"./CqVBocc7.js";const f="img",S=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,n=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=p(d(l().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return m(e,t.src)}return t.src});return(s,e)=>(c(),h(u(a(f)),{src:a(n),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};