import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import HeaderBar from "./HeaderBar";
import ItemCard from "./ItemCard";
import ItemCardPurchased from "./ItemCardPurchased";
import api from "../utils/api";

class MainPage extends Component {
    
state = {
    search: "",
    itemData: [],

    PostItemName: "",
    PostItemAmount: "",
    PostItemCategory: "",
    PostItemCondition: "",
    PostItemPrice: "",
    PostItemShippingCost: "",
    PostItemDescription: "",
    PostItemImage: "",

    itemToDelete: "",

    purchasedItems: []
};

componentDidMount(){
    this.readItem();
    this.readPurchases();
}

handleInputChange = event=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    });
    
}

searchPosts = () =>{
    var data = {
        search: this.state.search
    };

    console.log(data)
    api.searchPosts(data)
        .then((res) => {
            console.log(res)
        });
};

readItem = () => {
    api.readItem()
        .then((res) => {
            this.setState({ itemData: res.data });
        })
        .catch((err) => console.log(err));
};

readPurchases = () => {
    api.readPurchases()
        .then((res) => {
            this.setState({ purchasedItems: res.data });
        })
        .catch((err) => console.log(err));
}

postItem = () =>{
    var data = {
        item : this.state.PostItemName,
        quantity: this.state.PostItemAmount,
        type: this.state.PostItemAmount,
        condition: this.state.PostItemCondition,
        price: this.state.PostItemPrice,
        shipping: this.state.PostItemShippingCost,
        description: this.state.PostItemDescription,
        image: this.state.PostItemImage
    };

    api.postItem(data)
        .then(()=>{
            this.readItem()
        })

};

deleteItem = (id, event) =>{
    event.preventDefault();

console.log("This is the ID to Delete");
console.log(id);
var thingToDelete = {
    thingID: id
}

    api.deleteItem(thingToDelete)
        .then(()=>{
            this.readItem()
        })
};


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
                searchPosts={this.searchPosts}
                saveCookie={this.saveCookie}
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
                shipping={e.shippingCost}
                id={e._id} 
                deleteItem={this.deleteItem}
                saveItemID={this.saveItemID}
            />

            </Grid>
            )}
            </Grid>
            </Grid>
            </Grid>



            <br></br>
            <h2>Purchased Items:</h2>
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
                deleteItem={this.deleteItem.bind(this, index)}
            />

            </Grid>
            )}
            </Grid>
            </Grid>
            <Grid item xs={3}>
            
            </Grid>
            </Grid>
        </div>
    )
}
};

export default MainPage;