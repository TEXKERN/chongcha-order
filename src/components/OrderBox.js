import "./OrderBox.css"
import Button from "./Button"
import Order from "./Order"
import OrderNumber from "./OrderNumber"

export default function OrderBox() {
    return (
        <>
            <div className="order">
                <div className="top">
                    <OrderNumber className="ordernumber" />
                </div>
                <div className="middle">
                    <Order className="list" />
                </div>
                <div className="bottom">
                    <Button className="button" />
                </div>
            </div>
        </>
    )
}