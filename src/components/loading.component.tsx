import { FaRotate } from "react-icons/fa6"
interface ILoadingComponentProps {
    size ?: number
}
const LoadingComponent = (props: ILoadingComponentProps) => {
    return (
        <div className="flex items-center justify-center">
            <FaRotate size={props.size ? props.size: 30} />
        </div>
    )
}
export default LoadingComponent;