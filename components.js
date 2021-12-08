
class ProductTile extends React.Component {
    render() {
        return (
            <div className="product">
                  <div className="product-content">
                    <div className="product-image" >
                      <img src={this.props.product.image} alt="product-image"/>
                    </div>
                    <div className="buttons">
                      <button type ="button" className="btn-view">Quick View<span>
                        <i className="fas fa-plus"></i></span>
                      </button>
                      <button type ="button" className="btn-buy">Buy now<span>
                        <i className="fas fa-shopping-cart"></i></span>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-info-top">
                      <h2 className="sm-title">{this.props.product.name}</h2>
                      <div className="rating">
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "fas fa-star"></i></span>
                        <span><i className= "far fa-star"></i></span>
                      </div>
                    </div>
                    <a href="product_detail.html" className="product-name">{this.props.product.name}</a>
                    <p className="product-price">{this.props.product.price}</p>
                    <p className="product-price">€6.79</p>
                  </div>
                  <div className="discount">
                    <h2 className="sm-title">15% off</h2>
                  </div>
                </div>
        )
    }
}

class ProductCatalog extends React.Component {
    renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }

    render() {
        let tiles = [];
        for (let i = 0; i < this.props.products.length; i++) {
            const current_item = this.props.products[i];
            tiles.push(this.renderTile(current_item));
        }
        return tiles;
    }
}
