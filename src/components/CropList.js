import "./CropList.css";
import { Crop } from './Crop';
import { useCrops } from '../hooks/useCrops';

export function CropList() {

    console.log(useCrops());
    const crops = useCrops(state => state.crops);

    const cropComponents = crops.map(
        (crop, idx) => (
            <Crop
                key={crop.rank}
                index={idx}
            />
        )
    );

    return (
        <table className="CropList">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Crop</th>
                    <th>Top Producer</th>
                </tr>
            </thead>
            <tbody>
                {cropComponents}
            </tbody>
        </table>
    );

}
