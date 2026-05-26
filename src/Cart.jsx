function Cart({ cart, total, onRemoveFromCart }) {
	return (
		<section>
			<h2>Carrito</h2>

			{cart.length === 0 ? (
				<p>El carrito está vacío.</p>
			) : (
				<ul className="cart-list">
					{cart.map((product, index) => (
						<li key={`${product.id}-${index}`}>
							<span>
								{product.name} - ${product.price}
							</span>
							<button
								type="button"
								onClick={() => onRemoveFromCart(product.id)}
							>
								Quitar
							</button>
						</li>
					))}
				</ul>
			)}

			<h3>Total: ${total}</h3>
		</section>
	);
}

export default Cart;
