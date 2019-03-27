import Loadable from "react-loadable";
import Loading from "components/loading"
export default Component => Loadable({
    loader: Component,
    loading: Loading,
    timeout: 100000
})