import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import HeaderBar from "../HeaderBar/HeaderBar";
import ItemCard from "./ItemCard";
import api from "../../utils/api";

class MainPage extends Component {
    
state = {
    search: "",
    itemData: [],
    itemToDelete: "",
    purchasedItems: [],
    account: "SignUp/SignIn",
    signInStatue: "No"
};

componentDidMount(){

    var x = {
        search: ""
    };

    var y = {
        account: localStorage.getItem("account")
    }; 

    api.searchForAccount(y)
        .then((res) => {
            console.log(res);

            try {
                this.setState({ account: "Welcome, " + res.data[0].username + "!"});
            } catch (error){
                console.log("No one is logged in");
            } 

        })           
    

    api.searchPosts(x)
        .then((res) => {
            this.setState({ itemData: res.data });
        });
    
    api.readPurchases()
        .then((res) => {
            console.log(res);
            this.setState({ purchasedItems: res.data });
        })
}

handleInputChange = event=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
    
}


// deleteItem = (id, event) =>{
//     event.preventDefault();

// console.log("This is the ID to Delete");
// console.log(id);
// var thingToDelete = {
//     thingID: id
// }

//     api.deleteItem(thingToDelete)
//         .then(()=>{
//             window.location.reload();    
//         })
// };


saveCookie = () =>{
    localStorage.setItem("search", this.state.search);
}

saveItemID = (id, event) =>{
    event.preventDefault();
    localStorage.setItem("itemID", id)
    
    
}

render(){
    
    return (
        
        <div>
            <HeaderBar
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                saveCookie={this.saveCookie}
                currentAccount={this.state.account}
            />
            <br></br>
            <h2>Items for Sale:</h2>
            <br></br>
            <Grid container spacing={3}>
            <Grid item xs={12}>
            <Grid container spacing={3}>
            {[...this.state.itemData].map((e, index)=>
            <Grid item xs={4}>
            <ItemCard
                key={e._id}
                image={"." + e.image}
                title={e.name}
                description={e.description}
                price={"$" + e.price}
                shipping={"Shipping: $" + e.shippingCost}
                id={e._id} 
                // deleteItem={this.deleteItem}
                saveItemID={this.saveItemID}
            />

            </Grid>
            )}
            </Grid>
            </Grid>
            </Grid>



            <br></br>
            {/* <h2>Purchased Items:</h2>
            <br></br>
            <Grid container spacing={3}>
            <Grid item xs={9}>
            <Grid container spacing={3}>
            {[...this.state.purchasedItems].map((e, index)=>
            <Grid item xs={4}>
            <ItemCardPurchased
                image={"." + e.image}
                title={e.item}
                description={e.description}
                price={"$" + e.price}
                shipping={e.shipping}
                id={e._id} 
                // deleteItem={this.deleteItem.bind(this, index)}
            />

            </Grid>
            )}
            </Grid>
            </Grid>
            <Grid item xs={3}>
            
            </Grid>
            </Grid> */}
        </div>
    )
}
};

export default MainPage;