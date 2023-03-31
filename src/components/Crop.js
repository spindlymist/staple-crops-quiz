import { useCrops } from "../hooks/useCrops";
import { ProducerInput } from "./ProducerInput";

export function Crop({
    index
}) {

    const {
        rank,
        crop,
        isCropRevealed,
    } = useCrops(state => state.crops[index]);

    return (
        <tr className="Crop" style={{
            visibility: isCropRevealed ? "" : "hidden"
        }}>
            <td className="rank">{rank}</td>
            <td className="crop">{crop}</td>
            <td className="producer">
                <ProducerInput index={index} />
            </td>
        </tr>
    );

}
