/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function OrderDetails({ itemsInBag }) {

    function calculateTotal() {
        let ordemTotal = 0;
        itemsInBag.forEach(item => ordemTotal += item.price * item.quantity);
        return ordemTotal.toFixed(2);
    }

    return (
        <>
            <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInBag.map(item =>
                           <tr>
                            <td>{item.quantity}x {item.name}</td>
                            <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                           </tr>
                        )}
                    
                        <tr>
                            <th>Total</th>
                            <th>$ {calculateTotal()}</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default OrderDetails;