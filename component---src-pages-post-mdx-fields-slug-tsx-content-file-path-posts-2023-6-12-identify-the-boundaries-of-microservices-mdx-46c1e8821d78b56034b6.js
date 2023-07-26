"use strict";(self.webpackChunksingsdev=self.webpackChunksingsdev||[]).push([[559],{9214:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(1151),i=n(7294);function s(e){const t=Object.assign({p:"p",h2:"h2",hr:"hr"},(0,a.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.p,null,"At the beginning of this project, I was unaware of the potential size and complexity that an internal management system could reach. As a full-stack software engineer, this was my first experience working on such a comprehensive project. While I cannot definitively classify it as a large-scale system, it is undoubtedly larger than anything I had previously encountered. Over the course of three years, the source code expanded to encompass more than 30 git repositories, including both the backend API and frontend modules."),"\n",i.createElement(t.p,null,"The delineation of microservices was primarily based on different domains and functionalities. The architecture design was a collaborative effort, with my primary responsibility lying in the fundamental and initial design of the system. While there were some sound decisions made, there were also numerous mistakes along the way. One significant issue that I have identified in our current architecture design is the incorrect definition of service boundaries:"),"\n",i.createElement(t.h2,null,"Some services contain APIs for multiple domains and products."),"\n",i.createElement(t.p,null,"Consequently, these services are managed by multiple teams due to the intermingling functionalities of different domains within the same services. As a result, the ownership of the service has become blurred. Deployment also poses a challenge since any changes made could potentially impact multiple domains and products, each owned by different teams. A team might make alterations specific to their product, but unintentionally affect the code used by other products owned by different teams."),"\n",i.createElement(t.h2,null,"Certain services would be better off merged into a single service."),"\n",i.createElement(t.p,null,"These services pertain to the same domain and products, and they consistently make API calls to one another. This unnecessary inter-service communication has a negative impact on performance. Additionally, due to the separation of services, the databases are also segregated, making data joins difficult and necessitating the implementation of synchronization mechanisms. This adds unnecessary complexity and maintenance costs."),"\n",i.createElement(t.p,null,"Unfortunately, it is not uncommon for relatively new projects to accumulate technical debt that must be addressed later. In our case, this was largely due to the team's lack of experience."),"\n",i.createElement(t.hr),"\n",i.createElement(t.p,null,"Thanks ChatGPT again for improving my writing :)"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?i.createElement(t,e,i.createElement(s,e)):s(e)},r=n(7735),l=n(6089),c=n(2658),d=n(1508),m=n(9241),u=n(5715);const h=e=>{var t,n,s,o,h,f,p;let{data:g,children:y}=e;const v=null!==(t=null===(n=g.mdx)||void 0===n||null===(s=n.frontmatter)||void 0===s?void 0:s.title)&&void 0!==t?t:"Blog Post";return(0,i.useEffect)((()=>(0,u.z)("BlogPost",v)),[]),i.createElement(r.Z,{pageTitle:v},i.createElement(l.Z,{maxWidth:"md",sx:{padding:5}},i.createElement(c.Z,{component:"h1",sx:{fontSize:{xs:"2rem",md:"2.5rem"}}},null===(o=g.mdx)||void 0===o||null===(h=o.frontmatter)||void 0===h?void 0:h.title),i.createElement(c.Z,{component:"p"},null===(f=g.mdx)||void 0===f||null===(p=f.frontmatter)||void 0===p?void 0:p.date),i.createElement(d.Z,{sx:{img:{padding:1,background:"#fff"}}},i.createElement(a.Zo,{components:{code:m.E}},y))))};function f(e){return i.createElement(h,e,i.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-post-mdx-fields-slug-tsx-content-file-path-posts-2023-6-12-identify-the-boundaries-of-microservices-mdx-46c1e8821d78b56034b6.js.map