import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="col">
      <div className="card h-100 bg-dark text-white border-0 shadow-lg position-relative overflow-hidden product-card"
        onClick={() => onAddToCart(product)}
        style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
        {product.isOnSale && (
          <div className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1 fw-bold shadow-sm" style={{ zIndex: 1, borderBottomRightRadius: '10px' }}>
            LIVE DEAL -30%
          </div>
        )}
        <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
          <img
            src={product.image}
            className="card-img-top h-100 w-100"
            alt={product.name}
            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
          />
        </div>
        <div className="card-body bg-dark">
          <h5 className="card-title fw-bold mb-2">{product.name}</h5>
          <div className="d-flex align-items-center gap-2">
            <span className="fs-4 fw-bold text-success">₹{product.price}</span>
            {product.isOnSale && (
              <span className="text-muted text-decoration-line-through small">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
        <div className="card-footer bg-dark border-0 pb-3">
          <button className="btn btn-danger w-100 fw-bold">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
