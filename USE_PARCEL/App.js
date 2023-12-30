 var printDiv=React.createElement("div",{
            id:"printdiv"
        }
        ,
        [
            React.createElement("b",null,"its bold tag content"),
            React.createElement("div",{id:"childdiv"},React.createElement("h1",null,"its child div"))

        ]
        );

        ReactDOM.render(printDiv,document.getElementById("root"));