    class ListElement extends React.Component {
        constructor(props){
            super(props);
            this.state={};  
        }
        selectValue(){
             this.props.callBackFn(this.props.value); 
        }
        render() { 
                    return (<li key={this.props.id}  onClick={this.selectValue.bind(this)} >{this.props.value}</li>);
                }
    }     

    class Typeahead extends React.Component {
        constructor(props){
            super(props);
            this.state={
                selectedValue:"",
                searchList:[{cityName:"Bangalore"},{ cityName:"Chennai"},{cityName:"Hyderabad"},{ cityName:"Pune"}],
                filteredListDom:[]

            }; 
        }


        updateSelValue(evt){
                this.setState({selectedValue:evt.target.value});
                if(evt.target.value==""){
                    this.setState({filteredListDom: [] });
                }else{
                        this.filterList(); 
                }
        }
        valueSelected(value){
           this.setState({selectedValue:value,filteredListDom:[]});
        }
        filterList(){
                var filteredListDom=this.state.searchList.filter(function(arrayObj){
                        if(arrayObj.cityName.indexOf(this.state.selectedValue) != -1 ){
                                return true;
                        }else{
                            return false;
                        }
                }.bind(this)).map(function(arrayObj,index){
                    return <ListElement  callBackFn={this.valueSelected.bind(this)} value={arrayObj.cityName}  key={index}   />
                }.bind(this))  ;
                this.setState({filteredListDom: filteredListDom });
        }
        render() {
                    return (<div  className="typeahead-container" >
                                <input type="text"  value={this.state.selectedValue}  onChange={this.updateSelValue.bind(this)}  />
                                <ul>
                                    {this.state.filteredListDom}
                                </ul>
                                 
                            </div>); 
                } 
    }	
    ReactDOM.render(<Typeahead/>,document.getElementById("main"));