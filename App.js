//to keep my all React code
// this heading is basically a react element & what is the react element? -> its nothing but a normal js object
// props are children or attributes we pass in    
//=> this are the props { id:"heading" , xyz:"abc"},"hello react from Pooja")
// const heading = React.createElement(
//           "h1", 
//           { id:"heading" , xyz:"abc"},
//            "hello react from Pooja");
//      const root = ReactDOM.createRoot(document.getElementById("root"));
//      root.render(heading);

const parent = React.createElement("div", { id:"parent"}, [ 
     React.createElement("div", {id:"child"}, [
     React.createElement("h1",{},"i am h1 tag"),
     React.createElement("h2",{},"i am h2 tag")  
]),
React.createElement("div", {id:"child2"}, [
     React.createElement("h1",{},"i am h1 tag"),
     React.createElement("h2",{},"i am h2 tag")  
]),
]);
//comment

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);