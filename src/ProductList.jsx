function ProductList({ products, onAddToCart }) {
	return (
		<section>
			<h2>Productos</h2>
			<ul className="product-list">
				{products.map((product) => (
					<li key={product.id}>
						<span>
							{product.name} - ${product.price}
						</span>
						<button type="button" onClick={() => onAddToCart(product)}>
							Agregar
						</button>
					</li>
				))}
			</ul>
		</section>
	);
}

export default ProductList;
