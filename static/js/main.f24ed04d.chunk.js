(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),i=(n(13),n(8)),s=n(5),l=n(2),d=n(0),j=function(e){var t=e.text,n=e.onClick;return Object(d.jsx)("button",{onClick:n,className:"btn shadow",children:t})};j.defaultProps={text:"button",color:"black"};var u=j,b=function(e){var t=e.title,n=e.onAdd,a=e.showAdd;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(u,{color:"green",text:a?"Ocultar menu":"Adicionar Tarefa",onClick:n})]})};b.defaultProps={title:"- Lista de tarefas -"};var h=b,m=n.p+"static/media/delete.6c14c994.svg",f=function(e){var t=e.task,n=e.onDelete,a=e.onToggle;return Object(d.jsxs)("div",{className:t.reminder?"task reminder":"task",onDoubleClick:function(){return a(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)("img",{src:m,alt:"Deletar tarefa",className:"delete",onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},O=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(f,{task:e,onDelete:n,onToggle:a},e.id)}))})},x=function(e){var t=e.onAdd,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),j=s[0],u=s[1],b=Object(a.useState)(!1),h=Object(l.a)(b,2),m=h[0],f=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c,day:j,reminder:m}),o(""),u(""),f(!1)):alert("Por favor preencha o nome da tarefa.")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"Tarefa",children:"Tarefa:"}),Object(d.jsx)("input",{type:"text",placeholder:"Nome da tarefa",value:c,onChange:function(e){return o(e.target.value)},id:"Tarefa"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"horario",children:"Data e hora:"}),Object(d.jsx)("input",{type:"text",placeholder:"Horario da tarefa",value:j,onChange:function(e){return u(e.target.value)},id:"horario"})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{hmmlFor:"reminder",children:"Criar lembrete:"}),Object(d.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return f(e.currentTarget.checked)},id:"reminder"})]}),Object(d.jsx)("input",{type:"submit",value:"Salvar tarefa",className:"btn btn-block"})]})};var v=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),o=Object(l.a)(c,2),j=o[0],u=o[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onAdd:function(){r(!n)},showAdd:n}),n&&Object(d.jsx)(x,{onAdd:function(e){var t=Math.floor(1e4*Math.random());u([].concat(Object(i.a)(j),[Object(s.a)({id:t},e)]))}}),Object(d.jsx)("div",{className:"divisor"}),j.length>0?Object(d.jsx)(O,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(d.jsx)("p",{className:"center",children:"Nenhuma tarefa salva."})]}),Object(d.jsx)("a",{href:"https://github.com/BrunoSumar/React-task-manager",children:"Voltar ao reposit\xf3rio"})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.f24ed04d.chunk.js.map