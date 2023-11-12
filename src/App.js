import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Bape Sk8 STA Sneakers',
          img: 'bape-sk8.png',
          desc: 'Black&White Leather Sneakers',
          category: 'Sneakers',
          price: '450$'
        },
        {
          id: 2,
          title: 'Comme Des Garcons Trouser',
          img: 'cdg-pants.png',
          desc: 'Wide-open Gortex Pants',
          category: 'Bottoms',
          price: '550$'
        },
        {
          id: 3,
          title: 'Heron Preston Long-sleeve',
          img: 'heron-ls.png',
          desc: 'Oversized Cotton Top',
          category: 'Tops',
          price: '400$'
        },
        {
          id: 4,
          title: 'Lemaire Maxi Chino Denim',
          img: 'lemaire-jeans.png',
          desc: 'Oversized Wide Black Jeans',
          category: 'Bottoms',
          price: '700$'
        },
        {
          id: 5,
          title: 'Maison Margiela Tabi High-Top',
          img: 'mm-tabi-high.png',
          desc: 'New MM Collection Sneakers',
          category: 'Sneakers',
          price: '600$'
        },
        {
          id: 6,
          title: 'Off-White Out Of Office White',
          img: 'off-white-ooo.png',
          desc: 'New White Sneakers',
          category: 'Sneakers',
          price: '520$'
        },
        {
          id: 7,
          title: 'Palm Angels T-Shirt Bear Loose',
          img: 'palm-angels-bear.png',
          desc: 'Brand Signature T-Shirt',
          category: 'Tops',
          price: '410$'
        },
        {
          id: 8,
          title: 'Palm Angels Taped Jacket',
          img: 'palm-angels-west.png',
          desc: 'Gortex Black-Stripe Jacket',
          category: 'Tops',
          price: '450$'
        },
        {
          id: 9,
          title: 'Air Jordan Fleece Pants',
          img: 'jordan-fleece-pants.png',
          desc: 'Gortex Flight Pants',
          category: 'Bottoms',
          price: '310$'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
