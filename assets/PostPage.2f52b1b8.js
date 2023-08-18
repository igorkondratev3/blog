import{u as _,F as p,S as v,T as d,a as C}from"./TheHeader.75ce592a.js";import{r,c as i,n as m}from"./index.dad816ca.js";import{g as c,n as u}from"./common.444ab4c5.js";const f=()=>{const o={userName:r(""),userEmail:r(""),comment:r(""),reset(){this.userName.value="",this.userEmail.value="",this.comment.value=""},emailValidate(){const e=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return t.value=!this.userEmail.value||e.test(this.userEmail.value),t.value}},t=r(!0),s=i(()=>o.userName.value.trim().length>0&&o.userName.value.length<=50&&o.userEmail.value.length<=50&&o.comment.value.trim().length>0&&o.comment.value.length<=255);return{commentData:o,isCorrectCommentData:s,isCorrectEmail:t}},D=o=>{const t={userName:o.userName.value,userEmail:o.userEmail.value,comment:o.comment.value,date:c()};return o.reset(),t};const g={__name:"commentCreationForm",emits:["addCommentInPost"],setup(o){const{commentData:t,isCorrectCommentData:s,isCorrectEmail:e}=f();return{__sfc:!0,commentData:t,isCorrectCommentData:s,isCorrectEmail:e,getComment:D}}};var h=function(){var t=this,s=t._self._c,e=t._self._setupProxy;return s("form",{staticClass:"comment-creation-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.commentData.userName.value,expression:"commentData.userName.value"}],staticClass:"comment-creation-form__user-name comment-creation-form__input",attrs:{type:"text",placeholder:"\u0418\u043C\u044F",required:"",maxlength:"50"},domProps:{value:e.commentData.userName.value},on:{input:function(a){a.target.composing||t.$set(e.commentData.userName,"value",a.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.commentData.userEmail.value,expression:"commentData.userEmail.value"}],staticClass:"comment-creation-form__user-email comment-creation-form__input",attrs:{type:"email",placeholder:"email",maxlength:"50"},domProps:{value:e.commentData.userEmail.value},on:{input:function(a){a.target.composing||t.$set(e.commentData.userEmail,"value",a.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.commentData.comment.value,expression:"commentData.comment.value"}],staticClass:"comment-creation-form__content",attrs:{required:"",maxlength:"255",placeholder:"\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F"},domProps:{value:e.commentData.comment.value},on:{input:function(a){a.target.composing||t.$set(e.commentData.comment,"value",a.target.value)}}}),s("div",{staticClass:"comment-creation-form__create"},[s("button",{staticClass:"comment-creation-form__button base-button",attrs:{disabled:!e.isCorrectCommentData},on:{click:function(a){a.preventDefault(),e.commentData.emailValidate()&&t.$emit("addCommentInPost",e.getComment(e.commentData))}}},[t._v(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")]),e.isCorrectEmail?t._e():s("div",{staticClass:"email-clue"},[t._v(" Email \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u043E\u0432\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 name@email.com ")])])])},x=[],P=m(g,h,x,!1,null,null,null,null);const b=P.exports,$="/blog/assets/delete.7370a822.svg";const N={__name:"commentsContent",props:{comments:Array},emits:["deleteComment"],setup(o){return{__sfc:!0,normalizeDate:u}}};var E=function(){var t=this,s=t._self._c,e=t._self._setupProxy;return s("div",{staticClass:"comments-content"},t._l(t.comments.toReversed(),function(a,l){return s("div",{key:`${l} comment`,staticClass:"comments-content__comment comment"},[s("div",{staticClass:"comment__user-information"},[s("div",{staticClass:"comment__user-name"},[s("strong",[t._v("\u0418\u043C\u044F:")]),t._v(" "+t._s(a.userName)+" ")]),Boolean(a.userEmail)?s("div",{staticClass:"comment__user-email"},[s("strong",[t._v("email:")]),t._v(" "+t._s(a.userEmail)+" ")]):t._e()]),s("div",{staticClass:"comment__value"},[t._v(t._s(a.comment))]),s("div",{staticClass:"comment__date"},[t._v(t._s(e.normalizeDate(a.date)))]),s("button",{staticClass:"comment__delete",on:{click:function(n){return t.$emit("deleteComment",t.comments.length-l-1)}}},[s("img",{staticClass:"icon16",attrs:{src:$,alt:"delete"}})])])}),0)},y=[],S=m(N,E,y,!1,null,null,null,null);const F=S.exports,k=o=>{let t=o;const s=JSON.parse(localStorage.getItem("posts")),e={post:r(structuredClone(s[t])),deletePost(n){s.splice(t,1),localStorage.setItem("posts",JSON.stringify(s)),n.push("/")},editPost(){this.post.value.date=c(),s.splice(t,1),s.push(structuredClone(this.post.value)),localStorage.setItem("posts",JSON.stringify(s)),t=s.length-1,l.value=!1},deleteComment(n){e.post.value.comments.splice(n,1),s[t].comments.splice(n,1),localStorage.setItem("posts",JSON.stringify(s))},addComment(n){e.post.value.comments.push(n),s[t].comments.push(n),localStorage.setItem("posts",JSON.stringify(s))}},a=i(()=>Boolean(e.post.value.title.trim())&&Boolean(e.post.value.shortDescription.trim())&&e.post.value.title.length<=50&&e.post.value.shortDescription.length<=100&&e.post.value.fullDescription.length<=255),l=r(!1);return{postData:e,isCorrectPostData:a,editMode:l}};const w={__name:"PostPage",props:{id:String},setup(o){const t=o,s=_(),{postData:e,isCorrectPostData:a,editMode:l}=k(t.id);return{__sfc:!0,props:t,router:s,postData:e,isCorrectPostData:a,editMode:l,FullDescription:p,ShortDescription:v,TitleInput:d,TheHeader:C,CommentCreationForm:b,CommentsContent:F,normalizeDate:u}}};var I=function(){var t=this,s=t._self._c,e=t._self._setupProxy;return s("div",{staticClass:"post-page page"},[s(e.TheHeader,{attrs:{header:"\u041C\u0438\u043D\u0438-\u0431\u043B\u043E\u0433"}}),s("article",{staticClass:"post"},[e.editMode?s(e.TitleInput,{attrs:{maxlength:50},model:{value:e.postData.post.value.title,callback:function(a){t.$set(e.postData.post.value,"title",a)},expression:"postData.post.value.title"}}):s("h2",{staticClass:"post__title"},[t._v(" "+t._s(e.postData.post.value.title)+" ")]),e.editMode?s(e.ShortDescription,{attrs:{maxlength:100},model:{value:e.postData.post.value.shortDescription,callback:function(a){t.$set(e.postData.post.value,"shortDescription",a)},expression:"postData.post.value.shortDescription"}}):s("p",{staticClass:"post__short-description"},[t._v(" "+t._s(e.postData.post.value.shortDescription)+" ")]),e.editMode?s(e.FullDescription,{attrs:{maxlength:255},model:{value:e.postData.post.value.fullDescription,callback:function(a){t.$set(e.postData.post.value,"fullDescription",a)},expression:"postData.post.value.fullDescription"}}):s("p",{staticClass:"post__full-description"},[t._v(" "+t._s(e.postData.post.value.fullDescription)+" ")]),s("p",{staticClass:"post__date"},[t._v(t._s(e.normalizeDate(e.postData.post.value.date)))]),s("div",{staticClass:"post__buttons"},[s("button",{staticClass:"post__delete base-button",on:{click:function(a){return e.postData.deletePost(e.router)}}},[t._v(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C ")]),e.editMode?s("button",{staticClass:"base-button",attrs:{disabled:!e.isCorrectPostData},on:{click:function(a){return e.postData.editPost()}}},[t._v(" \u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 ")]):s("button",{staticClass:"post__edit base-button",on:{click:function(a){e.editMode=!0}}},[t._v(" \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C ")])])],1),s("div",{staticClass:"comments"},[s("h4",{staticClass:"comments__header"},[t._v("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")]),s("div",{staticClass:"comments__wrapper"},[s(e.CommentsContent,{attrs:{comments:e.postData.post.value.comments},on:{deleteComment:e.postData.deleteComment}}),s(e.CommentCreationForm,{on:{addCommentInPost:e.postData.addComment}})],1)])],1)},M=[],J=m(w,I,M,!1,null,null,null,null);const z=J.exports;export{z as default};
