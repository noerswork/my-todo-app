(this["webpackJsonp1.intro-simple-todo-app"]=this["webpackJsonp1.intro-simple-todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),l=n.n(r),i=n(5),c=n(1),s=n(2),d=n(4),p=n(3),u=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.completed,o=t.id,r=t.title;return a.a.createElement("div",null,a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:this.props.todo.completed,onChange:function(){return e.props.handleChangeProps(o)}}),a.a.createElement("button",{onClick:function(){return e.props.deleteTodoProps(o)}},"Delete"),a.a.createElement("span",{style:n?{fontStyle:"italic",color:"#a81d57",opacity:.4,textDecoration:"line-through"}:null},r)))}}]),n}(a.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.todos.map((function(t){return a.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),n}(a.a.Component),h=function(){return a.a.createElement("header",null,a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px",marginTop:"20px",textAlign:"center",color:"#54287e"}},"Simple Todo App"),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},f=n(8),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={title:""},e.onChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},a.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add Todo ...",value:this.state.title,name:"title",onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"submit",className:"input-submit"}))}}]),n}(o.Component),v=n(17),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[{id:Object(v.a)(),title:"Setup development environment",completed:!0},{id:Object(v.a)(),title:"Develop website and add content",completed:!1},{id:Object(v.a)(),title:"Deploy to live server",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(i.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodoItem=function(t){var n={id:Object(v.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(i.a)(e.state.todos),[n])})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(h,null),a.a.createElement(b,{addTodoProps:this.addTodoItem}),a.a.createElement(m,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),n}(a.a.Component);n(14);l.a.render(a.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a669cf5d.chunk.js.map