import Bike from "../../bike/Bike";
import Car from "../Car";
import workshop from './img/workshop.jpg'

export default function CarShop(): JSX.Element {
    return(
        <div>
            <h1>Car Shop</h1>
            <div>
                <h2>Cars</h2>
                <Car brand='Mercedes' color='black' />
                <Car brand='Opel' color='blue' />
                <Car brand='KIA' color='orange' />
                <Car brand='Audi' color='green' />
                <Car brand='Tesla' color='red' />
                <h1>Первый способ подгрузить изображение через импорт</h1>
                <img src={workshop} alt="" />
            </div>
            <div>
                <h2>Motorbikes</h2>
                <Bike brand='Yamaha' color='purple' gears={18} price={50_000} />
                <Bike brand='Suzuki' color='red' gears={20} price={35_000} />
                <Bike brand='BMW' color='black' gears={18} price={40_000} />
                <h1>Второй способ из папки public, без точки перед слэшем</h1>
                <img src="worker.jpg" alt="" />
            </div>
        </div>
    )
}
